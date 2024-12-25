import Image from "next/image";
import pic from "@/assets/images/profile/pic.png";
export default function EditProfile() {
  return (
    <div>
      <div className="bg-white p-6   w-full relative bottom-4">
        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="flex items-start gap-2 px-7 py-2.5 rounded-full border text-green-500 font-poppins text-[14px] font-semibold leading-[16.8px] shadow-md border-green-500 hover:shadow-lg">
            Cancel
          </button>

          <button className="flex items-start gap-2 px-7 py-2.5 rounded-full bg-teal-500 text-white font-poppins text-[18px] font-semibold leading-[21.6px] shadow-md hover:bg-teal-600">
            Save
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="relative w-20 h-20">
            <Image
              src={pic}
              alt="Profile Photo"
              layout="fill"
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-teal-500 p-1 rounded-full">
              <div className="flex items-center justify-center w-[30px] h-[30px] p-[6.25px_8px_6.75px_8px] rounded-full border-0 bg-[#009A9F] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10),0px_10px_15px_0px_rgba(0,0,0,0.10)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1691_1697)">
                    <path
                      d="M4.07695 1.77188L3.79258 2.625H1.75C0.784766 2.625 0 3.40977 0 4.375V11.375C0 12.3402 0.784766 13.125 1.75 13.125H12.25C13.2152 13.125 14 12.3402 14 11.375V4.375C14 3.40977 13.2152 2.625 12.25 2.625H10.2074L9.92305 1.77188C9.74531 1.23594 9.24492 0.875 8.67891 0.875H5.32109C4.75508 0.875 4.25469 1.23594 4.07695 1.77188ZM7 5.25C7.69619 5.25 8.36387 5.52656 8.85616 6.01884C9.34844 6.51113 9.625 7.17881 9.625 7.875C9.625 8.57119 9.34844 9.23887 8.85616 9.73116C8.36387 10.2234 7.69619 10.5 7 10.5C6.30381 10.5 5.63613 10.2234 5.14384 9.73116C4.65156 9.23887 4.375 8.57119 4.375 7.875C4.375 7.17881 4.65156 6.51113 5.14384 6.01884C5.63613 5.52656 6.30381 5.25 7 5.25Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1691_1697">
                      <path d="M0 0H14V14H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-black font-poppins text-[14px] font-bold leading-[18px] ml-4">
              Profile Photo
            </h2>

            <span className="ml-4 text-gray-600">
              Upload a new photo or remove the current one
            </span>
          </div>
        </div>

        <section>
          <h2 className="text-base font-medium text-black font-[Poppins] leading-normal mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black font-[Poppins] text-sm font-normal leading-normal mb-1">
                Name
              </label>
              <input
                type="text"
                defaultValue="Joe Biden"
                className="w-full px-3 py-3 rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] text-black font-[Poppins] text-sm font-light leading-normal focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-black font-[Poppins] text-sm font-normal leading-normal mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                defaultValue="1234567890"
                className="w-full px-3 py-3 rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] text-black font-[Poppins] text-sm font-light leading-normal focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-black font-[Poppins] text-sm font-normal leading-normal mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="JoeBiden@gmail.com"
                className="w-full px-3 py-3 rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] text-black font-[Poppins] text-sm font-light leading-normal focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-black font-[Poppins] text-sm font-normal leading-normal mb-1">
                Date of Birth
              </label>
              <input
                type="text"
                placeholder="DD-MM-YYYY"
                className="w-full px-3 py-3 rounded-[10px] border border-[#757575] opacity-50 backdrop-blur-[30px] text-black font-[Poppins] text-sm font-light leading-normal focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 py-6 px-6 rounded-[8px] border border-[#E5E7EB] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <h2 className="text-[18px]  font-medium text-black font-[Poppins] leading-normal mb-5">
            Account Security
          </h2>

          <div className="flex justify-between items-center mb-5">
            <div>
              <span className="text-black font-[Poppins] text-base font-medium leading-[20px] block">
                Password
              </span>
              <p className="text-[#6B7280] text-sm font-normal leading-[20px]">
                Last changed 3 months ago
              </p>
            </div>
            <button className="text-[#009A9F] text-sm font-[Poppins] font-medium leading-[20px] hover:underline">
              Change Password
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className="text-black font-[Poppins] text-base font-medium leading-[20px] block">
                Two-Factor Authentication
              </span>
              <p className="text-[#6B7280] text-sm font-normal leading-[20px]">
                Add an extra layer of security
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer peer-checked:bg-[#009A9F] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </section>

        <section className="mt-6 py-6 px-6 rounded-[8px] border border-[#E5E7EB] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <h2 className="text-[18px] font-medium text-black font-[Poppins] leading-normal mb-5">
            Notification Preferences
          </h2>

          {[
            {
              label: "Email Notifications",
              description: "Receive updates via email",
              checked: true,
            },
            {
              label: "SMS Notifications",
              description: "Receive updates via text message",
              checked: false,
            },
            {
              label: "App Notifications",
              description: "Receive in-app notifications",
              checked: true,
            },
          ].map(({ label, description, checked }, idx) => (
            <div className="flex justify-between items-center mb-5" key={idx}>
              <div>
                <span className="text-black font-[Poppins] text-base font-medium leading-[20px] block">
                  {label}
                </span>
                <p className="text-[#6B7280] text-sm font-normal leading-[20px]">
                  {description}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={checked}
                />
                <div
                  className={`w-11 h-6 ${
                    checked ? "bg-[#009A9F]" : "bg-[#E5E7EB]"
                  } peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500 rounded-full peer after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    checked
                      ? "peer-checked:after:translate-x-full peer-checked:after:border-white"
                      : ""
                  }`}
                ></div>
              </label>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
