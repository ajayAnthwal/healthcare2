import React from "react";
import ServiceInquiryForm from "../ServiceInquiryForm";
import nurseAtHome from "@/assets/images/longterm/nurse-at-home.png";
import ServiceCards from "./ServiceCards ";
const NurseAtHome = () => {
  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "tel", placeholder: "Phone" },
    {
      type: "select",
      placeholder: "Select City",
      options: ["Select City", "City 1", "City 2", "City 3"],
    },
    {
      type: "select",
      placeholder: "Choose a Service",
      options: ["Choose a Service", "Service 1", "Service 2", "Service 3"],
    },
  ];

  return (
    <>
      <ServiceInquiryForm
        imageSrc={nurseAtHome}
        formTitle="Enquire Now"
        fields={formFields}
      />
      <ServiceCards />
    </>
  );
};

export default NurseAtHome;
