"use client";
import React, { useState } from "react";
import Image from "next/image";
import Book_banner from "@/assets/images/book/book-banner.png";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-600 mb-6">
        <span>Home</span> &gt; <span>Buy/Rent Equipment</span> &gt;{" "}
        <span>Wheel Chairs</span> &gt;{" "}
        <span className="text-gray-800 font-semibold">Product Detail</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Detail</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={Book_banner} 
            alt="Brand C Wheelchair"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Brand C WheelChair
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-sm text-gray-600">(12,432 reviews)</span>
          </div>
          <div className="text-3xl font-bold text-teal-600">₹20,000</div>

          <div className="flex items-center space-x-4">
            <button
              onClick={decreaseQuantity}
              className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 border-t pt-6">
        <div className="flex gap-6 border-b pb-3 text-gray-600 text-sm">
          <button className="font-semibold text-teal-600 border-b-2 border-teal-600">
            Description
          </button>
          <button className="hover:text-gray-900">Vendor's Info</button>
          <button className="hover:text-gray-900">More Offers</button>
          <button className="hover:text-gray-900">Store Policies</button>
          <button className="hover:text-gray-900">Inquiries</button>
        </div>

        <div className="mt-6 text-sm text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="mt-2">
            <a href="#" className="text-teal-600 font-semibold">
              LEARN MORE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
