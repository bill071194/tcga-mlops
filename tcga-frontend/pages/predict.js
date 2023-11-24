import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";

const Predict = () => {
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
        <div className="flex w-auto flex-col px-48">
          <InputForm />
        </div>
        <Footer />
      </>
    );
  }
  
  function InputForm() {
    return (
      <form class="flex flex-col bg-gray-25 shadow-md rounded px-60 pt-6 pb-8 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-white items center justify center">
        <h3 class="mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Race/Ethnicity</h3>
        <select id="races" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
          <option>White</option>
          <option>Black</option>
          <option>Asian</option>
          <option>Other</option>
        </select>

        <h3 class="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Patient Age</h3>
        <input type="number" id="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"></input>

        <h3 class="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Prior Malignancy</h3>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="PMYes" type="radio" value="" name="PriorMalignancy" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="PMYes" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="PMNo" type="radio" value="" name="PriorMalignancy" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="PMNo" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>

        <h3 class="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Synchronous Malignancy</h3>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="SMYes" type="radio" value="" name="SynchronousMalignancy" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="SMYes" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="SMNo" type="radio" value="" name="SynchronousMalignancy" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="SMNo" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
        </div>

        <h3 class="pt-8 mb-4 font-semibold text-teal-500 dark:text-white text-start">Simple Somatic Mutations</h3>
        <SSMSCheckboxes />

        <button class="flex w-36 mt-12 mb-8 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded items-center justify-center content-center" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
          <span class="pl-2 text-lg">Predict</span>
        </button>

      </form>
    );
  }

  function SSMSCheckboxes() {
    var somaticMutations = ['TP53', 'PIK3CA', 'TTN', 'CDH1', 'GATA3', 'APC', 'KRAS', 
                    'SYNE1', 'CSMD3', 'MUC16', 'RYR2', 'PTEN', 'NRAS', 'MUC5B', 'TET2', 
                    'PTPN11', 'NOTCH1', 'FBXW7', 'PHF6', 'IGHV2-70', 'IGLV3-1', 'IGHV2-70D', 
                    'DNMT3A', 'NPM1', 'FLT3', 'IDH2', 'RUNX1', 'EGFR', 'IDH1', 'ATRX', 'CIC', 
                    'ARID1A', 'VHL', 'PBRM1', 'SETD2', 'BAP1', 'MET', 'KMT2C', 'PKHD1', 'ICE1', 
                    'SMAD4', 'CDKN2A', 'BRAF', 'DNAH5', 'PCLO', 'LRP2', 'FREM2', 'FLG', 'TG', 'HRAS', 
                    'KMT2D', 'BTG2', 'B2M', 'PIM1', 'IGHG1'];
    return (
      <div class="grid grid-cols-4 gap-4 justify-between border border-gray-200 rounded-lg px-5 pt-5 pb-5">
        {somaticMutations.map((ssms) => 
        <div class="flex basis-1/4 items-center me-4">
          <input id="ssms-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="ssms-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ssms}</label>
        </div>)}
      </div>
    );
  }

  export default Predict;