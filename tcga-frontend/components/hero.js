import Image from "next/image";
import Container from "./container";
import dnaImg from "../public/img/dna_3d_ver5.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-teal-500 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Revolutionizing Cancer Diagnosis and Treatment
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            tcg.ai leverages genomic data to predict cancer types accurately. We aim to empower oncologists with precise insights for tailored treatment strategies, improving patient care outcomes.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/predict"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-teal-600 rounded-md ">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="pl-5 flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={dnaImg}
              width="1000"
              height="1000"
              className={"object-cover"}
              alt="DNA Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-4 text-gray-400 dark:text-gray-400">
              <TCGALogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <DatabricksLogo />
            </div>
            <div className="pt-6 text-gray-400 dark:text-gray-400">
              <AWSLogo />
            </div>
            <div className="pt-3 text-gray-400 dark:text-gray-400">
              <CatboostLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <DockerLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function TCGALogo() {
  return (
    <Image
      src="/tcga_logo1.png"
      alt="N"
      width="150"
      height="150"
    />
  );
}

function DatabricksLogo() {
  return (
    <Image
      src="/databricks_logo1.png"
      alt="N"
      width="170"
      height="170"
    />
  );
}

function AWSLogo() {
  return (
    <Image
      src="/aws_logo1.png"
      alt="N"
      width="100"
      height="100"
    />
  );
}

function DockerLogo() {
  return (
    <Image
      src="/docker_logo1.png"
      alt="N"
      width="100"
      height="100"
    />
  );
}

function CatboostLogo() {
  return (
    <Image
      src="/catboost_logo1.png"
      alt="N"
      width="80"
      height="80"
    />
  );
}

export default Hero;