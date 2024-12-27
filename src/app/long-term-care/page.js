"use client";
import React, { useState } from "react";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Tabs from "@/components/Tabs/Tabs";
import add_home from "@/assets/images/longterm/add_home.svg";
import Nurse from "@/assets/images/longterm/Nurse.svg";
import self_improvement from "@/assets/images/longterm/self_improvement.svg";
import subscriptions from "@/assets/images/longterm/subscriptions.svg";
import Vector from "@/assets/images/longterm/Vector.svg";
import Vector_second from "@/assets/images/longterm/Vector_second.svg";
import EnquireForm from "@/components/Long-term-care/EnquireForm ";
import Features from "@/components/Long-term-care/Features";
import FooterCTA from "@/components/Long-term-care/FooterCTA";
import NurseAtHome from "@/components/Long-term-care/Nurse_At_Home/NurseAtHome";

const LongTermCare = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1); // No tab is selected initially

  const tabsData = [
    { name: "Nurse at Home", image: Nurse },
    { name: "Long Term Assistant Care", image: Vector },
    { name: "Subscription", image: subscriptions },
    { name: "Mother & Baby Care", image: Vector_second },
    { name: "Elder Care", image: self_improvement },
    { name: "ICU Setup at Home", image: add_home },
  ];

  return (
    <>
      <div className="md:mt-[140px]">
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
      {selectedIndex === -1 && (
        <>
          <EnquireForm />
          <Features />
          <FooterCTA />
        </>
      )}
    </>
  );
};

export default LongTermCare;
