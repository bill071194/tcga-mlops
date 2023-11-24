import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Faq from "../components/faq";
import workflowpng from "../public/img/workflow.png";

const About = () => {
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
          title="Integrated Pipeline">
          Data engineering, machine learning, model deployment, seamlessly integrated.
          <div className="pt-8 pb-10 text-gray-400 dark:text-gray-400">
            <WorkflowPng />
          </div>
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions and Disclaimers">
            Questions related to model performance, data security, data storage, and ethical uses of AI.
        </SectionTitle>
        <Faq />
        <Footer />
      </>
    );
  }
  
  function WorkflowPng() {
    return (
      <Image
        src={workflowpng}
        alt="workflow"
        width="1000"
        height="auto"
      />
    );
  }

  export default About;