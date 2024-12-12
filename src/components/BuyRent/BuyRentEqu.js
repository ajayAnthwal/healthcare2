import React from 'react';
import nurseAtHome from "@/assets/images/homepage/whyChooseUs1.png";
import Image from "next/image";

const BuyRentEqu = () => {
    const longTerm = [
        {
            image: nurseAtHome,
            title: "Wheelchairs",
            detail: "High-quality wheelchairs available for purchase or rent.",
        },
        {
            image: nurseAtHome,
            title: "Oxygen Concentrators",
            detail: "Reliable oxygen concentrators delivered to your door.",
        },
        {
            image: nurseAtHome,
            title: "Hospital Beds",
            detail: "Adjustable beds for home care environments.",
        },
    ];

    return (
        <div className="px-4 py-2">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Buy/Rent Equipment</h1>
                <button className="text-[#009A9F] py-2 px-6 font-semibold rounded-lg ">
                More
                </button>
            </div>
            <p className="text-gray-600 mb-4 text-base">
            High-quality medical equipment for purchase or rental.
            </p>
            <div className="overflow-x-auto flex gap-6 pb-4">
                {longTerm.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex flex-col w-[200px] overflow-hidden"
                    >
                        <div className="relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[180px]"
                            />
                            <button className="absolute bottom-[-1px] right-2 text-[#009A9F] bg-white py-2 px-4 text-sm rounded-xl border-[1px] border-[#009A9F]">
                                Enquire Now
                            </button>
                        </div>
                        <div className="p-4">
                            <h2 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h2>
                            <p className="text-gray-600 text-sm">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuyRentEqu;
