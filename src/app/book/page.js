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
import Services from "@/components/Book/Services";
import Vaccines from "@/components/Book/Vaccines";
import ProductDetailVaccines from "@/components/Book/ProductDetailVaccines";
import Home_Visit from "@/components/Book/Home_Visit";

const Book = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [
    { name: "Doctor at Home", image: Nurse },
    { name: "ECG at Home", image: Vector },
    { name: "Physiotherapy at Home", image: subscriptions },
    { name: "Speech Therapist at Home", image: Vector_second },
    { name: "Nurse Procedures", image: self_improvement },
    { name: "Medical Procedures", image: add_home },
    { name: "Respiratory Therapist", image: add_home },
    { name: "Dietitian", image: add_home },
  ];

  return (
    <>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <Services />}</TabPanel>
            <TabPanel>
              {selectedIndex === 1 && (
                <div>
                  <Vaccines />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 2 && (
                <div>
                  {" "}
                  <ProductDetailVaccines />
                </div>
              )}
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
          <Home_Visit />
        </div>
      )}
    </>
  );
};

export default Book;
