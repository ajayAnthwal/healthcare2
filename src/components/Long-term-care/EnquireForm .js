import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import doctor from "@/assets/images/longterm/picture.png";

const EnquireForm = () => {
  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "tel", placeholder: "Phone" },
    {
      type: "select",
      placeholder: "Select City",
      options: ["City 1", "City 2", "City 3"],
    },
    {
      type: "select",
      placeholder: "Choose a Service",
      options: ["Service 1", "Service 2", "Service 3"],
    },
  ];

  return (
    <ServiceInquiryForm
      imageSrc={doctor}
      formTitle="Enquire Now"
      fields={formFields}
    />
  );
};

export default EnquireForm;
