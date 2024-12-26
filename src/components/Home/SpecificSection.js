export default function SpecificSection() {
  return (
    <div className="flex flex-col items-center py-14 container mx-auto">
      <div className="flex items-center space-x-4">
        <div className="w-[280px] h-[1px] bg-[#009A9F]"></div>

        <h2 className="text-[20px] font-semibold text-[#031432] text-center leading-normal font-poppins">
          Looking for something specific
        </h2>

        <div className="w-[280px] h-[1px] bg-[#009A9F]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-9">
        {[
          "Extended care services",
          "Medical coverage plans",
          "Planning for retirement funds",
          "Planning for your estate",
          "Managing your investments",
          "Protecting your wealth",
          "Strategies for tax efficiency",
          "Retirement income products",
          "Income protection insurance",
          "In-home health services",
          "Care in nursing facilities",
          "End-of-life care services",
          "Supportive living arrangements",
          "Specialized memory care",
          "Comfort-focused care",
          "Coverage under Medicare",
          "Insurance for longevity",
        ].map((item, index) => (
            <span
            key={index}
            className="flex px-[10px] py-[10px] justify-center items-center gap-[10px] border border-[#696969] rounded-[20px] text-[#696969] text-[12px] font-normal leading-[16px] tracking-[0.36px]  overflow-hidden text-ellipsis hover:bg-teal-100 transition duration-200"
          >
            {item}
          </span>
          
        ))}
      </div>
    </div>
  );
}
