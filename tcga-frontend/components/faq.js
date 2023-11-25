import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [

  {
    question: "Which cancer types are being predicted?",
    answer:
      "The project focuses on 12 common cancer types, which are Leukemia, Brain Cancer, Lung Cancer, Kidney Cancer, Breast Cancer, Uterus Cancer, Ovarian Cancer, Prostate Cancer, Skin Cancer, Thyroid Cancer, Colorectal Cancer, and Pancreas Cancer. Additional cancer types will be targeted in the future as TCGA training data increases.",
  },
  {
    question: "How accurate are the generated predictions?",
    answer: "Currently, the model uses the CatBoost algorithm with a F1-macro of 0.70 and accuracy of 75%. Model performance will improve as the TCGA collects more data.",
  },
  {
    question: "Where does the training data come from?",
    answer:
      "The model was trained with data from The Cancer Genome Atlas and the Genome Data Commons, which are both public resources from the National Institute of Health.",
  },
  {
    question: "How secure is the data collection process?",
    answer: "The project does not have a database component and will not record or store input patient data to any databases or servers.",
  },
];

export default Faq;