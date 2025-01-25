const FooterCTA = () => {
  return (
    <div
      className="bg-teal-600 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-6 container mx-auto rounded-[15px] text-center md:text-left"
      style={{
        background:
          "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
      }}
    >
      <p className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[36px]">
        Let our Expertise help you!
      </p>

      <div className="flex flex-col md:flex-row gap-[10px] mt-4 md:mt-0">
        <button className="bg-white text-teal-600 px-[24px] py-[8px] rounded-[100px] text-[16px] md:text-[18px] w-full md:w-auto">
          Talk to a Specialist
        </button>
        <button className="bg-white text-teal-600 px-[24px] py-[8px] rounded-[100px] text-[16px] md:text-[18px] w-full md:w-auto">
          Categories
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
