"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Do we buy records?",
    answer:
      "You bet. In fact, we pay cash to the public for records every single day.",
  },
  {
    question: "Do you buy any kind of records?",
    answer:
      "No. We are mostly interested in rock and pop records from the early 1960’s to the present. We also buy blues, jazz, soul. We can take a look at other genres but can be very choosy when it comes to country, folk easy listening and classical and big band. We do buy 45’s but we have thousands of them in storage and they are usually not worth very much. 78s are rarely worth anything.",
  },
  {
    question: "How does it work?",
    answer:
      "Please call before bringing records to the store (905-338-8858). If you have more than 20 records you may need to leave them with us for 24 hours to tender you an offer. Local by-laws require us to record your identification. Offers in excess of $1000 are paid certified cheque. Under $1000 is paid in good old-fashioned cash! If you need help transporting your records to the shop that can be arranged depending on the circumstances.",
  },
  {
    question: "Why sell with PCV?",
    answer:
      "Unlike many dealers that you will find on Kijiji, we are not in the business of trying to get your records for as little as possible on a “bulk deal”. We look at and access every record individually. PCV is officially licensed as a “second hand dealer” by the town of Oakville. That means we have to pass a police check and other requirement to stay in good standing. Lastly, check out our Facebook and Google reviews. People seem to like us. 😊",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 w-full text-black">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            {/* header */}
            <button
              onClick={() => toggle(index)}
              className={`flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold
                transition-colors
                ${isOpen ? "rounded-t-[25px]" : "rounded-[999px]"}
                bg-lime`}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="text-2xl leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* body */}
            {isOpen && (
              <div className="rounded-b-[25px] bg-white px-6 py-5 text-base leading-relaxed mb-[20px]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
