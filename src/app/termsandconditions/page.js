import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-[#000] text-center font-poppins text-[40px] sm:text-[50px] md:text-[60px] font-semibold leading-[1.2] tracking-[-1.2px]">
        Terms and Conditions
      </h1>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-6 mt-6">
        {/* Section */}
        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Authorization and Consent
          </h2>
          <p className="text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            By availing services from Apollo HomeCare, the Client (patient or
            legal guardian) authorizes Apollo HomeCare to provide Physician,
            Nursing, Physiotherapy, and Telehealth services for consultation,
            evaluation, testing, and diagnosing medical conditions at home or in
            a hospital setting.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Medical Information Disclosure
          </h2>
          <p className="text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            The Client consents to Apollo HomeCare obtaining and disclosing
            medical records, including but not limited to laboratory reports,
            consultation records, X-rays, hospital records, psychiatric
            information, and other clinical documents, for the purpose of
            ensuring proper medical care.
          </p>
        </section>

        {/* Section */}
        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Emergency Treatment
          </h2>
          <p className="text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            Apollo HomeCare’s medical professionals are authorized to perform
            additional treatments if necessary during the course of ongoing
            treatment. In the event of a medical emergency, Apollo HomeCare is
            authorized to seek additional medical intervention.
          </p>
        </section>

        {/* More Sections */}
        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Virtual Consultation / Telehealth Services
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            <li>
              The Client acknowledges that technical difficulties may affect
              telehealth sessions.
            </li>
            <li>Telehealth consultations may be conducted via video calls.</li>
            <li>The Client consents to the storage of medical records.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Payment Terms
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            <li>
              All services require advance payments as per the selected package.
            </li>
            <li>
              Emergency deposits may be collected for incidental expenses.
            </li>
            <li>
              The Client is responsible for additional costs such as consumables
              and transportation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#000] font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px]">
            Cancellation and Refunds
          </h2>
          <p className="text-[#000]  text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
            Services may be canceled or terminated by either party with a
            minimum notice period. Refunds will be processed within 7-10
            business days subject to submission of required documents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
