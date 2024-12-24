import { useState } from "react";

export default function MyHealthFiles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-start gap-2 p-5 rounded-xl flex-1 shadow-md bg-teal-50">
          <h2 className="text-black font-semibold text-[14px] leading-normal font-poppins">
            Doctor Notes
          </h2>
          <p className="text-black font-normal text-[14px] leading-normal">
            Summarize as consultation and diagnostic.
          </p>
          <button className="flex items-center justify-center gap-2 px-7 py-2 rounded-full border border-[#009A9F] shadow-md font-medium text-sm text-[#009A9F] bg-white hover:shadow-lg">
            Upload
          </button>
        </div>

        <div className="flex flex-col items-start gap-2 p-5 rounded-xl flex-1 shadow-md bg-teal-50">
          <h2 className="text-black font-semibold text-[14px] leading-normal font-poppins">
            Medical Reports
          </h2>
          <p className="text-black font-normal text-[14px] leading-normal">
            Store lab reports and diagnostic by yourself.
          </p>
          <button className="flex items-center justify-center gap-2 px-7 py-2 rounded-full border border-[#009A9F] shadow-md font-medium text-sm text-[#009A9F] bg-white hover:shadow-lg">
            Upload
          </button>
        </div>

        <div className="flex flex-col items-start gap-2 p-5 rounded-xl flex-1 shadow-md bg-teal-50">
          <h2 className="text-black font-semibold text-[14px] leading-normal font-poppins">
            File Sharing
          </h2>
          <p className="text-black font-normal text-[14px] leading-normal">
            Share files, reports, etc to family or doctors safely and securely.
          </p>
          <button className="flex items-center justify-center gap-2 px-7 py-2 rounded-full border border-[#009A9F] shadow-md font-medium text-sm text-[#009A9F] bg-white hover:shadow-lg">
            Share Access
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-4">
          <span className="text-black font-medium text-[16px] font-poppins leading-normal">
            Total Files: <strong>4</strong>
          </span>
          <div className="flex items-start gap-1 border border-[#777] rounded-[10px] bg-white p-[6px_10px] text-[#777] text-sm font-normal font-poppins">
            <select
              className="bg-white border-none text-sm text-[#777] focus:outline-none"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center gap-1 border border-[#000] rounded-[10px] px-[10px] py-2 text-[#000] text-sm font-poppins font-normal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <mask
                id="mask0_1504_2352"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="21"
              >
                <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1504_2352)">
                <path
                  d="M8.33333 15.5V13.8333H11.6667V15.5H8.33333ZM5 11.3333V9.66667H15V11.3333H5ZM2.5 7.16667V5.5H17.5V7.16667H2.5Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
            Filter
          </button>

          <div className="relative flex items-center gap-4 w-[400px] pl-[10px] border border-[#777] rounded-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <mask
                id="mask0_1504_2358"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="21"
              >
                <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1504_2358)">
                <path
                  d="M16.3333 18L11.0833 12.75C10.6667 13.0833 10.1875 13.3472 9.64583 13.5417C9.10417 13.7361 8.52778 13.8333 7.91667 13.8333C6.40278 13.8333 5.12153 13.309 4.07292 12.2604C3.02431 11.2118 2.5 9.93056 2.5 8.41667C2.5 6.90278 3.02431 5.62153 4.07292 4.57292C5.12153 3.52431 6.40278 3 7.91667 3C9.43056 3 10.7118 3.52431 11.7604 4.57292C12.809 5.62153 13.3333 6.90278 13.3333 8.41667C13.3333 9.02778 13.2361 9.60417 13.0417 10.1458C12.8472 10.6875 12.5833 11.1667 12.25 11.5833L17.5 16.8333L16.3333 18ZM7.91667 12.1667C8.95833 12.1667 9.84375 11.8021 10.5729 11.0729C11.3021 10.3438 11.6667 9.45833 11.6667 8.41667C11.6667 7.375 11.3021 6.48958 10.5729 5.76042C9.84375 5.03125 8.95833 4.66667 7.91667 4.66667C6.875 4.66667 5.98958 5.03125 5.26042 5.76042C4.53125 6.48958 4.16667 7.375 4.16667 8.41667C4.16667 9.45833 4.53125 10.3438 5.26042 11.0729C5.98958 11.8021 6.875 12.1667 7.91667 12.1667Z"
                  fill="black"
                />
              </g>
            </svg>
            <input
              type="text"
              placeholder="Trying searching 'lab reports'"
              className="w-full pl-4 pr-16 py-2 border-none text-sm text-[#777] focus:outline-none font-poppins font-normal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-[10px] py-[6px] text-[#009A9F] rounded-[10px] hover:bg-[#1AE2E9] font-poppins font-medium flex items-center gap-[4px] border border-[#1AE2E9]">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg ">
        {[
          { name: "Lab results - Blood Test", date: "10/11/24" },
          { name: "Doctor's Note - Consultation", date: "20/11/24" },
          { name: "Prescription - Medication", date: "21/11/24" },
          { name: "Prescription - Medication", date: "21/11/24" },
        ].map((file, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-[12px] py-[10px] px-[20px] border rounded-[10px] bg-white"
          >
            <div>
              <h3 className="text-black font-poppins text-[14px] font-semibold leading-normal">
                {file.name}
              </h3>
              <p className="text-black text-[14px] font-light leading-normal">
                {file.date}
              </p>
            </div>
            <button className="text-[#009A9F] font-poppins text-[14px] font-medium leading-normal hover:underline">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
