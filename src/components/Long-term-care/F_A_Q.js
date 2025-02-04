"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ICU at Home?",
    answer:
      "ICU at Home is a program that allows patients to receive intensive care services in the comfort of their own home.",
  },
  {
    question: "Why should someone consider ICU at Home?",
    answer:
      "It provides benefits like improved recovery rates, reduced infection risks, and more affordable services than hospital stays.",
  },
  {
    question: "Are the services available 24/7?",
    answer:
      "Yes, our services include 24/7 medical support and emergency response.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-[#eaf8f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-6">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg">
              <div
                className="bg-[#009A9F] p-4 rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-poppins text-base font-medium">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="bg-[#E6F5F5] mt-1 rounded-lg overflow-hidden"
                  >
                    <div className="p-4">
                      <p className="text-[#003638]  text-[16px] font-semibold leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
