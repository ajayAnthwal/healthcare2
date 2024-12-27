import { useState } from "react";
import Image from "next/image";
import Avatar from "@/assets/images/profile/Avatar.png";
import product from "@/assets/images/profile/Avatar-2.png";

const MyPurchases = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const purchases = [
    {
      id: 1,
      name: "Brand C WheelChair",
      orderDate: "10th Dec, 2024",
      status: "Ongoing",
      price: "₹20,000",
      image: Avatar,
    },
    {
      id: 2,
      name: "Brand A WheelChair",
      orderDate: "10th Dec, 2024",
      status: "Refunded",
      price: "₹10,000",
      image: product,
    },
    {
      id: 3,
      name: "Brand A WheelChair",
      orderDate: "10th Dec, 2024",
      status: "Refunded",
      price: "₹10,000",
      image: product,
    },
    {
      id: 4,
      name: "Brand C WheelChair",
      orderDate: "10th Dec, 2024",
      status: "Ongoing",
      price: "₹20,000",
      image: Avatar,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center border-b pb-4 gap-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
          <div className="text-lg font-semibold">
            Total Order Placed: {purchases.length}
          </div>
          <select className="p-2 rounded-md border border-gray-300 text-sm">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 rounded-[10px] w-full lg:w-[400px]">
          <div className="pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
            </svg>
          </div>

          <input
            type="text"
            placeholder='Trying searching “my last 10 orders”"'
            className="flex-grow pl-2 py-2 text-sm text-[#777] border-none focus:outline-none"
          />

          <button className="px-3 py-2 text-sm font-medium text-[#009A9F] border-l border-[#1AE2E9] rounded-[10px]">
            Search
          </button>
        </div>
      </div>

      <div className="mt-4">
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="p-4 border-b flex flex-col sm:flex-row sm:justify-between gap-4"
          >
            <div className="flex gap-4 items-start">
              <Image
                src={purchase.image}
                alt={purchase.name}
                width={64}
                height={64}
                className="object-cover rounded-md"
              />
              <div>
                <div className="font-semibold text-base">{purchase.name}</div>
                <div className="text-sm text-gray-500">
                  Order Date: {purchase.orderDate}
                </div>
                <div className="text-sm text-gray-500 mb-1">
                  Status: {purchase.status}
                </div>
                <div className="font-bold text-black text-sm">
                  {purchase.price}
                </div>
              </div>
            </div>

       
            <div
              className="
              flex flex-row sm:flex-col 
              items-center sm:items-end gap-2 
              sm:justify-end 
            "
            >
              <button className="px-[20px] py-[9px] rounded-[50px] bg-[#009A9F] text-white text-[11px] font-bold uppercase tracking-[0.08px] leading-none h-[35px] w-[83px]">
                RE-BUY
              </button>

              <button className="px-5 py-2 border border-[#009A9F] text-[#009A9F] rounded-full font-poppins text-[11px] font-normal uppercase tracking-wide bg-white w-auto sm:w-full">
                DOWNLOAD INVOICE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPurchases;
