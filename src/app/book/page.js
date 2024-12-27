"use client";
import React, { useState } from "react";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Image from "next/image";
import Book_banner from "@/assets/images/book/book-banner.png";
import Tabs from "@/components/Tabs/Tabs";
import add_home from "@/assets/images/longterm/add_home.svg";
import Nurse from "@/assets/images/longterm/Nurse.svg";
import self_improvement from "@/assets/images/longterm/self_improvement.svg";
import subscriptions from "@/assets/images/longterm/subscriptions.svg";
import Vector from "@/assets/images/longterm/Vector.svg";
import Vector_second from "@/assets/images/longterm/Vector_second.svg";
import Services from "@/components/Book/Services";
import NurseAtHome from "@/components/Long-term-care/Nurse_At_Home/NurseAtHome";

const Book = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [
    { name: "Vaccination", image: Nurse },
    { name: "Visits", image: Vector },
    { name: "medical Procedures", image: subscriptions },
    { name: "Diagnostic Services", image: Vector_second },
    { name: "Investigations", image: self_improvement },
    { name: "Sleep Study", image: add_home },
  ];

  return (
    <div>
      <div className="bg-[#003638] w-full md:mt-[140px]">
        <div className="container mx-auto">
          <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tabs tabsData={tabsData} />
            <TabPanels>
              <TabPanel>{selectedIndex === 0 && <NurseAtHome />}</TabPanel>
              <TabPanel>
                {selectedIndex === 1 && <div>Content for Tab 1</div>}
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
      </div>

      <Image
        src={Book_banner}
        alt="Book Banner"
        width={1192}
        height={344}
        priority
        className="mx-auto container mt-10"
      />

      <div>
        <Services />
      </div>
    </div>
  );
};

export default Book;
