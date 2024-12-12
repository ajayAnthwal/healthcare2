import Image from "next/image";
import React from "react";
import home from "../../assets/images/footer/home.svg";
import self_imp from "../../assets/images/footer/self_improvement.svg";
import call from "../../assets/images/footer/call.svg";
import bookmark_add from "../../assets/images/footer/bookmark_add.svg";
import local_mall from "../../assets/images/footer/local_mall.svg";
import callosity from "@/assets/images/header/callwhite.png";
import menu from "@/assets/images/header/menu.png";

const BottomNav = () => {
  return (
    <div className="md:hidden block bg-[#003638] px-2 sticky bottom-0 left-0 w-full py-2">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4">
          {/* Consultation Button */}
          <button className="flex items-center rounded-[40.608px] border-[0.406px] border-[#FF784B] box-shadow-[0px_3.249px_9.34px_0px_rgba(65,_132,_247,_0.24)] px-[15px] py-[6.497px] text-[10.182px] font-semibold leading-[120%] bg-gradient-to-r from-[#FFD439] via-[#FF7A00] to-[#E95709] bg-clip-text text-transparent">
            I need consultation
          </button>

          {/* Call Now Button */}
          <button className="flex items-center rounded-[40.608px] bg-[#FF784B] box-shadow-[0px_3.249px_9.34px_0px_rgba(247,_165,_65,_0.24)] px-[15px] py-[6.497px] text-white font-[Poppins] text-[10.182px] font-semibold leading-[120%]">
            <Image
              src={callosity}
              width={15}
              height={15}
              alt="Call Icon"
              className="mr-1"
            />
            Call Now
          </button>
        </div>

        <div className="flex justify-between w-full mt-3">
          <div className="bg-white rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image src={home} width={15} height={15} alt="home" />
            </div>
            <div>
              <p className="text-[10px] text-[#003638]">Home</p>
            </div>
          </div>
          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image
                src={self_imp}
                width={15}
                height={15}
                alt="Long Term Care"
              />
            </div>
            <div>
              <p className="text-[10px] text-[#fff]">Long Term Care</p>
            </div>
          </div>
          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image src={bookmark_add} width={15} height={15} alt="Book" />
            </div>
            <div>
              <p className="text-[10px] text-[#fff]">Home Visit</p>
            </div>
          </div>
          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image src={local_mall} width={15} height={15} alt="Buy/Rent" />
            </div>
            <div>
              <p className="text-[10px] text-[#fff]">Buy/Rent</p>
            </div>
          </div>
          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image src={menu} width={15} height={15} alt="Call Now" />
            </div>
            <div>
              <p className="text-[10px] text-[#FF784B]">Menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
