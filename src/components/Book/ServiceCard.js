import React from "react";
import Image from "next/image";

const Book_Service = ({ title, imageSrc, description }) => {
  return (
    <div className="border-r border-black pr-4 flex flex-col items-center text-center gap-4">
      <h3 className="text-[20px] font-semibold leading-[24px]">{title}</h3>
      <div className="rounded-[20px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={286}
          height={194}
          className="rounded-[20px]"
        />
      </div>
      <p className="text-[18px] font-normal leading-[21.6px]">{description}</p>
    </div>
  );
};

export default Book_Service;
