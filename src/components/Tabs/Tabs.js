import React from "react";
import { Tab, TabList } from "@headlessui/react";
import Image from "next/image";

const Tabs = ({ tabsData }) => {
  return (
    <div className="bg-[#003638]">
      <TabList className="flex gap-24 max-w-[1512px]  mx-auto">
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
                  className={`fill-current ${
                    selected ? "fill-orange-500" : "fill-white"
                  }`}
                />
                {tab.name}
              </>
            )}
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export default Tabs;
