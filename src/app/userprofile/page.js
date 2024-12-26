"use client";
import { useState } from "react";
import Sidebar from "@/components/UserProfile/Sidebar";
import MyPurchases from "@/components/UserProfile/MyPurchases";
import MySubscription from "@/components/UserProfile/MySubscription";
import MyHealthFiles from "@/components/UserProfile/MyHealthFiles";
import ManagePaymentOptions from "@/components/UserProfile/ManagePaymentOptions";
import AddNewAddress from "@/components/UserProfile/AddNewAddress";
import EditProfile from "@/components/UserProfile/EditProfile";

const SECTIONS = {
  "My Purchases": MyPurchases,
  "My Subscription": MySubscription,
  "My Health Files": MyHealthFiles,
  "Payment Options": ManagePaymentOptions,
  Addresses: AddNewAddress,
  "Edit Profile": EditProfile,
};

const UserProfile = () => {
  const [activeLink, setActiveLink] = useState("My Purchases");
  const ActiveComponent = SECTIONS[activeLink] || MyPurchases;

  return (
    <div className="flex w-full lg:w-[1512px] mx-auto">
      <Sidebar setActiveLink={setActiveLink} activeLink={activeLink} />
      <div className="w-full min-h-screen bg-white pt-0 pl-0 lg:pt-[173px] lg:pl-12">
        <h1 className="text-[20px] font-semibold mb-4 pl-6 text-black font-poppins leading-normal">
          {activeLink}
        </h1>
        <div className=" rounded-lg">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
