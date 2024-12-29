"use client";
import React from "react";

const Filters = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-[250px]">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox text-teal-600" />
          <span>As per my preferences</span>
        </label>
      </div>
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-2">Categories</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>Wheelchair</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>Cardiac Monitor</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>Ventilator</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>Oxygen Cylinder</span>
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Price</h4>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>INR 10K–15K</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>INR 15K–20K</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-teal-600" />
            <span>INR 20K+</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
