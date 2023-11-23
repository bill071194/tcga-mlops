import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Faq from "../components/faq";

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
        title="Empowering Precision">
        Harnessing the power of genomic insights, our tool identifies potential cancer vulnerabilities, facilitating proactive steps towards prevention and early intervention.
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
  
  export default About;