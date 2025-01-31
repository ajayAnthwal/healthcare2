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
    "Masks",
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
          <div className="flex w-full flex-wrap">
            <div className="relative w-1/2 bg-[#E6F5F5] flex items-center justify-center">
              <Image
                src={banerproduct}
                alt="Ventilator"
                className="w-3/4 object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="w-1/2 bg-[#B0E0E1] p-10 relative flex flex-col justify-center">
              {/* <div className="absolute top-0 left-0 h-full w-[2px] bg-black rotate-[15deg] origin-top-left"></div> */}
              <p className="text-[#767676]  text-base font-normal leading-normal">
                Respiratory
              </p>

              <h1 className="text-[#484848] text-[46px] font-semibold font-[Poppins]">
                Ventilator
              </h1>

              <p className="text-black text-base font-normal underline  mt-2">
                DESCRIPTION
              </p>

              <p className="text-[#767676] text-base font-normal leading-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Scelerisque duis.
              </p>
              <div className="flex items-center text-[#777] text-sm font-medium leading-[23.4px] mt-4">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="mr-2"
                  >
                    <mask
                      id="mask0_2397_409"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="18"
                      height="18"
                    >
                      <rect width="18" height="18" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2397_409)">
                      <path
                        d="M5.25 15C4.625 15 4.09375 14.7812 3.65625 14.3438C3.21875 13.9062 3 13.375 3 12.75H1.125L1.4625 11.25H3.58125C3.79375 11.0125 4.04375 10.8281 4.33125 10.6969C4.61875 10.5656 4.925 10.5 5.25 10.5C5.575 10.5 5.88125 10.5656 6.16875 10.6969C6.45625 10.8281 6.70625 11.0125 6.91875 11.25H10.05L11.625 4.5H3.4125L3.4875 4.18125C3.5625 3.83125 3.73438 3.54688 4.00313 3.32812C4.27188 3.10937 4.5875 3 4.95 3H13.5L12.8063 6H15L17.25 9L16.5 12.75H15C15 13.375 14.7812 13.9062 14.3438 14.3438C13.9062 14.7812 13.375 15 12.75 15C12.125 15 11.5938 14.7812 11.1562 14.3438C10.7188 13.9062 10.5 13.375 10.5 12.75H7.5C7.5 13.375 7.28125 13.9062 6.84375 14.3438C6.40625 14.7812 5.875 15 5.25 15ZM11.9438 9.75H15.5625L15.6375 9.35625L14.25 7.5H12.4688L11.9438 9.75ZM11.5875 4.63125L11.625 4.5L10.05 11.25L10.0875 11.1187L10.725 8.38125L11.5875 4.63125ZM0.375 9.99375L0.75 8.49375H4.875L4.5 9.99375H0.375ZM1.875 7.25625L2.25 5.75625H7.125L6.75 7.25625H1.875ZM5.25 13.5C5.4625 13.5 5.64062 13.4281 5.78438 13.2844C5.92812 13.1406 6 12.9625 6 12.75C6 12.5375 5.92812 12.3594 5.78438 12.2156C5.64062 12.0719 5.4625 12 5.25 12C5.0375 12 4.85938 12.0719 4.71562 12.2156C4.57188 12.3594 4.5 12.5375 4.5 12.75C4.5 12.9625 4.57188 13.1406 4.71562 13.2844C4.85938 13.4281 5.0375 13.5 5.25 13.5ZM12.75 13.5C12.9625 13.5 13.1406 13.4281 13.2844 13.2844C13.4281 13.1406 13.5 12.9625 13.5 12.75C13.5 12.5375 13.4281 12.3594 13.2844 12.2156C13.1406 12.0719 12.9625 12 12.75 12C12.5375 12 12.3594 12.0719 12.2156 12.2156C12.0719 12.3594 12 12.5375 12 12.75C12 12.9625 12.0719 13.1406 12.2156 13.2844C12.3594 13.4281 12.5375 13.5 12.75 13.5Z"
                        fill="#777777"
                      />
                    </g>
                  </svg>
                  Delivered in 1-2 days
                </span>
                <button className="text-[#009A9F] underline hover:underline-offset-4 ml-3">
                  Check Pincode
                </button>
              </div>

              <p className="text-black text-[28px] font-medium  leading-normal mt-4">
                $100.00
              </p>
              <button className="mt-4 w-[207px] h-[56px] bg-[#009A9F] text-white text-base font-normal font-[Poppins] rounded-[10px] shadow-lg shadow-[#009A9F]/30 hover:bg-[#007D82]">
                Buy Now
              </button>
            </div>
          </div>

          <div className="flex  mt-6 gap-[20px] w-[1512px] mx-auto">
            <div className="bg-[#E6F5F5] p-4 shadow-md rounded-lg w-full md:w-[269px] mt-[20px]">
              <h3 className="text-black font-poppins text-[20px] font-semibold leading-[120%]">
                Filters
              </h3>

              <div className="mb-6 mt-3">
                <h4 className="text-[#000] font-poppins text-[18px] font-medium leading-[120%] mb-2 py-2">
                  Prices
                </h4>
                <div className="flex flex-col gap-5">
                  {[
                    "$0-$50",
                    "$50-$100",
                    "$100-$150",
                    "$150-$200",
                    "$300-$400",
                  ].map((price) => (
                    <label
                      key={price}
                      className="text-[#8A8A8A] text-[16px] font-[400] leading-[120%] cursor-pointer"
                    >
                      {price}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4
                  className="text-[#000] font-poppins text-[18px] font-medium leading-[120%] mb-2 cursor-pointer flex justify-between"
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                >
                  Brands <span>{isBrandsOpen ? "▲" : "▼"}</span>
                </h4>
                {isBrandsOpen && (
                  <div className="flex flex-wrap gap-2 text-[#8A8A8A] text-[16px]">
                    {[
                      "Apollo",
                      "Artemis",
                      "Athena",
                      "Hermes",
                      "Zeus",
                      "Hera",
                    ].map((brand) => (
                      <span
                        key={brand}
                        className="text-[#8A8A8A] text-[16px] font-[400] "
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <h4
                  className="text-[#000] font-poppins text-[18px] font-medium leading-[120%] mb-2 cursor-pointer flex justify-between"
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                >
                  Collections <span>{isCollectionsOpen ? "▲" : "▼"}</span>
                </h4>
                {isCollectionsOpen && (
                  <div className="flex flex-col gap-2 text-[#8A8A8A] text-[16px] font-[400] ">
                    {[
                      "All products",
                      "Best sellers",
                      "Deal of the Day",
                      "Other",
                    ].map((collection) => (
                      <span key={collection}>{collection}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <main className="flex-1 p-5">
              <div className="flex gap-3 mb-5">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`flex h-14 px-10 py-5 justify-center items-center gap-2 rounded-[10px] text-center  text-[16px] font-normal leading-[100%] ${
                      selectedCategory === category
                        ? "bg-[#009A9F] text-white shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)]"
                        : "bg-[#FAFAFA] text-[#8A8A8A]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-[20px]">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg p-4 relative"
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={328}
                      height={244}
                      className="rounded-lg"
                    />
                    <h2 className="text-[20px] font-medium mt-2 flex justify-between items-center text-[#484848] leading-normal py-2">
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
                      <p className="text-[#484848] text-[24px] font-medium">
                        {product.price}
                      </p>
                      <p className="text-[#FF4646] text-[12px] font-normal text-right">
                        {product.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>

          <div className="w-full bg-[#003638] py-10">
            <div className="w-[1512px] mx-auto px-4">
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                  <h1 className="text-[#fff] text-[46px] font-semibold font-[Poppins]">
                    Deals Of The Month
                  </h1>

                  <p className="text-[#C1C1C1] text-base font-normal leading-normal mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />{" "}
                    elit. Scelerisque duis ultrices sollicitudin aliquam sem.{" "}
                    <br />
                    Scelerisque duis ultrices sollicitudin
                  </p>

                  <button className="mt-4 w-[207px] h-[56px] bg-[#009A9F] text-white text-base font-normal font-[Poppins] rounded-[10px] shadow-lg shadow-[#009A9F]/30 hover:bg-[#007D82]">
                    Buy Now
                  </button>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center bg-[#003638]">
                  <Image
                    src={deal}
                    alt="Ventilator"
                    className="w-3/4 object-cover"
                    width={669}
                    height={458}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ecommerce;
