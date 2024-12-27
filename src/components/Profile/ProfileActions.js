import React from "react";
import Purchases from "@/assets/images/profile/avatar.svg";
import Subscription from "@/assets/images/profile/avatar-1.svg";
import Health from "@/assets/images/profile/avatar-2.svg";
import Payment from "@/assets/images/profile/avatar-3.svg";
import Addresses from "@/assets/images/profile/avatar-4.svg";
import Profile from "@/assets/images/profile/avatar-5.svg";
import Image from "next/image";
import Link from "next/link";
const actions = [
  {
    title: "My Purchases",
    description: "Track, return or re-buy items",
    icon: Purchases,
  },
  {
    title: "My Subscriptions",
    description: "Track and manage short term & long term services",
    icon: Subscription,
  },
  {
    title: "My Health Files",
    description: "Upload and manage your reports/prescriptions",
    icon: Health,
  },
  {
    title: "Payment options",
    description: "Edit or add payment options",
    icon: Payment,
  },
  {
    title: "Addresses",
    description: "Track and manage address",
    icon: Addresses,
  },
  {
    title: "Edit Profile",
    description: "Manage Login, Name and Mobile Number",
    icon: Profile,
  },
];

const ProfileActions = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-[18px] px-[10px] border-b border-gray-200  cursor-pointer"
          >
            <div className="text-2xl">
              {" "}
              <Image src={action.icon} alt="icon" width={60} height={60} />
            </div>
            <div>
              <Link href="/userprofile">
                <h3 className="text-black text-[20px] font-medium leading-normal font-roboto">
                  {action.title}
                </h3>
              </Link>
              <p className="text-[#78858F] text-[14px] font-normal leading-[25.5px] tracking-[0.5px] font-roboto">
                {action.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileActions;
