import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { useFormik } from 'formik';
import axios from 'axios';
import { React, useContext } from "react";
import { DataContext } from "./_app";
import { useRouter } from 'next/navigation'

const Predict = () => {
  const {setData} = useContext(DataContext);
  const router = useRouter();
  const somaticMutations = ['TP53', 'PIK3CA', 'TTN', 'CDH1', 'GATA3', 'APC', 'KRAS', 'SYNE1', 'CSMD3', 
                            'MUC16', 'RYR2', 'USH2A', 'NF1', 'PTEN', 'NRAS', 'MUC5B', 'TET2', 'PTPN11', 'NOTCH1', 
                            'FBXW7', 'PHF6', 'IGHV270', 'IGLV31', 'IGHV270D', 'DNMT3A', 'NPM1', 'FLT3', 'IDH2', 
                            'RUNX1', 'EGFR', 'IDH1', 'ATRX', 'CIC', 'ARID1A', 'VHL', 'PBRM1', 'SETD2', 'BAP1', 'MET', 
                            'KMT2C', 'PKHD1', 'ICE1', 'SMAD4', 'CDKN2A', 'BRAF', 'DNAH5', 'PCLO', 'LRP2', 'FREM2', 
                            'FLG', 'TG', 'HRAS', 'KMT2D', 'BTG2', 'B2M', 'PIM1', 'IGHG1', 'SPOP', 'FOXA1'];

  const initialFormikValues = {
    deceased: '0',
    age:'',
    sex:'0',
    PriorMalignancy:'',
    SynchronousMalignancy:'',
    TP53: '0',PIK3CA: '0',TTN: '0',CDH1: '0',GATA3: '0',
    APC: '0',KRAS: '0',SYNE1: '0',CSMD3: '0',MUC16: '0',
    RYR2: '0',USH2A: '0',NF1: '0',PTEN: '0',NRAS: '0',
    MUC5B: '0',TET2: '0',PTPN11: '0',NOTCH1: '0',
    FBXW7: '0',PHF6: '0',IGHV270: '0',IGLV31: '0',
    IGHV270D: '0',DNMT3A: '0',NPM1: '0',FLT3: '0',
    IDH2: '0',RUNX1: '0',EGFR: '0',IDH1: '0',
    ATRX: '0',CIC: '0',ARID1A: '0',VHL: '0',
    PBRM1: '0',SETD2: '0',BAP1: '0',MET: '0',
    KMT2C: '0',PKHD1: '0',ICE1: '0',SMAD4: '0',
    CDKN2A: '0',BRAF: '0',DNAH5: '0',PCLO: '0',
    LRP2: '0',FREM2: '0',FLG: '0',TG: '0',HRAS: '0',
    KMT2D: '0',BTG2: '0',B2M: '0',PIM1: '0',IGHG1: '0',
    SPOP: '0',FOXA1: '0',
    races: 'White',
  }

  const formik = useFormik({
    initialValues: initialFormikValues,
    onSubmit : async values => {
      let valuesArr = Object.values(values);
      
      switch (valuesArr[valuesArr.length-1]){
        case 'Asian':
          valuesArr.pop();
          valuesArr.push('1'); 
          valuesArr.push('0'); 
          valuesArr.push('0');
          valuesArr.push('0');
          break;
        case 'Black':
          valuesArr.pop();
          valuesArr.push('0'); 
          valuesArr.push('1'); 
          valuesArr.push('0');
          valuesArr.push('0');
          break;
        case 'Other':
          valuesArr.pop();
          valuesArr.push('0'); 
          valuesArr.push('0'); 
          valuesArr.push('1');
          valuesArr.push('0');
          break;
        case 'White':
          valuesArr.pop();
          valuesArr.push('0'); 
          valuesArr.push('0'); 
          valuesArr.push('0');
          valuesArr.push('1');
          break;
      }

      for (let i=0; i<valuesArr.length; i++) {
        if (valuesArr[i] == true) {
          valuesArr[i] = '1';
        }
      };

      const payloadValues = valuesArr.toString();
      const payload = { "data": payloadValues };

      await axios.post(process.env.NEXT_PUBLIC_SAGEMAKER_API, payload)
      .then(function(response) {
        setData(response.data);
        router.push('/result');
      })
      .catch(function(error) {
        console.log(error);
      });

      // alert(JSON.stringify(payload, null, 2));
    }
  });

  return (
    <>
      <Head>
        <title>tcg.ai - Cancer Classification Using Genomic Data</title>
        <meta
          name="description"
          content="tcg.ai is an AI tool to predict cancer types based on genomic data"
        />
        <link rel="icon" href="/tcgai_icon.png" />
      </Head>
      <Navbar />
      <SectionTitle
        pretitle="TCG.AI"
        title="Predict Cancer Type">
        Input patient information and any available simple somatic mutations.
      </SectionTitle>
      <div className="flex w-auto flex-col px-64">
        <form onSubmit={formik.handleSubmit} className="flex flex-col bg-gray-25 shadow-md rounded px-60 pt-6 pb-8 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white items center justify center">
          <h3 className="mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Status</h3>
          <select name="deceased" id="deceased" value={formik.values.deceased} onChange={formik.handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
            <option value="0">Alive</option>
            <option value="1">Deceased</option>
          </select>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Race/Ethnicity</h3>
          <select name="races" id="races" value={formik.values.races} onChange={formik.handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
            <option>White</option>
            <option>Black</option>
            <option>Asian</option>
            <option>Other</option>
          </select>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Sex</h3>
          <select name="sex" id="sex" value={formik.values.sex} onChange={formik.handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Age</h3>
          <input name="age" type="text" id="age" value={formik.values.age} onChange={formik.handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"></input>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Prior Malignancy</h3>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="PMYes" type="radio" value="1" name="PriorMalignancy" onChange={formik.handleChange} required className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="PMYes" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="PMNo" type="radio" value="0" name="PriorMalignancy" onChange={formik.handleChange} required className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="PMNo" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
          </div>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Synchronous Malignancy</h3>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="SMYes" type="radio" value="1" name="SynchronousMalignancy" onChange={formik.handleChange} required className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="SMYes" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="SMNo" type="radio" value="0" name="SynchronousMalignancy" onChange={formik.handleChange} required className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="SMNo" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
          </div>

          <h3 className="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Simple Somatic Mutations</h3>
          <div className="grid grid-cols-4 gap-4 content-center items-center justify-center border border-gray-200 rounded-lg px-5 pt-5 pb-5">
            {somaticMutations.map((ssms) => 
            <div className="flex items-center me-4">
              <input id="ssms-checkbox" name={ssms} type="checkbox" value="" onChange={formik.handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="ssms-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ssms}</label>
            </div>)}
          </div>

          <button type="submit" className="flex w-36 mt-12 mb-8 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded items-center justify-center content-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <span className="pl-2 text-lg">Predict</span>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Predict;