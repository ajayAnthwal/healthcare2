"use client";
import React from "react";
import Filters from "./Filters";
import Services from "../Book/Services";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <div className="w-full md:max-w-xs">
        <Filters />
      </div>
      <div className="flex-1">
        <Services />
      </div>
    </div>
  );
};

export default ProductPage;
