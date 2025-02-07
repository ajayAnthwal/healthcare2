import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-[#000] text-center font-poppins text-[40px] sm:text-[50px] md:text-[60px] font-semibold leading-[1.2] tracking-[-1.2px]">
  Oops! Page Not Found
</h1>


      <p className="text-[#000] text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
        Looks like you&#39;ve taken a wrong turn. But don’t worry, we’re here to
        help!
      </p>

      {/* Navigation Links Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-6 text-lg text-gray-700">
        <p className="text-[#000] text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
          Go back to the{" "}
          <Link href="/">
            <span className="text-[#009A9F] opacity-70 font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px] cursor-pointer hover:underline">
              Home Page
            </span>
          </Link>
        </p>

        <p className="text-[#000] text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
          Explore our{" "}
          <Link href="/services">
            <span className="text-[#009A9F] opacity-70 font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px] cursor-pointer hover:underline">
              Services
            </span>
          </Link>
        </p>
        <p className="text-[#000] text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
          Need assistance?{" "}
          <Link href="/contact">
            <span className="text-[#009A9F] opacity-70 font-poppins text-[20px] font-semibold leading-[39.06px] tracking-[-0.002px] cursor-pointer hover:underline">
              Contact Us
            </span>
          </Link>
        </p>
      </div>

      <p className="text-[#000] text-[20px] font-normal leading-[39.06px] tracking-[-0.002px]">
        Still can&#39;t find what you&#39;re looking for? Reach out to our
        support team, and we&#39;ll guide you in the right direction!
      </p>
    </div>
  );
};

export default ErrorPage;
