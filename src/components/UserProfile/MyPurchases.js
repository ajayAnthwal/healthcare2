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
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold mb-2">
            Total Order Placed: {purchases.length}
          </div>
          <select className="p-2 rounded-md border border-gray-300">
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-md w-fit">
          {/* Search Icon Input */}
          <div className="flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder='Trying searching "my last 10 orders"'
            className="
      w-[400px]
      pl-[10px]
      py-2
      text-[#777]
      border-none
      font-poppins text-[14px] font-normal 
      focus:outline-none
    "
          />

          <button
            className="
      flex items-center gap-[4px] 
      px-[14px] py-[6px] 
      rounded-[8px] 
      border border-[#1AE2E9] 
      text-[#009A9F] 
      font-poppins text-[14px] font-medium
      leading-normal
      focus:outline-none
    "
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-4">
        {purchases
          .filter((purchase) =>
            purchase.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((purchase) => (
            <div
              key={purchase.id}
              className="p-4 border-b flex justify-between items-center"
            >
              {/* Left Section */}
              <div className="flex gap-4 items-start">
                <Image
                  src={purchase.image} // Use dynamic image here
                  alt={purchase.name}
                  width={80}
                  height={80}
                  className="object-cover rounded-md"
                />
                <div>
                  <div className="font-semibold text-lg">{purchase.name}</div>
                  <div className="text-sm text-gray-500">
                    Order Date: {purchase.orderDate}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    Status: {purchase.status}
                  </div>
                  <div className="font-bold text-black">{purchase.price}</div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col gap-2 items-end">
                <button className="flex justify-right items-center px-[20px] py-[9px] rounded-[50px] bg-[#009A9F] text-white text-[11px] font-bold uppercase tracking-[0.08px] leading-none h-[35px] w-[83px]">
                  RE-BUY
                </button>

                <button
                  className="
    flex items-center justify-center 
    px-5 py-2 
    border border-[#009A9F] 
    text-[#009A9F] 
    rounded-full
    font-poppins text-[11px] font-normal
    uppercase
    tracking-wide
    bg-white
    w-full
  "
                >
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
