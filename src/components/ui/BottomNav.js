import Image from "next/image";
import React from "react";
import home from "../../assets/images/footer/home.svg";
import self_imp from "../../assets/images/footer/self_improvement.svg";
import call from "../../assets/images/footer/call.svg";
import bookmark_add from "../../assets/images/footer/bookmark_add.svg";
import local_mall from "../../assets/images/footer/local_mall.svg";

const BottomNav = () => {
  return (
    <div className="md:hidden block bg-[#003638] px-2 sticky bottom-0 left-0 w-full py-1">
      <div className="flex justify-between">
        <div className="bg-white rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
          <div>
            <Image src={home} width={15} height={15} alt="home" />
          </div>
          <div>
            <p className="text-[10px] text-[#003638]">Home</p>
          </div>
        </div>
        <div className=" rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
          <div>
            <Image src={self_imp} width={15} height={15} alt="home" />
          </div>
          <div>
            <p className="text-[10px] text-[#fff]">Long Term Care</p>
          </div>
        </div>
        <div className=" rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
          <div>
            <Image src={bookmark_add} width={15} height={15} alt="home" />
          </div>
          <div>
            <p className="text-[10px] text-[#fff]">Book</p>
          </div>
        </div>
        <div className=" rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
          <div>
            <Image src={local_mall} width={15} height={15} alt="home" />
          </div>
          <div>
            <p className="text-[10px] text-[#fff]">Buy/Rent</p>
          </div>
        </div>
        <div className=" rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
          <div>
            <Image src={call} width={15} height={15} alt="home" />
          </div>
          <div>
            <p className="text-[10px] text-[#FF784B]">Call Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
