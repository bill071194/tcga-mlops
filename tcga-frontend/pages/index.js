import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
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
      <Hero />

      <Footer />
    </>
  );
}

export default Home;