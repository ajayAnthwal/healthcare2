"use client";
import whyChooseUs1 from "@/assets/images/homepage/whyChooseUs1.png";

import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center md:text-4xl">
          Why Choose Us?
        </h1>
        <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-center text-[#6C87AE]">
          Choosing Apollo Homecare means choosing a healthcare provider that
          prioritizes your comfort, convenience, and well-being. Discover why
          countless families trust us to deliver exceptional care right at home.
        </p>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-center container mx-auto px-4">
        <Image
          className="w-full sm:w-auto sm:mr-20"
          src={whyChooseUs1}
          alt="Why Choose Us 1"
        />
        <div className="mt-4 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Experienced Professionals
          </h1>
          <p className="w-full sm:w-3/4 mt-4 text-[#6C87AE]">
            Our team includes highly skilled doctors, nurses, and caregivers
            with extensive experience in home-based healthcare.
          </p>
          <h1 className="text-2xl sm:text-3xl mt-4 font-bold">
            Personalized Care Plans
          </h1>
          <p className="w-full sm:w-3/4 mt-4 text-[#6C87AE]">
            We customize each care plan to fit individual health needs and
            lifestyles, ensuring the best possible outcomes.
          </p>
          <h1 className="text-2xl sm:text-3xl mt-4 font-bold">24/7 Support</h1>
          <p className="w-full sm:w-3/4 mt-4 text-[#6C87AE]">
            Receive round-the-clock assistance and support, so help is always
            just a call away.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row justify-center container mx-auto px-4">
        <div className="mt-4 w-full sm:w-[90rem] sm:mr-20 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Advanced Technology
          </h1>
          <p className="mt-4 text-[#6C87AE]">
            From remote health monitoring to on-demand consultations, we use the
            latest technology to provide efficient and reliable care.
          </p>
          <h1 className="text-2xl sm:text-3xl mt-4 font-bold">Trusted Brand</h1>
          <p className="mt-4 text-[#6C87AE]">
            As part of the Apollo family, we bring a legacy of healthcare
            excellence and trust that our patients rely on.
          </p>
          <h1 className="text-2xl sm:text-3xl mt-4 font-bold">
            Affordable Care Options
          </h1>
          <p className="mt-4 text-[#6C87AE]">
            We offer cost-effective care solutions that provide value without
            compromising quality.
          </p>
        </div>
        <Image
          src={whyChooseUs1}
          className="w-full sm:w-[40%] mt-4 sm:mt-0"
          alt="Why Choose Us 1"
        />
      </div>
    </div>
  );
};
export default WhyChooseUs;
