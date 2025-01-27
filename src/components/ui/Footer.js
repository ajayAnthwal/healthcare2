import { Button, Text, clx } from "@medusajs/ui";
import Link from "next/link";

export default async function Footer() {
  const items = [
    {
      title: "About",
      options: ["Legacy", "Leadership", "Vision", "Our Pillars", "Awards"],
    },
    {
      title: "Our Services",
      options: ["Long term care", "Booking services", "Buy/rent equipments"],
    },
    {
      title: "Partner with us",
      options: ["Corporates", "Doctors"],
    },
    {
      title: "Careers",
      options: [
        "Current Opportunities",
        "Career in Homecare",
        "Life at Apollo Homecare",
        "Hiring Process",
      ],
    },

    {
      title: "News & Media",
      options: ["Press Releases", "Gallery", "Journals", "Blogs", "Campaigns"],
    },
  ];
  const cities = [
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
  ];

  const options = [
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "Patient Charter",
  ];
  return (
    <footer
      className="w-full p-4 pt-10 mt-5"
      style={{ backgroundColor: "#002122", color: "white" }}
    >
      <div className="flex flex-col w-[1512px] mx-auto footer-container md:flex-row ">
        <div className="grid grid-cols-2 md:flex container mx-auto gap-2">
          {/* <div className="grid grid-cols-3 gap-4 p-4"> */}
          {items.map((item, index) => (
            <>
              {/* <div key={index} style={{ width: "12.5rem" }}> */}
              <div
                key={index}
                className="md:border-r px-4 border-gray-500 flex-1 md:last:border-none"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <div className="mt-3">
                  {item.options.map((option, index) => (
                    <p
                      key={index}
                      className="text-sm mb-2"
                      style={{ opacity: "0.8", fontWeight: "300" }}
                    >
                      {option}
                    </p>
                  ))}
                </div>
                <div className="block md:hidden border-b border-gray-500"></div>
              </div>
              {/* {index !== items.length - 1 && (
              <hr
                style={{ borderWidth: ".5px", height: "auto", opacity: ".28" }}
                className="me-3"
              />
            )} */}
            </>
          ))}
        </div>
        <div className="mt-8 md:mt-0 flex flex-col justify-center items-center">
          <Button
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#FF784B] shadow-lg text-white"
            style={{
              boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
            }}
          >
            SHARE A FEEDBACK
          </Button>

          <Button
            className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#FF784B] shadow-lg text-white mt-3  "
            style={{
              boxShadow: "0px 8px 23px 0px rgba(65, 132, 247, 0.24)",
            }}
          >
            DOWNLOAD BOOKLET
          </Button>
          {/* ----------------Social Links--------------------- */}
          <div className="flex justify-center mt-4">
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
            >
              <path
                d="M8.70652 3.32002H10.5865V0.14003C9.67627 0.0453769 8.76168 -0.00135428 7.84652 2.98641e-05C5.12653 2.98641e-05 3.26653 1.66003 3.26653 4.70002V7.32002H0.196533V10.88H3.26653V20H6.94652V10.88H10.0065L10.4665 7.32002H6.94652V5.05002C6.94652 4.00002 7.22652 3.32002 8.70652 3.32002Z"
                fill="#FF784B"
              />
            </svg>
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
            >
              <path
                d="M18.0122 0H21.405L13.9927 8.4718L22.7127 20H15.885L10.5373 13.0082L4.41831 20H1.02347L8.95164 10.9385L0.586548 0H7.58754L12.4214 6.39077L18.0122 0ZM16.8214 17.9692H18.7014L6.566 1.9241H4.54857L16.8214 17.9692Z"
                fill="#FF784B"
              />
            </svg>
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M16.0526 3.46C15.8153 3.46 15.5833 3.53038 15.386 3.66224C15.1886 3.79409 15.0348 3.98151 14.944 4.20078C14.8532 4.42005 14.8294 4.66133 14.8757 4.89411C14.922 5.12689 15.0363 5.34071 15.2041 5.50853C15.3719 5.67635 15.5858 5.79064 15.8185 5.83694C16.0513 5.88324 16.2926 5.85948 16.5119 5.76866C16.7311 5.67783 16.9186 5.52402 17.0504 5.32668C17.1823 5.12935 17.2526 4.89734 17.2526 4.66C17.2526 4.34174 17.1262 4.03652 16.9012 3.81147C16.6761 3.58643 16.3709 3.46 16.0526 3.46ZM20.6526 5.88C20.6332 5.0503 20.4778 4.2294 20.1926 3.45C19.9384 2.78313 19.5426 2.17928 19.0326 1.68C18.5375 1.16743 17.9322 0.774176 17.2626 0.53C16.4853 0.236161 15.6635 0.07721 14.8326 0.0599999C13.7726 -5.58794e-08 13.4326 0 10.7126 0C7.99265 0 7.65265 -5.58794e-08 6.59265 0.0599999C5.7618 0.07721 4.93999 0.236161 4.16265 0.53C3.49432 0.776649 2.88958 1.16956 2.39265 1.68C1.88007 2.17518 1.48682 2.78044 1.24265 3.45C0.948807 4.22734 0.789856 5.04915 0.772646 5.88C0.712646 6.94 0.712646 7.28 0.712646 10C0.712646 12.72 0.712646 13.06 0.772646 14.12C0.789856 14.9508 0.948807 15.7727 1.24265 16.55C1.48682 17.2196 1.88007 17.8248 2.39265 18.32C2.88958 18.8304 3.49432 19.2234 4.16265 19.47C4.93999 19.7638 5.7618 19.9228 6.59265 19.94C7.65265 20 7.99265 20 10.7126 20C13.4326 20 13.7726 20 14.8326 19.94C15.6635 19.9228 16.4853 19.7638 17.2626 19.47C17.9322 19.2258 18.5375 18.8326 19.0326 18.32C19.5449 17.8226 19.941 17.2182 20.1926 16.55C20.4778 15.7706 20.6332 14.9497 20.6526 14.12C20.6526 13.06 20.7126 12.72 20.7126 10C20.7126 7.28 20.7126 6.94 20.6526 5.88ZM18.8526 14C18.8454 14.6348 18.7304 15.2637 18.5126 15.86C18.353 16.2952 18.0965 16.6884 17.7626 17.01C17.4383 17.3405 17.0459 17.5964 16.6126 17.76C16.0163 17.9778 15.3874 18.0927 14.7526 18.1C13.7526 18.15 13.3826 18.16 10.7526 18.16C8.12265 18.16 7.75265 18.16 6.75265 18.1C6.09354 18.1123 5.43724 18.0109 4.81265 17.8C4.39843 17.6281 4.024 17.3728 3.71265 17.05C3.38073 16.7287 3.12749 16.3352 2.97265 15.9C2.7285 15.2952 2.59309 14.6519 2.57265 14C2.57265 13 2.51265 12.63 2.51265 10C2.51265 7.37 2.51265 7 2.57265 6C2.57713 5.35106 2.6956 4.70795 2.92265 4.1C3.09869 3.67791 3.36891 3.30166 3.71265 3C4.01646 2.65617 4.39193 2.3831 4.81265 2.2C5.4222 1.98004 6.06464 1.86508 6.71265 1.86C7.71265 1.86 8.08265 1.8 10.7126 1.8C13.3426 1.8 13.7126 1.8 14.7126 1.86C15.3474 1.86728 15.9763 1.98225 16.5726 2.2C17.0271 2.36865 17.4349 2.64285 17.7626 3C18.0903 3.30718 18.3464 3.68273 18.5126 4.1C18.7349 4.70893 18.8499 5.35178 18.8526 6C18.9026 7 18.9126 7.37 18.9126 10C18.9126 12.63 18.9026 13 18.8526 14ZM10.7126 4.87C9.69846 4.87198 8.70761 5.17453 7.8653 5.73942C7.02299 6.30431 6.36702 7.1062 5.98028 8.04375C5.59354 8.98131 5.49337 10.0125 5.69244 11.0069C5.89151 12.0014 6.38088 12.9145 7.09872 13.631C7.81656 14.3474 8.73066 14.835 9.72551 15.0321C10.7204 15.2293 11.7513 15.1271 12.6881 14.7385C13.6249 14.35 14.4255 13.6924 14.9888 12.849C15.552 12.0056 15.8526 11.0142 15.8526 10C15.854 9.3251 15.7219 8.65661 15.4639 8.03296C15.2059 7.40931 14.8272 6.84281 14.3495 6.36605C13.8718 5.88929 13.3046 5.51168 12.6804 5.25493C12.0563 4.99818 11.3875 4.86736 10.7126 4.87ZM10.7126 13.33C10.054 13.33 9.41021 13.1347 8.8626 12.7688C8.31498 12.4029 7.88817 11.8828 7.63613 11.2743C7.38409 10.6659 7.31814 9.99631 7.44663 9.35035C7.57512 8.70439 7.89227 8.11104 8.35798 7.64533C8.82369 7.17963 9.41704 6.86247 10.063 6.73398C10.709 6.6055 11.3785 6.67144 11.987 6.92348C12.5955 7.17552 13.1155 7.60234 13.4814 8.14995C13.8473 8.69757 14.0426 9.34139 14.0426 10C14.0426 10.4373 13.9565 10.8703 13.7892 11.2743C13.6218 11.6784 13.3765 12.0454 13.0673 12.3547C12.7581 12.6639 12.391 12.9092 11.987 13.0765C11.583 13.2439 11.1499 13.33 10.7126 13.33Z"
                fill="#FF784B"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.5672 1.92727C27.7781 0.523636 26.9217 0.265455 25.1781 0.167273C23.4363 0.0490909 19.0563 0 15.2617 0C11.4599 0 7.0781 0.0490911 5.3381 0.165455C3.5981 0.265455 2.73992 0.521818 1.94356 1.92727C1.13083 3.32909 0.712646 5.74364 0.712646 9.99454V10.0091C0.712646 14.2418 1.13083 16.6745 1.94356 18.0618C2.73992 19.4655 3.59628 19.72 5.33628 19.8382C7.0781 19.94 11.4599 20 15.2617 20C19.0563 20 23.4363 19.94 25.1799 19.84C26.9236 19.7218 27.7799 19.4673 28.569 18.0636C29.389 16.6764 29.8036 14.2436 29.8036 10.0109V9.99636C29.8036 5.74364 29.389 3.32909 28.5672 1.92727Z"
                fill="#FF784B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6217 15.4545V4.54541L20.7126 9.99996L11.6217 15.4545Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
        </div>
      </div>

      <hr className="mt-1" style={{ opacity: "0.28" }} />
      <div
        className="mt-4 flex w-[1512px] mx-auto footer-container pl-[4rem] "
        style={{ opacity: "0.8" }}
      >
        <div className=" inline-block">
          <h1 className="inline-block font-semibold me-3">CONTACT US:</h1>
        </div>
        <div className="flex flex-wrap">
          {cities.map((item, index) => (
            <>
              <p key={index}>{item}</p>
              {index !== cities.length - 1 && (
                <hr
                  style={{
                    borderWidth: ".5px",
                    height: "auto",
                    opacity: ".28",
                  }}
                  className="ms-2 me-2"
                />
              )}
            </>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 justify-center md:flex md:justify-start mt-4 w-[1512px] mx-auto footer-container pl-[4rem] ">
        {options.map((item, index) => (
          <div className="" key={index}>
            <p
              key={index}
              className="me-8 font-semibold inline-block"
              style={{ opacity: ".8" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
}

const MobileFooter = () => {
  return (
    <footer className="bg-dark text-white py-6 px-4 sm:hidden">
      {" "}
      {/* Only visible on mobile */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        {/* About Section */}
        <div>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/about">
                <a className="hover:underline">Legacy</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">Leadership</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">Vision</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">Our Pillars</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:underline">Awards</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1">
            <li>Long term care</li>
            <li>Booking services</li>
            <li>Buy/rent equipment</li>
          </ul>
        </div>

        {/* Homecare for Corporates Section */}
        <div>
          <h3 className="font-semibold mb-2">Homecare for corporates</h3>
          <ul className="space-y-1">
            <li>B2B company packages</li>
          </ul>
        </div>

        {/* Careers Section */}
        <div>
          <h3 className="font-semibold mb-2">Careers</h3>
          <ul className="space-y-1">
            <li>Current Opportunities</li>
            <li>Career in Homecare</li>
            <li>Life at Apollo HomeCare</li>
            <li>Hiring Process</li>
          </ul>
        </div>

        {/* Refer a Patient Section */}
        <div>
          <h3 className="font-semibold mb-2">Refer a Patient</h3>
          <ul className="space-y-1">
            <li>Patient referrals for doctors</li>
          </ul>
        </div>

        {/* News & Media Section */}
        <div>
          <h3 className="font-semibold mb-2">News & Media</h3>
          <ul className="space-y-1">
            <li>Press releases</li>
            <li>Gallery</li>
            <li>Journals</li>
            <li>Blogs</li>
            <li>Campaigns</li>
          </ul>
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-6 space-y-4">
        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Share a Feedback
        </button>
        <button className="w-full bg-yellow-500 text-white py-2 rounded">
          Download Booklet
        </button>
        <button className="w-full bg-red-500 text-white py-2 rounded">
          I Need Consultation
        </button>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-6 text-lg">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </footer>
  );
};
