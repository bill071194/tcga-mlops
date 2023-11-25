import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { React, useContext } from "react";
import { DataContext } from "./_app";

const Result = () => {
    const {data} = useContext(DataContext);
    const classes = ['Leukemia', 
                   'Brain Cancer',
                   'Lung Cancer',
                   'Kidney Cancer',
                   'Breast Cancer',
                   'Uterus Cancer',
                   'Ovarian Cancer',
                   'Prostate Cancer',
                   'Skin Cancer', 
                   'Thyroid Cancer', 
                   'Colorectal Cancer',
                   'Pancreas Cancer'];
          
    const res_list =  data.map((d) => parseFloat(d));
    const cancerType = classes[res_list.indexOf(Math.max(...res_list))];
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
            pretitle="Predicted Result"
            title={cancerType}>
            Most likely cancer type.
        </SectionTitle>

        <div className="flex flex-wrap items-center justify-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-12">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-teal-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                        <th scope="col" class="px-6 py-3">Cancer Type</th>
                        <th scope="col" class="px-6 py-3">Probabilities (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[0]}</th>
                            <td class="px-6 py-4">{(data[0] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[1]}</th>
                            <td class="px-6 py-4">{(data[1] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[2]}</th>
                            <td class="px-6 py-4">{(data[2] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[3]}</th>
                            <td class="px-6 py-4">{(data[3] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[4]}</th>
                            <td class="px-6 py-4">{(data[4] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[5]}</th>
                            <td class="px-6 py-4">{(data[5] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[6]}</th>
                            <td class="px-6 py-4">{(data[6] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[7]}</th>
                            <td class="px-6 py-4">{(data[7] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[8]}</th>
                            <td class="px-6 py-4">{(data[8] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[9]}</th>
                            <td class="px-6 py-4">{(data[9] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[10]}</th>
                            <td class="px-6 py-4">{(data[10] * 100).toFixed(4)}</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{classes[11]}</th>
                            <td class="px-6 py-4">{(data[11] * 100).toFixed(4)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pl-5 flex items-center justify-center content-center w-full lg:w-1/2">
                <p>Image goes here</p>
            </div>
        </div>

        <Footer />
        </>
      );
}

export default Result;