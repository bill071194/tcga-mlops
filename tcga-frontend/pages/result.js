import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { React, useContext } from "react";
import { DataContext } from "./_app";

const Result = () => {
    const {data} = useContext(DataContext);
    const classes = ['Hematopoietic and Reticuloendothelial Systems Cancer', 
                   'Brain Cancer',
                   'Bronchus and Lung Cancer',
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
    console.log(res_list);
    const cancerType = classes[res_list.indexOf(Math.max(...res_list))];
    console.log(cancerType);
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
        title="Predicted Result">
        Most likely cancer type.
        </SectionTitle>
        <div className="flex w-full flex-col mt-4 items-center justify-center">
            <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-teal-500 lg:leading-tight lg:text-4xl dark:text-white">
                {cancerType}
            </h1>  
        </div>
        <Footer />
        </>
      );
}

export default Result;