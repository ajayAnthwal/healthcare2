"use client";
import React from "react";
import Book_Service from "./ServiceCard";
import customer from "@/assets/images/book/customer.png";
import medicine from "@/assets/images/book/medicine.png";

const Services = () => {
  const cardsData = [
    {
      title: "Hot Offers",
      imageSrc: customer,
      description: "Physiotherapy services 40% off",
    },
    {
      title: "Deal of the week",
      imageSrc: medicine,
      description: "Vaccinations 45% off",
    }
  ];

  return (
    <div className="container mx-auto py-8 mt-12 mb-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Book_Service
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
