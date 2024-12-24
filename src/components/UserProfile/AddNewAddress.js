"use client";
import { useState } from "react";

export default function AddNewAddress() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Elon Musk",
      address:
        "123, main city, State, Country or state pin code Note: Address can get too long so manage that and add some tooltip above that.",
    },
    {
      id: 2,
      name: "Elon Musk",
      address:
        "123, main city, State, Country or state pin code Note: Address can get too long so manage that and add some tooltip above that.",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    name: "",
    mobileNumber: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  return (
    <div>
      <h2 className="text-black font-poppins text-[16px] font-medium leading-normal mb-4">
        Saved Addresses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border border-gray-300 rounded-[20px] bg-white shadow-sm p-[26px] px-[26px] relative h-[120px]"
          >
            <h3 className="text-black font-poppins text-sm font-semibold leading-none">
              {address.name}
            </h3>
            <p className="text-black text-sm font-light leading-none mt-2">
              {address.address}
            </p>

            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => console.log("Edit clicked")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1677_1772"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1677_1772)">
                    <path
                      d="M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8507 2.70833 14.0521 2.625C14.2535 2.54167 14.4653 2.5 14.6875 2.5C14.9097 2.5 15.125 2.54167 15.3333 2.625C15.5417 2.70833 15.7222 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.309 4.5 17.3854 4.70833C17.4618 4.91667 17.5 5.125 17.5 5.33333C17.5 5.55556 17.4618 5.76736 17.3854 5.96875C17.309 6.17014 17.1875 6.35417 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z"
                      fill="#757575"
                    />
                  </g>
                </svg>
              </button>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => handleDelete(address.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1677_1775"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1677_1775)">
                    <path
                      d="M5.83203 17.5C5.3737 17.5 4.98134 17.3368 4.65495 17.0104C4.32856 16.684 4.16536 16.2917 4.16536 15.8333V5H3.33203V3.33333H7.4987V2.5H12.4987V3.33333H16.6654V5H15.832V15.8333C15.832 16.2917 15.6688 16.684 15.3424 17.0104C15.0161 17.3368 14.6237 17.5 14.1654 17.5H5.83203ZM7.4987 14.1667H9.16536V6.66667H7.4987V14.1667ZM10.832 14.1667H12.4987V6.66667H10.832V14.1667Z"
                      fill="#757575"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-black font-poppins text-[16px] font-medium leading-normal mb-4">
        Add New Address
      </h2>
      <div className="flex flex-col items-start gap-5 p-[10px] px-[20px] rounded-[20px] border border-[#C0C0C0] bg-white shadow-sm">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <label className="text-black font-poppins text-[15px] font-normal leading-normal">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={newAddress.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              className=" w-full flex p-[12px] px-[10px] flex-col items-start self-stretch rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] placeholder:text-black placeholder: placeholder:text-[15px] placeholder:font-light placeholder:leading-normal"
            />
          </div>
          <div>
            <label className="text-black font-poppins text-[15px] font-normal leading-normal">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={newAddress.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter mobile number"
              className=" w-full flex p-[12px] px-[10px] flex-col items-start self-stretch rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] placeholder:text-black placeholder:placeholder:text-[15px] placeholder:font-light placeholder:leading-normal"
            />
          </div>
          <div>
            <label className="text-black font-poppins text-[15px] font-normal leading-normal">
              City
            </label>
            <input
              type="text"
              name="city"
              value={newAddress.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className=" w-full flex p-[12px] px-[10px] flex-col items-start self-stretch rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] placeholder:text-black placeholder: placeholder:text-[15px] placeholder:font-light placeholder:leading-normal"
            />
          </div>
          <div>
            <label className="text-black font-poppins text-[15px] font-normal leading-normal">
              Pin Code
            </label>
            <input
              type="text"
              name="pinCode"
              value={newAddress.pinCode}
              onChange={handleInputChange}
              placeholder="Enter pin code"
              className=" w-full flex p-[12px] px-[10px] flex-col items-start self-stretch rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] placeholder:text-black placeholder: placeholder:text-[15px] placeholder:font-light placeholder:leading-normal"
            />
          </div>
          <div>
            <label className="text-black font-poppins text-[15px] font-normal leading-normal">
              State
            </label>
            <input
              type="text"
              name="state"
              value={newAddress.state}
              onChange={handleInputChange}
              placeholder="Enter state"
              className=" w-full flex p-[12px] px-[10px] flex-col items-start self-stretch rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] placeholder:text-black placeholder: placeholder:text-[15px] placeholder:font-light placeholder:leading-normal"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
