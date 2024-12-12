const FooterCTA = () => {
  return (
    <div
      className="bg-teal-600 text-white flex justify-between items-center px-6 py-4 container mx-auto rounded-[15px]"
      style={{
        background:
          "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
      }}
    >
      <p className="text-[24px] font-semibold leading-[36px] text-left">
        Let our Expertise help you!
      </p>

      <div className="flex gap-[10px]">
        <button className="bg-white text-teal-600 px-[28px] py-[10px] rounded-[100px] text-[18px]">
          Talk to a Specialist
        </button>
        <button className="bg-white text-teal-600 px-[28px] py-[10px] rounded-[100px]  text-[18px] ">
          Categories
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
