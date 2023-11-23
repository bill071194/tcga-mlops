import {
  TableCellsIcon,
  CpuChipIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import architectureImg from "../public/img/architecture.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Model Architecture",
  desc: "Data engineering, machine learning, model deployment, seamlessly integrated.",
  image: architectureImg,
  bullets: [
    {
      title: "Data Engineering",
      desc: "Data crawled from TCGA API endpoints with Spark UDFs. Spark and Pandas are then used to transform data to appropriate formats.",
      icon: <TableCellsIcon />,
    },
    {
      title: "Model Development",
      desc: "CatBoost model was trained and optimized locally with Optuna, then inserted into a SageMaker container.",
      icon: <CpuChipIcon />,
    },
    {
      title: "Model Deployment",
      desc: "SageMaker endpoint is invoked by a Lambda function, which is deployed as an API with API Gateway for serverless inference.",
      icon: <CloudIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
