import React from "react";
import Image from "next/image";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";
import OrderSummary from "@/components/Checkout/OrderSummary";
import Checkout from "@/components/Cart/Checkout";
import Link from "next/link";

const Cart = () => {
  const users = [
    { name: "Rahul (self)", image: Snehal },
    { name: "Neha", image: neha },
    { name: "Swastik", image: rahul },
    { name: "Sneha", image: Swastik },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between container mx-auto my-10">
        <div className="flex flex-col space-y-6 w-[988px]">
          <div className="bg-white p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">
                User Information
              </h2>
              <button className="text-teal-600 text-sm">Add Profile</button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Select to whom you want to send your order or to whom you are
              buying subscriptions.
            </p>
            <div className="flex items-center space-x-6 mt-6">
              {users.map((user, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-700 mt-2">
                    {user.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="990"
            height="2"
            viewBox="0 0 990 2"
            fill="none"
          >
            <path
              d="M1 1L989 0.999914"
              stroke="#C0C0C0"
              strokeLinecap="round"
            />
          </svg>

          <div className="bg-white p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Address</h2>
              <button className="text-teal-600 text-sm mt-6">
                Add Address
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Select where you want to send your purchased item. Note:
              exceptions can be there.
            </p>
            <div className="space-y-4 mt-6">
              {["Elon Musk", "Elon Musk"].map((address, index) => (
                <div
                  key={index}
                  className="border border-gray-300 p-4 rounded-lg flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">
                      {address}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      123, main city, State, Country or state pin code. Note:
                      Address can get too long, so manage that and add some
                      tooltip above that.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8507 2.70833 14.0521 2.625C14.2535 2.54167 14.4653 2.5 14.6875 2.5C14.9097 2.5 15.125 2.54167 15.3333 2.625C15.5417 2.70833 15.7222 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.309 4.5 17.3854 4.70833C17.4618 4.91667 17.5 5.125 17.5 5.33333C17.5 5.55556 17.4618 5.76736 17.3854 5.96875C17.309 6.17014 17.1875 6.35417 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z"
                        fill="#757575"
                      />
                    </svg>
                    {/* Delete Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5.83203 17.5C5.3737 17.5 4.98134 17.3368 4.65495 17.0104C4.32856 16.684 4.16536 16.2917 4.16536 15.8333V5H3.33203V3.33333H7.4987V2.5H12.4987V3.33333H16.6654V5H15.832V15.8333C15.832 16.2917 15.6688 16.684 15.3424 17.0104C15.0161 17.3368 14.6237 17.5 14.1654 17.5H5.83203ZM7.4987 14.1667H9.16536V6.66667H7.4987V14.1667ZM10.832 14.1667H12.4987V6.66667H10.832V14.1667Z"
                        fill="#757575"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container mx-auto ">
            <OrderSummary />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="fixed top-[14rem] right-10 bg-[#003638] p-[40px] px-[20px] shadow-md rounded-tl-[20px] rounded-bl-[20px] w-[280px] flex flex-col items-start">
            <div className="flex flex-col justify-between items-center gap-[26px]">
              <h2 className="text-white font-light text-[18px] leading-[21.6px]">
                Subtotal (99 items)
              </h2>

              <span className="text-white font-semibold text-[18px] leading-[21.6px] font-poppins">
                ₹12,34,56,789
              </span>
            </div>
            <Link href="/payment">
              <button className="w-full bg-[#009A9F] text-white py-[10px] px-[28px] mt-4 rounded-full shadow-[0px_8px_23px_0px_rgba(65,_132,_247,_0.24)] flex justify-center items-center gap-[10px] text-[18px] font-semibold">
                Pay Now
              </button>
            </Link>

            <button className="w-full mt-5 text-white py-[10px] px-[28px] rounded-full border border-white shadow-[0px_8px_23px_0px_rgba(65,_132,_247,_0.24)] flex justify-center items-center gap-[10px] text-[18px] font-semibold">
              EMI Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
