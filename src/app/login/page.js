"use client";
import React from "react";
import Image from "next/image";
import loginBanner from "@/assets/images/login/loginBanner.png";
import bgImage from "@/assets/images/login/background.png";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center py-24 px-4 sm:px-6 md:px-8 mt-[115px]">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="-z-10"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 p-4 relative z-10">
        <div className=" flex justify-center">
          <Image
            src={loginBanner}
            alt="Doctors Illustration"
            priority
            width={702}
            height={410}
            className="max-w-full h-auto"
          />
        </div>

        <div
          className="w-full sm:w-[90%] md:w-[479px] p-8 text-white bg-gradient-to-r from-[#1AE2E9] to-[#03676A] 
      rounded-[27px] border border-solid border-white/[0.8] backdrop-blur-[28px] lg:ml-6 
      -mt-[67px] lg:mt-0"
          style={{
            background:
              "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
          }}
        >
          <h1
            className="text-[40px] font-normal leading-[48.76px] mb-4 text-left text-white"
            style={{ fontFamily: '"Montserrat Subrayada", sans-serif' }}
          >
            LOGIN
          </h1>

          <div className="w-[110px] h-[1px] bg-white -mt-5"></div>
          <p className="text-[20px] font-light mb-6 text-left text-white mt-2">
            Welcome to Apollo Healthcare
          </p>

          <form>
            <div className="my-7">
              <label
                htmlFor="mobile"
                className="text-[15px] font-normal mb-2 text-left text-white"
              >
                Mobile Number
              </label>

              <input
                id="mobile"
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-full sm:w-[419px] h-[47px] p-[12px_10px] bg-transparent border-[#FFFFFFCC] rounded-[10px] text-white opacity-60 placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px] backdrop-blur-[30px] border-[1px] border-solid"
                style={{
                  background:
                    "linear-gradient(109deg, rgba(201, 201, 201, 0.80) 1.57%, rgba(196, 196, 196, 0.10) 100%)",
                }}
              />
            </div>

            <div className="my-7">
              <label
                htmlFor="otp"
                className="text-[15px] font-normal mb-2 text-left text-white"
              >
                OTP
              </label>

              <input
                id="otp"
                type="text"
                placeholder="123456"
                className="w-full sm:w-[419px] h-[47px] p-[12px_10px] bg-transparent border-[#FFFFFFCC] rounded-[10px] text-white opacity-60 placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px] backdrop-blur-[30px] border-[1px] border-solid"
                style={{
                  background:
                    "linear-gradient(109deg, rgba(201, 201, 201, 0.80) 1.57%, rgba(196, 196, 196, 0.10) 100%)",
                }}
              />
            </div>

            <button
              type="submit"
              className="mt-14 flex justify-center items-center w-full sm:w-[419px] h-[50px] px-6 py-2 bg-[#B0E0E1] hover:bg-[#96C8C9] text-black text-lg font-semibold rounded-[10px] gap-[10px] transition-all duration-300 ease-in-out flex-shrink-0 mb-4"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
