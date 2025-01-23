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
import SpecializedNurseAtHome from "@/components/Long-term-care/SpecializedNurseAtHome";
import NursAtHomeProduct from "@/components/Long-term-care/Nurse_At_Home/NursAtHomeProduct";
import Applo_Nurse_At_home from "@/components/Long-term-care/Applo_Nurse_At_home";
import Trained_Attendant_at_Home from "@/components/Long-term-care/Trained_Attendant_at_Home";
import Mother_Baby_Care from "@/components/Long-term-care/Mother_Baby_Care";
import Senior_Care_Subscription from "@/components/Long-term-care/Senior_Care_Subscription";
import TravelNurses from "@/components/Long-term-care/TravelNurses";
import Specially_Rehab_Packages from "@/components/Long-term-care/Specially_Rehab_Packages";
const LongTermCare = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [
    { name: "ICU at Home", image: Nurse },
    { name: "Specialized Nurse at Home", image: Vector },
    { name: "Trained Attendant at Home", image: subscriptions },
    { name: "Mother & Baby Care", image: Vector_second },
    { name: "Senior Care Subscription", image: self_improvement },
    { name: "Travel Nurses", image: Vector_second },
    { name: "Specialty Rehab Packages", image: Vector_second },
    { name: "Specialty Travel Nurses", image: Vector_second },
    { name: "Specialty Travel Nurses", image: Vector_second },
  ];

  return (
    <>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <NurseAtHome />}</TabPanel>
            <TabPanel>
              {selectedIndex === 1 && (
                <div>
                  <SpecializedNurseAtHome />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 2 && (
                <div>
                  <NursAtHomeProduct />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 3 && (
                <div>
                  <Applo_Nurse_At_home />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 4 && (
                <div>
                  <Trained_Attendant_at_Home />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 5 && (
                <div>
                  <Mother_Baby_Care />
                </div>
              )}
            </TabPanel>

            <TabPanel>
              {selectedIndex === 6 && (
                <div>
                  <Senior_Care_Subscription />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 7 && (
                <div>
                  <TravelNurses />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 8 && (
                <div>
                  <Specially_Rehab_Packages />
                </div>
              )}
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
