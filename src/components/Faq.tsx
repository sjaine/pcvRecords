"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Do we buy records?",
    answer: "You bet. In fact,we pay cash to the public for records every single day.",
  },
  {
    question: "Do you buy any kind of records?",
    answer:
      "We are mostly interested in rock and pop records from the early 1960’s to the present. We also buy blues, jazz, soul. We can take a look at other genres but can be very choosy when it comes to country, folk easy listening and classical and big band.",
  },
  {
    question: "How does it work?",
    answer:
      "Please call before bringing records to the store (905-338-8858). If you have more than 20 records you may need to leave them with us for 24 hours to tender you an offer.",
  },
  {
    question: "Why sell with PCV?",
    answer:
      "Unlike many dealers on Kijiji, we access every record individually. PCV is officially licensed as a second-hand dealer by the town of Oakville.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="space-y-6 w-full text-black">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={`
              relative w-full
              overflow-hidden
              border border-black
              bg-lime
              ${isOpen ? "rounded-[25px]" : "rounded-full"}
              `}
          >
            <button
              onClick={() => toggle(index)}
              className="
                w-full flex justify-between items-center
                px-6 py-4 text-lg font-semibold
                transition-[max-height,opacity,padding] duration-250 ease-out
              "
            >
              {item.question}
              <span className="text-2xl leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`
                bg-white px-6 text-lg
                overflow-hidden
                transition-[max-height,opacity,padding] duration-250 ease-out
                ${isOpen ? "max-h-[300px] opacity-100 pb-5 pt-5" : "max-h-0 opacity-0 pb-0 pt-0"}
              `}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
