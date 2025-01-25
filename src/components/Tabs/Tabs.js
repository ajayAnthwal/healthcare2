import React from "react";
import { Tab, TabList } from "@headlessui/react";
import Image from "next/image";

const Tabs = ({ tabsData }) => {
  return (
    <div className="bg-[#003638]">
      <TabList className="hidden md:flex gap-24 max-w-[1512px] mx-auto">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `flex items-center text-center mx-auto justify-center flex-col py-5 gap-2 ${
                selected ? "text-orange-500" : "text-white"
              } hover:underline`
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

      {/* Mobile Layout */}
      <TabList className="flex flex-wrap md:hidden gap-4 px-4 py-6">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            className={({ selected }) =>
              `w-[calc(50%-0.5rem)] p-4 bg-[#E8F8F5] rounded-lg flex flex-col items-center gap-2 shadow ${
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
                <span className="text-center text-sm font-medium text-[#003638]">
                  {tab.name}
                </span>
              </>
            )}
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export default Tabs;
