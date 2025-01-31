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

const Ecommerce = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
          <Image
            src={Book_banner}
            alt="Book Banner"
            width={1192}
            height={344}
            priority
            className="mx-auto container mt-10"
          />

          <div className="flex gap-4 p-3 justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-4 w-80 relative"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={328}
                  height={244}
                  className="rounded-lg"
                />
                <h2 className="text-[20px] font-medium mt-2 flex justify-between items-center text-[#484848] font-[Poppins] leading-normal py-2">
                  {product.name}
                  <div className="flex">
                    {Array(product.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-black text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                </h2>
                <p className="text-[#8A8A8A] text-[12px] font-medium leading-[12px]">
                  {product.description}
                </p>

                <p className="text-[#8A8A8A] text-[12px] font-medium leading-[12px] py-5">
                  {product.reviews}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#484848] text-[24px] font-medium leading-[20px] tracking-[-0.24px] font-[Poppins]">
                    {product.price}
                  </p>

                  <p className="text-[#FF4646] text-[12px] font-normal leading-[20px] tracking-[-0.12px] font-[Poppins] text-right">
                    {product.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Ecommerce;
