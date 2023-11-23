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
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle
            pretitle="Watch a video"
            title="Learn how to fullfil your needs">
            This section is to highlight a promo or demo video of your product.
            Analysts says a landing page with video has 3% more conversion rate. So,
            don&apos;t forget to add one. Just like this.
        </SectionTitle>
        <SectionTitle
            pretitle="Testimonials"
            title="Here's what our customers said">
            Testimonails is a great way to increase the brand trust and awareness.
            Use this section to highlight your popular customers.
        </SectionTitle>
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <Footer />
      </>
    );
  }
  
  export default About;