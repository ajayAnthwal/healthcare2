import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full flex flex-col md:flex-row items-center overflow-hidden bg-[#B0E0E1]">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-[#B0E0E1] rotate-6 rounded-lg "></div>
          <Image
            src="/contact.png"
            width={831}
            height={570}
            alt="Delhi Banner"
            className="relative rounded-lg"
          />
        </div>
        <div className="md:w-1/2 z-10 px-[10px]">
          <h2 className="text-lg text-[#767676] font-[Poppins] font-normal">
            Location
          </h2>

          <h1 className="text-5xl font-semibold text-[#484848] font-[Poppins]">
            Delhi
          </h1>

          <h3 className="text-lg font-bold mt-4 text-black underline decoration-solid decoration-black">
            DESCRIPTION
          </h3>

          <p className="mt-2 text-[#767676]  text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem...
          </p>
        </div>
      </div>

      <div>
        <nav className="flex flex-col items-center gap-5 py-4 ">
          <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins">
            Contact us
          </h1>
          <ul className="flex justify-center space-x-4 px-3 flex-wrap gap-4">
            {[
              "HYDERABAD",
              "KOLKATA",
              "DELHI NCR",
              "CHENNAI",
              "BANGALORE",
              "PUNE",
              "MADURAI",
              "INDORE",
              "MUMBAI",
              "GUWAHATI",
            ].map((city, index) => (
              <Link key={index} href="#">
                <li
                  className={`flex items-center justify-center gap-2 p-[10px_20px] rounded-[10px] text-[16px] font-semibold leading-normal cursor-pointer hover:underline ${
                    city === "HYDERABAD"
                      ? "bg-[#009A9F] text-white"
                      : "text-[#009A9F] font-normal"
                  }`}
                >
                  {city}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Section */}
      <div className="mt-16 container mx-auto">
        <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins  ">
          Delhi
        </h1>
        <p className="text-[#3A3A3A] text-center  text-base font-normal leading-6">
          Apollo Home Health Care Services in Delhi offers comprehensive home
          care services, including physiotherapist visits, home doctor visits,
          nurse care at home, rehabilitation programs, elderly care, medical
          equipment for rent or sale, and home vaccinations.
        </p>

        <p className="text-[#3A3A3A] text-center  text-base font-normal leading-6 mt-4">
          Our Apollo&apos;s compassionate professionals are here to assist you
          or a loved one with regular responsibilities, personal care, or home
          safety. To ensure a safer and more comfortable life at home, we offer
          personalized, professional home care services that serve to improve
          comfort, independence, and overall health.
        </p>

        <p className="text-[#3A3A3A] text-center  text-base font-normal leading-6 mt-4">
          Apollo Personal Care Services for approved individuals, our Apollo
          team provides in-home personal care services and assistance, with a
          focus on personal care, home safety, and support with everyday life
          activities.
        </p>

        <p className="text-[#3A3A3A] text-center  text-base font-normal leading-6 mt-4">
          Are you searching for an alternative to a care home or senior care?
          Contact us to find out more about Apollo home care for you or a loved
          one.
        </p>

        <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-10 mt-10">
          <div className="md:w-1/2 text-center">
            <p className="text-[#3A3A3A] text-center  text-[16px] font-normal leading-6">
              A-45, 3rd Floor,
              <br />
              Mohan Industrial Estate, Mathura Road,
              <br />
              <span className="opacity-80 text-[#3A3A3A] underline">
                New Delhi-110044
              </span>
            </p>
            <p className="text-[#3A3A3A] text-center  text-[16px] font-normal leading-6 mt-4">
              Toll-Free No:{" "}
              <span className="text-[#009A9F] font-[Poppins]">
                1800 108 8586
              </span>
            </p>
            <p className="text-[#3A3A3A] text-center  text-[16px] font-normal leading-6">
              Contact No:{" "}
              <span className="text-[#009A9F] font-[Poppins]">
                040 23608006
              </span>
            </p>
            <p className="text-[#3A3A3A] text-center  text-[16px] font-normal leading-6">
              For International Calls:{" "}
              <span className="text-[#009A9F] font-[Poppins]">
                +91 8125008585
              </span>
            </p>
          </div>
          <div className="md:w-1/2">
            <iframe
              className="w-full h-64 rounded-lg border-4 border-[#189AB4] shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937406464!2d77.06889993146937!3d28.52758200414989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9b1b0e61c3%3A0x7c3f4d499b8ad78!2sDelhi!5e0!3m2!1sen!2sin!4v1649073789143!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
