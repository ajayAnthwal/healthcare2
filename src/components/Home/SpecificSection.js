import Link from "next/link";

export default function SpecificSection() {
  const items = [
    { name: "Extended care services", href: "/long-term-care" },
    { name: "Medical coverage plans", href: "/long-term-care" },
    { name: "Planning for retirement funds", href: "/long-term-care" },
    { name: "Planning for your estate", href: "/long-term-care" },
    { name: "Managing your investments", href: "/long-term-care" },
    { name: "Protecting your wealth", href: "/long-term-care" },
    { name: "Strategies for tax efficiency", href: "/long-term-care" },
    { name: "Retirement income products", href: "/long-term-care" },
    { name: "Income protection insurance", href: "/long-term-care" },
    { name: "In-home health services", href: "/long-term-care" },
    { name: "Care in nursing facilities", href: "/long-term-care" },
    { name: "End-of-life care services", href: "/long-term-care" },
    { name: "Supportive living arrangements", href: "/long-term-care" },
    { name: "Specialized memory care", href: "/long-term-care" },
    { name: "Comfort-focused care", href: "/long-term-care" },
    { name: "Coverage under Medicare", href: "/long-term-care" },
    { name: "Insurance for longevity", href: "/long-term-care" },
  ];

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
        {items.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <span className="cursor-pointer flex px-[10px] py-[10px] justify-center items-center gap-[10px] border border-[#696969] rounded-[20px] text-[#696969] text-[12px] font-normal leading-[16px] tracking-[0.36px] overflow-hidden text-ellipsis hover:bg-[#009A9F] hover:text-white transition duration-200">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
