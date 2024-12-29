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

  return (
    <>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <ProductPage />}</TabPanel>
            <TabPanel>
              {selectedIndex === 1 && <div><ProductDetail /></div>}
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
        </div>
      )}
    </>
  );
};

export default Ecommerce;
