"use client";
import React, { useState } from "react";
import Tabs from "@/components/Tabs/Tabs";
import add_home from "@/assets/images/longterm/add_home.svg";
import Nurse from "@/assets/images/longterm/Nurse.svg";
import self_improvement from "@/assets/images/longterm/self_improvement.svg";
import subscriptions from "@/assets/images/longterm/subscriptions.svg";
import Vector from "@/assets/images/longterm/Vector.svg";
import Vector_second from "@/assets/images/longterm/Vector_second.svg";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Image from "next/image";
import Book_banner from "@/assets/images/book/book-banner.png";
import ProductPage from "@/components/Ecommerce/ProductPage";
import ProductDetail from "@/components/Ecommerce/ProductDetail";
import product2 from "@/assets/images/book/product2.png";
import banerproduct from "@/assets/images/book/baner-product.png";
import deal from "@/assets/images/book/deal.png";
import Link from "next/link";

const Ecommerce = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState("Respiratory");
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(true);

  const categories = [
    "All",
    "Respiratory",
    "Cats & mattress",
    "DVT pump",
    "Suction",
    "Monitoring",
    "Wheel Chair",
  ];

  const tabsData = [
    { name: "Oxygen Cylinder", image: Nurse },
    { name: "Oxygen Concentrator", image: Vector },
    { name: "Bi-PAP/CPAP", image: subscriptions },
    { name: "Wheel Chairs", image: Vector_second },
    { name: "Cardiac Monitors", image: self_improvement },
    { name: "Manual/Motorized Bed", image: add_home },
  ];

  const products = [
    {
      id: 1,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },
    {
      id: 2,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },
    {
      id: 3,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },

    {
      id: 4,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },

    {
      id: 5,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },

    {
      id: 6,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },

    {
      id: 7,
      name: "Oxygen Cylinder",
      description: "Descriptions 1 day delivery",
      price: "$95.50",
      reviews: "(4.1k) Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
      imageUrl: product2,
    },
  ];

  return (
    <>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <ProductPage />}</TabPanel>
            <TabPanel>
              {selectedIndex === 1 && (
                <div>
                  <ProductDetail />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 2 && <div>Content for Tab 2</div>}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 3 && <div>Content for Tab 3</div>}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 4 && <div>Content for Tab 4</div>}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 5 && <div>Content for Tab 5</div>}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      {selectedIndex === -1 && (
        <div>
          <div className="flex w-full flex-wrap flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 bg-[#E6F5F5] flex items-center justify-center">
              <Image
                src={banerproduct}
                alt="Ventilator"
                className="w-3/4 object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#B0E0E1] p-6 md:p-10 flex flex-col justify-center">
              <p className="text-[#767676] text-base font-normal">
                Respiratory
              </p>
              <h1 className="text-[#484848] text-3xl md:text-[46px] font-semibold font-[Poppins]">
                Ventilator
              </h1>
              <p className="text-black text-base font-normal underline mt-2">
                DESCRIPTION
              </p>
              <p className="text-[#767676] text-sm md:text-base mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-black text-xl md:text-[28px] font-medium mt-4">
                $100.00
              </p>
              <button className="mt-4 w-full md:w-[207px] h-[50px] md:h-[56px] bg-[#009A9F] text-white text-base font-normal font-[Poppins] rounded-[10px] shadow-lg hover:bg-[#007D82]">
                Buy Now
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-8 gap-5 w-full max-w-[1512px] mx-auto mb-3 px-4 md:px-0">
            <div className="bg-[#E6F5F5] p-4 shadow-md mt-[28px] rounded-lg w-full md:w-[269px] sticky top-[7rem] left-0 h-max">
              <h3 className="text-black font-poppins text-[20px] font-semibold">
                Filters
              </h3>
              <div className="mb-6 mt-3">
                <h4 className="text-[#000] font-poppins text-[18px] font-medium mb-2 py-2">
                  Prices
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    "$0-$50",
                    "$50-$100",
                    "$100-$150",
                    "$150-$200",
                    "$300-$400",
                  ].map((price) => (
                    <label key={price} className="text-[#8A8A8A] text-[16px]">
                      {price}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <main className="flex-1 p-4 md:p-5">
              <div className="flex gap-2 md:gap-3 mb-5 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 md:px-10 md:py-5 rounded-[10px] text-[14px] md:text-[16px] ${
                      selectedCategory === category
                        ? "bg-[#009A9F] text-white shadow-lg"
                        : "bg-[#FAFAFA] text-[#8A8A8A]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Responsive grid for cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[20px]">
                {products.map((product) => (
                  <Link href="/book" key={product.id}>
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={328}
                        height={244}
                        className="rounded-lg w-full"
                      />
                      <h2 className="text-[18px] md:text-[20px] font-medium mt-2 text-[#484848] py-2">
                        {product.name}
                      </h2>
                      <p className="text-[#8A8A8A] text-[12px]">
                        {product.description}
                      </p>
                      <p className="text-[#8A8A8A] text-[12px] py-3">
                        {product.reviews}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-[#484848] text-lg md:text-[24px] font-medium">
                          {product.price}
                        </p>
                        <p className="text-[#FF4646] text-[12px]">
                          {product.status}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Ecommerce;
