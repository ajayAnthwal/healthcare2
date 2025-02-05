"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ICU at Home?",
    answer:
      "ICU at Home is a specialized healthcare service where advanced medical care, similar to that provided in a hospital's Intensive Care Unit (ICU), is delivered at a patient's home. This includes continuous monitoring, medical equipment, and professional nursing care to manage critical illnesses or post-surgical recovery.",
  },
  {
    question: "Who needs ICU at Home services?",
    answer:
      "ICU at Home services are ideal for:\n patients recovering from major surgeries or critical illnesses, terminally ill patients needing palliative care, elderly patients who prefer home care over hospitalization, and patients requiring long-term mechanical ventilation or oxygen therapy.",
  },
  {
    question: "What medical equipment is included in ICU at Home?",
    answer:
      "Depending on the patient's needs, we provide ventilators, oxygen concentrators, cardiac monitors, infusion pumps, suction machines, nebulizers, and BiPAP/CPAP machines.",
  },
  {
    question: "What type of medical staff will be available?",
    answer:
      "Our ICU at Home service includes trained ICU nurses, physiotherapists (if required), on-call doctors for regular check-ups and emergencies, and support staff for equipment handling and setup.",
  },
  {
    question: "How do you ensure the quality of care at home?",
    answer:
      "We maintain high-quality care through skilled and certified healthcare professionals, advanced medical equipment for monitoring and treatment, regular visits by doctors to evaluate progress, and telemedicine support for real-time consultation.",
  },
  {
    question: "Is ICU at Home cost-effective compared to hospital ICU care?",
    answer:
      "Yes, ICU at Home is often more cost-effective than hospital ICU care while offering the same standard of treatment. It also reduces additional expenses such as transportation, food, and accommodation for family members.",
  },
  {
    question: "Can you manage patients on a ventilator at home?",
    answer:
      "Yes, we provide ventilator care at home, including trained professionals to monitor and operate the equipment, maintain proper hygiene, and handle emergencies.",
  },
  {
    question: "What if there's a medical emergency at home?",
    answer:
      "Our nurses are trained to handle emergencies. In case of a critical situation, they will stabilize the patient and coordinate with the nearest hospital or emergency services for further assistance.",
  },
  {
    question: "How do you customize ICU at Home services for different patients?",
    answer:
      "We assess the patient’s condition and requirements with the help of doctors and medical reports. Based on this evaluation, we create a personalized care plan, including necessary equipment, medications, and the number of healthcare professionals required.",
  },
  {
    question: "How long can ICU at Home services be availed?",
    answer:
      "ICU at Home services can be availed for as long as needed, whether for short-term recovery or long-term chronic care management.",
  },
  {
    question: "What are the advantages of ICU at Home?",
    answer:
      "It offers comfort of staying at home, reduced risk of hospital-acquired infections, personalized care and attention, and convenience for family members to be involved in care.",
  },
  {
    question: "How do I know if ICU at Home is suitable for my loved one?",
    answer:
      "Our medical team will conduct an initial assessment to evaluate the patient’s condition and determine whether ICU at Home is the right option.",
  },
  {
    question: "Are medicines and consumables included in the service?",
    answer:
      "Medicines and consumables are typically not included but can be arranged as per the patient’s prescription.",
  },
  {
    question: "Can the family stay involved in the care process?",
    answer:
      "Yes, we encourage family involvement and provide guidance on how they can support the patient’s care.",
  },
  {
    question: "How do I book ICU at Home services?",
    answer:
      "You can book our services by calling our helpline, sending an email, or visiting our website and filling out a request form. Our care manager will guide you through the process and help create a personalized care plan.",
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
          ICU at Home - Frequently Asked Questions
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
                      <p className="text-[#003638] text-[16px] font-semibold leading-6">
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
