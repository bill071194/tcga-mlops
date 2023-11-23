import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
        <Footer />
      </>
    );
  }
  
  export default Predict;