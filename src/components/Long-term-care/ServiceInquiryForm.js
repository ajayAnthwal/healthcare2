import React from "react";
import Image from "next/image";

const ServiceInquiryForm = ({ imageSrc, formTitle, fields }) => {
  return (
    <div className="container mx-auto mt-10 flex flex-col md:flex-row bg-[#E6F5F5] space-y-6 md:space-y-0 md:space-x-6 rounded-[15px_0_0_0] p-4 md:p-0">
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt="Enquire Form Image"
          className="rounded-lg w-full"
          width={652}
          height={576}
          priority
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#E6F5F5] p-6 md:p-[50px_70px] gap-6 md:gap-[50px] rounded-lg">
        <h2 className="text-center mb-4 text-[24px] md:text-[28px] font-semibold leading-[31.2px]">
          {formTitle || "Enquire Now"}
        </h2>
        <form className="space-y-4 md:space-y-6">
          {fields.map((field, index) => {
            if (field.type === "select") {
              return (
                <select
                  key={index}
                  className="block mx-auto bg-white border border-[#003638] rounded-[10px] w-full md:w-[400px] h-[50px] md:h-[60px] p-3 text-[#B5B5B5] text-[16px] font-normal leading-[24px]"
                >
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              );
            }

            return (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                className="block mx-auto bg-white  border-[#003638] rounded-[10px] w-full md:w-[400px] h-[50px] md:h-[60px] p-3 border-[0.5px]"
              />
            );
          })}
          <button
            type="submit"
            className="block mx-auto mt-6 md:mt-11 text-[#007477] border border-[#007477] bg-transparent py-3 px-4 rounded-[8px] shadow-[0px_2px_7px_0px_#00000040] w-full md:w-[400px] h-[50px]"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceInquiryForm;
