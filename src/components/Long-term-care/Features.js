import Image from "next/image";
import Doctor from "@/assets/images/longterm/Group.png";

const Features = () => {
  return (
    <div className="container mx-auto mt-24 my-20">
      <h1 className="text-center text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
        What is Long Term Care &amp; Why It&#39;s Required?
      </h1>

      <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-center text-[#6C87AE] text-[16px] font-normal mx-auto leading-[24px]">
        Long-term care is designed to support individuals who require assistance
        with daily activities and medical needs over an extended period. It
        ensures comfort, safety, and well-being while enabling independence
        within the home environment.
      </p>

      <div className="flex gap-11 items-center justify-center mt-20">
        <div className="w-6/12">
          <Image
            src={Doctor}
            alt="Illustration of long-term care"
            width={660}
            height={418}
            className="w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
            Personalized Care
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#6C87AE] text-justify mb-4">
            Tailored to individual health conditions and preferences.
          </p>

          <h2 className="text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
            Emotional Support
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#6C87AE] text-justify mb-4">
            Promotes mental and emotional well-being through companionship.
          </p>

          <h2 className="text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
            Convenience at Home
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#6C87AE] text-justify mb-4">
            No need for hospital stays; professional care comes to you.
          </p>

          <h2 className="text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
            Improved Quality of Life
          </h2>
          <p className="text-[16px] font-normal leading-[24px] text-[#6C87AE] text-justify mb-4">
            Encourages a healthier and more fulfilling lifestyle for patients
            and families.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
