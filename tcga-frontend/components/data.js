import {
  TableCellsIcon,
  CpuChipIcon,
  CloudIcon,
  DocumentChartBarIcon,
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

import architectureImg from "../public/img/architecture.png";
import computerImg from "../public/img/computerEMRVer2.png";

const benefitTwo = {
  title: "Backend Architecture",
  desc: "Databricks and AWS infrastructures.",
  image: architectureImg,
  bullets: [
    {
      title: "Data Engineering",
      desc: "All training data was crawled from TCGA API endpoints with Spark UDFs. Spark and Pandas are then used to transform data to appropriate formats.",
      icon: <TableCellsIcon />,
    },
    {
      title: "Model Development",
      desc: "CatBoost model was trained and optimized locally with Optuna, then inserted into a SageMaker container for deployment.",
      icon: <CpuChipIcon />,
    },
    {
      title: "Model Deployment",
      desc: "SageMaker endpoint is invoked by a Lambda function, which is deployed as an API with API Gateway for serverless inference.",
      icon: <CloudIcon />,
    },
  ],
};

const benefitOne = {
  title: "Empowering Precision",
  desc: "Harnessing the power of genomic insights, our tool identifies potential cancer vulnerabilities, facilitating proactive steps towards prevention and early intervention.",
  image: computerImg,
  bullets: [
    {
      title: "Predict Cancer Types",
      desc: "tca.ai can predict 10 types of common cancer based on patients' patterns of somatic mutations. More target classes including rare cancers will be added in the future.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "EMR Integration",
      desc: "The tcga.ai API could be integrated to any EMR or oncology detection / sequencing workflow.",
      icon: <DocumentChartBarIcon />,
    },
    {
      title: "No Database",
      desc: "Patient data is not stored or recorded in any databases, ensuring complete privacy and security.",
      icon: <CircleStackIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
