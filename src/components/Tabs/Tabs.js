"use client";
import { useEffect, useState } from "react";
import { Tab, TabList } from "@headlessui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Tabs = ({ tabsData }) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  const handleTabClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`md:bg-[#003638] ${isOpen ? "bg-[#333]" : ""}`}>
      {window.innerWidth > 770 ? (
        <TabList className="md:flex gap-24 max-w-[1512px] mx-auto">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              onClick={handleTabClick}
              className={({ selected }) =>
                `flex items-center text-center mx-auto justify-center flex-col py-5 gap-2 ${
                  selected ? "text-orange-500" : "text-white"
                } `
              }
            >
              {({ selected }) => (
                <>
                  <Image
                    src={tab.image}
                    alt={tab.name}
                    width={60}
                    height={60}
                    className={`${selected ? "filter-orange" : "filter-white"}`}
                  />
                  {tab.name}
                </>
              )}
            </Tab>
          ))}
        </TabList>
      ) : (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#003638] text-white py-2 px-4 rounded-[20px] mb-4 mx-auto block"
          >
            {isOpen ? "Close" : "Open"} Category
          </button>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isOpen ? "auto" : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <TabList className="flex flex-wrap md:hidden gap-4 px-4 py-6">
              {tabsData.map((tab, index) => (
                <Tab
                  key={index}
                  onClick={handleTabClick}
                  className={({ selected }) =>
                    `w-[calc(50%-0.5rem)] p-4 bg-[#E0F7FA] rounded-[10px] flex flex-col items-center gap-2 shadow ${
                      selected ? "ring ring-orange-500" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <Image
                        src={tab.image}
                        alt={tab.name}
                        width={40}
                        height={40}
                        className={`filter ${
                          selected ? "filter-orange" : "brightness-0"
                        }`}
                      />
                      <span className="text-center text-[9.8px] font-bold leading-[13.3px] text-[#003638] font-poppins">
                        {tab.name}
                      </span>
                    </>
                  )}
                </Tab>
              ))}
            </TabList>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Tabs;
