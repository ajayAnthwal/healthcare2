import React from "react";
import { Tab, TabList } from "@headlessui/react";
import Image from "next/image";

const Tabs = ({ tabsData }) => {
  return (
    <div className="bg-[#003638]">
    <TabList className="flex gap-24 container w-full mx-auto">
      {tabsData.map((tab, index) => (
        <Tab
          key={index}
          className="flex items-center text-center mx-auto justify-center flex-col py-5 gap-2 data-[selected]:text-white data-[hover]:underline text-white"
        >
          <Image
            src={tab.image}
            alt={tab.name}
            width={60}
            height={60}
            className="fill-current data-[selected]:fill-orange-800"
          />
          {tab.name}
        </Tab>
      ))}
    </TabList>
    </div>
  );
};

export default Tabs;
