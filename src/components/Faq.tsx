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
      "We focus on LPs and 45s in good condition, plus selected CDs and cassettes.",
  },
  {
    question: "How does it work?",
    answer:
      "Bring your records in during store hours. We’ll evaluate them and make an offer.",
  },
  {
    question: "Why sell with PCV?",
    answer:
      "We’re fast, fair, and experienced — and we pay cash on the spot.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 w-full">
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
                bg-gray-300`}
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
