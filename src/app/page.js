"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Button, Heading } from "@medusajs/ui";

// Import images with consistent paths
import banner from "@/assets/images/homepage/banner.svg";
import chevronLeft from "@/assets/images/homepage/chevron-left.svg";
import chevronRight from "@/assets/images/homepage/chevron-right.svg";
import whyChooseUs1 from "@/assets/images/homepage/whyChooseUs1.png";
import ourMission from "@/assets/images/homepage/ourMission.svg";
import ourTeam from "@/assets/images/homepage/ourTeam.svg";
import ourVision from "@/assets/images/homepage/ourVision.svg";
import ourApproach from "@/assets/images/homepage/ourApproach.svg";
import testimonial1 from "@/assets/images/homepage/testimonial1.png";
import testimonial2 from "@/assets/images/homepage/testimonial2.png";
import mediaCoverage from "@/assets/images/homepage/mediaCoverage.png";
import BannerCarousel from "@/components/Home/BannerCarousel";
import stethoscope_arrow from "@/assets/images/homepage/stethoscope_arrow.png";
import relax from "@/assets/images/homepage/relax.png";
import emoji_people from "@/assets/images/homepage/emoji_people.png";
import star from "@/assets/images/homepage/star.svg";
import strawhat from "@/assets/images/homepage/iconstart.svg";

// Animation assets
import arrows from "@/assets/images/homepage/animation1/arrows.png";
import doctorNurse from "@/assets/images/homepage/animation1/doctorNurse.png";
import dots from "@/assets/images/homepage/animation1/dots.png";
import ellipse from "@/assets/images/homepage/animation1/ellipse.png";
import spiral from "@/assets/images/homepage/animation1/spiral.png";
import textContent from "@/assets/images/homepage/animation1/textContent.png";
import ball from "@/assets/images/homepage/animation2/ball.png";
import doctors from "@/assets/images/homepage/animation2/doctors.png";
import textContent2 from "@/assets/images/homepage/animation2/textContent.png";
import wheelchair from "@/assets/images/homepage/animation3/wheelchair.png";
import hand from "@/assets/images/homepage/animation3/hand.png";
import textContent3 from "@/assets/images/homepage/animation3/textContent.png";
import choose from "@/assets/images/homepage/whychoose2.png";
import Image from "next/image";
import ComprehensiveServices from "@/components/ComprehensiveServices";
import Homemade from "@/components/Homecare";
import LongTermCare from "@/components/Long-term-care/LongTermCare";
import BookComponent from "@/components/Book/BookComponent";
import BuyRentEqu from "@/components/BuyRent/BuyRentEqu";
import SpecificSection from "@/components/Home/SpecificSection";
import FloatingContactWidget from "@/components/Home/FloatingContactWidget";
import CarouselSection from "@/components/Home/CarouselSection";

const Home = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("changing index " + index);
      setIndex(index == 0 ? 1 : index == 1 ? 2 : 0);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [index]);

  const abouts = [
    {
      image: ourMission,
      title: "Our Mission",
      desc: "To provide high-quality, accessible, and compassionate healthcare services within the comfort of home, enhancing patient well-being and recovery.",
    },
    {
      image: ourVision,
      title: "Our Vision",
      desc: "To redefine healthcare by making it more patient-centric, convenient, and reliable.",
    },
    {
      image: ourTeam,
      title: "Our Team",
      desc: "Apollo Homecare’s team consists of experienced doctors, skilled nurses, physiotherapists, and caregivers committed to exceptional home-based care.",
    },
    {
      image: ourApproach,
      title: "Our Approach",
      desc: "We blend advanced medical practices with a patient-first philosophy, ensuring every service is tailored to meet individual needs.",
    },
  ];

  const next = () => {
    setCurrentTestimony(currentTestimony + 1);
    emblaApi?.scrollNext();
  };

  const prev = () => {
    emblaApi?.scrollPrev();
    setCurrentTestimony(currentTestimony - 1);
  };

  const testimonials = [
    {
      date: "May 8, 2020",
      title: "Radhika S., Daughter of a patient",
      testimony:
        "Apollo Homecare has been a blessing for our family. The nurses and caregivers are skilled and compassionate, making my father’s recovery so much smoother. We couldn’t be happier with the service!",
      image: testimonial1,
    },
    {
      date: "May 8, 2020",
      title: "Sunita P., Family Member of a Patient",
      testimony:
        "The personalized care plans were exactly what we needed. Knowing that Apollo’s team is just a call away gives us peace of mind every day.",
      image: testimonial2,
    },
    {
      date: "May 8, 2020",
      title: "Anil K., Homecare Patient",
      testimony:
        "The convenience of homecare has been life-changing. Apollo Homecare provided us with everything we needed, from regular health check-ups to emergency support, all from the comfort of home.",
      image: testimonial1,
    },
  ];

  const sliderContent = [
    {
      title: "Welcome to Our Service",
      description:
        "We offer the best healthcare solutions for you and your family.",
      buttonText: "Learn More",
    },
    {
      title: "Meet Our Doctors",
      description: "Our team of experts is here to provide exceptional care.",
      buttonText: "Meet the Team",
    },
    {
      title: "Accessibility for Everyone",
      description: "We ensure accessible healthcare services for everyone.",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div>
      <div className="bg-[#e6f5f5] mb-[-31px] md:mb-[88px]">
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            height: "42rem",
            backgroundColor: "#e6f5f5",
          }}
          className="relative hidden md:block mx-auto"
        >
          <Image
            alt=""
            src={dots}
            style={{
              transitionDuration: "2s",
              width: index == 0 ? "3rem" : "0rem",
              top: index == 0 ? "10rem" : "0rem",
              right: index == 0 ? "7rem" : "0rem",
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={arrows}
            style={{
              transitionDuration: "2s",
              width: index == 0 ? "5rem" : "0rem",
              top: index == 0 ? "13.5rem" : "0rem",
              right: index == 0 ? "22.5rem" : "0rem",
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={ellipse}
            style={{
              width: index == 0 ? "40rem" : "0rem",
              bottom: 0,
              right: 0,
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={spiral}
            style={{
              transitionDuration: "2s",
              width: index == 0 || index == 1 ? "5rem" : "0rem",
              visibility: index == 0 || index == 1 ? "visible" : "hidden",
              top: index == 0 ? "23.5rem" : "20.3rem",
              right: index == 0 ? "30.5rem" : index == 1 ? "38rem" : "0rem",
              transform: index == 1 ? "rotate(90deg)" : "",
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={doctorNurse}
            className={`transition-all duration-1000 ${
              index === 0 ? "w-[691px] h-[665px]" : "w-0 h-0"
            } absolute bottom-0 right-[2rem]`}
          />

          <div
            style={{
              transitionDuration: "2s",
              width: "40rem",
              top: "15.5rem",
              left: index == 1 || index == 0 ? "12.55%" : "55%",
              position: "absolute",
            }}
          >
            {index == 0 ? (
              <div className="space-y-4">
                <h1 className="font-Poppins text-[40px] font-bold bg-gradient-to-r from-[#00DDE5] via-[#019196] to-[#03676A] bg-clip-text text-transparent">
                  Compassionate Long-Term Care Tailored to Your Needs
                </h1>

                <p className="w-[696px] text-[#6C87AE] font-Poppins text-[16px] font-normal leading-[19.2px]">
                  Our dedicated caregivers are here to provide quality,
                  personalized long-term care to ensure you or your loved ones
                  feel supported and comfortable at every stage of care.
                </p>

                <button className="px-10 py-5 text-2xl rounded-full text-white bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)]">
                  Learn More
                </button>
              </div>
            ) : index == 1 ? (
              <div className="space-y-4">
                <h1 className="font-Poppins text-[40px] font-bold bg-gradient-to-r from-[#00DDE5] via-[#019196] to-[#03676A] bg-clip-text text-transparent">
                  Book Essential Pathology Services at Your Convenience
                </h1>

                <p className="text-[16px] text-[#6C87AE]">
                  Easily book pathology tests and diagnostic services to manage
                  your health needs from the comfort of your home or nearby
                  facility.
                </p>

                <button className="px-10 py-5 text-2xl rounded-full text-white bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_116_281)">
                      <path
                        d="M17.5017 1.14282H14.9237V2.73751H16.7044V6.29898C16.7044 8.98098 14.5223 11.1628 11.8406 11.1628H11.4685C8.78649 11.1628 6.6047 8.9807 6.6047 6.29898V2.73751H8.38543V1.14282H5.80735C5.36696 1.14282 5.01001 1.49978 5.01001 1.94017V6.29898C5.01001 9.86017 7.90731 12.7575 11.4685 12.7575H11.8406C15.4018 12.7575 18.2991 9.86017 18.2991 6.29898V1.94017C18.2991 1.49978 17.9421 1.14282 17.5017 1.14282Z"
                        fill="white"
                      />
                      <path
                        d="M14.844 0C14.4036 0 14.0466 0.356953 14.0466 0.797344V3.02991C14.0466 3.4703 14.4036 3.82725 14.844 3.82725C15.2844 3.82725 15.6413 3.4703 15.6413 3.02991V0.797344C15.6413 0.356953 15.2844 0 14.844 0Z"
                        fill="white"
                      />
                      <path
                        d="M8.5449 0C8.10451 0 7.74756 0.356953 7.74756 0.797344V3.02991C7.74756 3.4703 8.10451 3.82725 8.5449 3.82725C8.98529 3.82725 9.34224 3.4703 9.34224 3.02991V0.797344C9.34224 0.356953 8.98529 0 8.5449 0Z"
                        fill="white"
                      />
                      <path
                        d="M12.505 16.4521V11.9338H10.9103V16.4521H8.3322C6.25114 16.4521 4.55811 18.1451 4.55811 20.2259C4.55811 22.307 6.26309 24 8.35878 24H8.73087C10.8119 24 12.505 22.307 12.505 20.2259V18.0468H15.2159V16.4521H12.505ZM10.9103 20.2256C10.9103 21.4272 9.93246 22.4051 8.73087 22.4051H8.35878C7.12184 22.4051 6.15279 21.448 6.15279 20.2256C6.15279 19.0241 7.13061 18.0465 8.3322 18.0465H10.9103V20.2256Z"
                        fill="white"
                      />
                      <path
                        d="M16.9436 14.7512C15.5663 14.7512 14.4456 15.8718 14.4456 17.2496C14.4456 18.6268 15.5661 19.7476 16.9436 19.7476C18.3212 19.7476 19.442 18.6268 19.442 17.2496C19.442 15.872 18.3214 14.7512 16.9436 14.7512ZM16.9436 18.1527C16.4455 18.1527 16.0402 17.7474 16.0402 17.2493C16.0402 16.751 16.4456 16.3457 16.9436 16.3457C17.4419 16.3457 17.8473 16.751 17.8473 17.2493C17.8473 17.7474 17.4419 18.1527 16.9436 18.1527Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_116_281">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Book Now
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <h1 className="font-Poppins text-[40px] font-bold bg-gradient-to-r from-[#00DDE5] via-[#019196] to-[#03676A] bg-clip-text text-transparent">
                  Buy or Rent Top-Quality Medical Equipment with Ease
                </h1>

                <p className="text-[16px] text-[#6C87AE]">
                  Choose from a wide selection of medical equipment, available
                  for both purchase and rental. We make it easy to get the
                  quality equipment you need, when and how you need it.
                </p>

                <button className="px-10 py-5 text-2xl rounded-full text-white bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-3"
                  >
                    <mask
                      id="mask0_118_353"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_118_353)">
                      <path
                        d="M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3333 4 20.625 4.17083 20.825 4.5125C21.025 4.85417 21.0333 5.2 20.85 5.55L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.68333 16.6708 5.3 16.0125C4.91667 15.3542 4.9 14.7 5.25 14.05L6.6 11.6L3 4H1V2H4.25L5.2 4Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  Buy Now
                </button>
              </div>
            )}
          </div>

          {/* <Image
            alt=""
            src={
              index == 0
                ? textContent
                : index == 1
                ? textContent2
                : textContent3
            }
            style={{
              transitionDuration: "2s",
              width: "40rem",
              top: "15.5rem",
              left: index == 1 || index == 0 ? "12.55%" : "55%",
              position: "absolute",
            }}
          /> */}
          <Image
            alt=""
            src={index === 1 ? doctors : wheelchair}
            className={`transition-all duration-[2000ms] ${
              index === 1 || index === 2
                ? "w-[564px] h-[564px] visible"
                : "w-0 h-0 invisible"
            } absolute top-[3.5rem] ${
              index === 1
                ? "right-[10.5%]"
                : index === 2
                ? "right-[55%]"
                : "right-0"
            }`}
          />

          <Image
            alt=""
            src={hand}
            style={{
              transitionDuration: "2s",
              width: index == 2 ? "15rem" : "0rem",
              visibility: index == 2 ? "visible" : "hidden",
              top: "3.5rem",
              right: index == 2 ? "45%" : "0rem",
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={ball}
            style={{
              transitionDuration: "2s",
              width: index == 1 ? "5rem" : "0rem",
              visibility: index == 1 ? "visible" : "hidden",
              bottom: "3.5rem",
              right: index == 1 ? "16%" : "0rem",
              position: "absolute",
            }}
          />
          <Image
            alt=""
            src={ball}
            style={{
              transitionDuration: "2s",
              width: index == 1 ? "2.5rem" : "0rem",
              visibility: index == 1 ? "visible" : "hidden",
              bottom: "10.5rem",
              right: index == 1 ? "13%" : "0rem",
              position: "absolute",
            }}
          />
          <div
            className="absolute flex items-center"
            style={{
              bottom: "0",
              left: "48%",
              borderRadius: "10px 10px 0px 0px",
              background: "#a3d9e3",
              backdropFilter: "blur(50px)",
              padding: "5px 8px",
            }}
          >
            <div
              className="me-2"
              onClick={() => setIndex(0)}
              style={{
                height: index == 0 ? "1rem" : "0.8rem",
                width: index == 0 ? "1rem" : "0.8rem",
                borderRadius: "100%",
                backgroundColor: index == 0 ? "#00718a" : "white",
              }}
            />
            <div
              className="me-2"
              onClick={() => setIndex(1)}
              style={{
                height: index == 1 ? "1rem" : "0.8rem",
                width: index == 1 ? "1rem" : "0.8rem",
                borderRadius: "100%",
                backgroundColor: index == 1 ? "#00718a" : "white",
              }}
            />
            <div
              onClick={() => setIndex(2)}
              style={{
                height: index == 2 ? "1rem" : "0.8rem",
                width: index == 2 ? "1rem" : "0.8rem",
                borderRadius: "100%",
                backgroundColor: index == 2 ? "#00718a" : "white",
              }}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden">
        {/* <Image src={banner} alt="banner" className="hidden md:block w-full z-1" /> */}
        <div className="flex flex-col items-center mt-5 container w-full mx-auto md:px-4 px-2">
          <ComprehensiveServices />
        </div>
        <BannerCarousel />

        {/* ---------------Long Term Care---------------- */}
        <div className="md:hidden block">
          <LongTermCare />
        </div>

        {/* ---------------Book---------------- */}
        <div className="md:hidden block">
          <BookComponent />
        </div>
        {/* ---------------Buy/Rent Equ---------------- */}
        <div className="md:hidden block">
          <BuyRentEqu />
        </div>
        {/* ---------------Homecare Section---------------- */}
        <div>
          <Homemade />
        </div>
        {/* ---------------Why Choose Us Section---------------- */}
        <div className="md:mt-12 mt-4 flex flex-col items-center container mx-auto px-4">
          <h1 className="md:text-[32px] lg:text-[32px]  font-bold md:leading-[48px] leading-[10px] text-center text-[#031432]">
            Why Choose Us?
          </h1>
          <p className="md:text-[16px] lg:text-[16px] text-[15px] font-normal md:leading-[24px] leading-4 text-center text-[#6C87AE] mt-4 w-full sm:w-3/4 md:w-1/2 mx-auto">
            Choosing Apollo Homecare means choosing a healthcare provider that
            prioritizes your comfort, convenience, and well-being. Discover why
            countless families trust us to deliver exceptional care right at
            home.{" "}
          </p>
        </div>
        <div className="mt-5 flex flex-col sm:flex-row justify-center gap-[5px] sm:gap-[42px] container mx-auto">
          {/* Image Section */}
          <div className="md:w-[40%] w-full m-auto">
            <Image
              className="w-[full] h-[full] m-auto sm:w-1/2 md:w-full sm:mr-20 rounded-[32px]"
              src={whyChooseUs1}
              alt="Why Choose Us 1"
            />
          </div>

          {/* Text Section */}
          <div className="px-4 md:mt-4 text-center sm:text-left">
            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold">
              Experienced Professionals
            </h1>
            <p className="md:text-[16px] text-[15px] md:leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              Our team includes highly skilled doctors, nurses, and caregivers
              with extensive experience in home-based healthcare.
            </p>

            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold md:mt-8">
              Personalized Care Plans
            </h1>
            <p className="md:text-[16px] text-[15px] md:leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              We customize each care plan to fit individual health needs and
              lifestyles, ensuring the best possible outcomes.
            </p>

            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold md:mt-8">
              24/7 Support
            </h1>
            <p className="md:text-[16px] text-[15px] leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              Receive round-the-clock assistance and support, so help is always
              just a call away.
            </p>
          </div>
        </div>

        <div className="px-4 mt-5 md:flex flex flex-col-reverse sm:flex-row justify-center gap-[5px] sm:gap-[42px] container mx-auto">
          {/* Text Section */}
          <div className=" md:w-[60%] w-full">
            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold">
              Advanced Technology
            </h1>
            <p className="md:text-[16px] text-[15px] md:leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              From remote health monitoring to on-demand consultations, we use
              the latest technology to provide efficient and reliable care.
            </p>

            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold md:mt-8">
              Trusted Brand
            </h1>
            <p className="md:text-[16px] text-[15px] md:leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              As part of the Apollo family, we bring a legacy of healthcare
              excellence and trust that our patients rely on.
            </p>

            <h1 className="text-lg md:text-[32px] leading-[48px] text-left text-[#031432] font-bold md:mt-8">
              Affordable Care Options
            </h1>
            <p className="md:text-[16px] text-[15px] leading-[24px] text-justify text-[#6C87AE] md:mt-4 sm:w-3/4">
              We offer cost-effective care solutions that provide value without
              compromising quality.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-[40%] w-full m-auto">
            <Image
              className="w-[full] h-[full] m-auto sm:w-1/2 md:w-full sm:mr-20 rounded-[32px]"
              src={choose}
              alt="Why Choose Us 1"
            />
          </div>
        </div>

        {/* ---------------Statistics Section---------------- */}
        <div className="container mx-auto md:mt-20 mt-6 py-5 px-7 rounded-[28px]">
          <div
            className="md: flex flex-col md:flex-row items-center justify-between py-5 px-7 rounded-[28px] space-y-6 md:space-y-0 md:space-x-6"
            style={{
              backgroundImage:
                "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
            }}
          >
            {/* Patients Served Section */}
            <div className="flex flex-col items-center p-[0px]">
              <Image
                src={stethoscope_arrow}
                alt="Patients Served"
                width={60}
                height={60}
                className="mb-1 md:w-[60px] md:h-[60px] w-[60px] h-[60px]"
              />
              <h4 className="md:text-white text-white font-[600] tracking-[0.13px] md:text-[32px] mb-1 text-[25px]">
                1Mn+
              </h4>
              <p className="md:text-white text-white opacity-75 font-[600] md:text-[18px] text-[15px]">
                PATIENTS SERVED A YEAR
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l md:border-white border-black h-28"></div>

            {/* Care Hours Section */}
            <div className="flex flex-col items-center p-[0px]">
              <Image
                src={relax}
                alt="Care Hours"
                width={60}
                height={60}
                className="mb-2 md:w-[40px] md:h-[40px] w-[60px] h-[60px]"
              />
              <h4 className="md:text-white text-white font-[600] tracking-[0.13px] md:text-[32px] mb-1 text-[25px]">
                5Mn+
              </h4>
              <p className="md:text-white text-white opacity-75 font-[600] md:text-[18px] text-[15px]">
                CARE HOURS PERFORMED
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l md:border-white border-black h-28"></div>

            {/* Care Givers Section */}
            <div className="flex flex-col items-center p-[0px]">
              <Image
                src={emoji_people}
                alt="Care Givers"
                width={60}
                height={60}
                className="mb-2 md:w-[40px] md:h-[40px] w-[60px] h-[60px]"
              />
              <h4 className="md:text-white text-white font-[600] tracking-[0.13px] md:text-[32px] mb-1 text-[25px]">
                2K+
              </h4>
              <p className="md:text-white text-white opacity-75 font-[600] md:text-[18px] text-[15px]">
                CARE GIVERS
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l md:border-white border-black h-28"></div>

            {/* Rating Section */}
            <div className="flex flex-col items-center p-[0px]">
              <Image
                src={strawhat}
                alt="Rating"
                width={60}
                height={60}
                className="mb-2 md:w-[40px] md:h-[40px] w-[60px] h-[60px]"
              />
              <h4 className="md:text-white text-white font-[600] tracking-[0.13px] md:text-[32px] mb-1 text-[25px]">
                4.9
              </h4>
              <p className="md:text-white text-white opacity-75 font-[600] md:text-[18px] text-[15px]">
                RATING ON GOOGLE
              </p>
            </div>
          </div>
        </div>

        <CarouselSection />
        {/* ---------------About Apollo---------------- */}
        <div className="flex flex-col items-center md:mt-16 mt-6">
          <h1 className="md:text-[32px] lg:text-[32px]  font-bold md:leading-[48px] leading-[10px] text-center text-[#031432] text-[26px]">
            About Apollo Homecare
          </h1>
          <p className="md:text-[16px] lg:text-[16px] text-[16px] font-normal md:leading-[24px] leading-4 text-center text-[#6C87AE] mt-4 w-full sm:w-3/4 md:w-[38%] mx-auto">
            Apollo Homecare is dedicated to bringing world-class healthcare
            services directly to your home. As a trusted leader in healthcare,
            we combine professional medical expertise with personalized care to
            support you and your loved ones through every step of your health
            journey.
          </p>
        </div>
        <div className="container mx-auto my-10 px-4">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5 justify-center">
            {abouts.map((item, index) => (
              <div
                key={index}
                className="px-[29px] py-[22px]"
                style={{
                  boxShadow: "0px 10px 40px 0px rgba(18, 18, 18, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  borderTop: "3px solid var(--Green-Normal, #009A9F)",
                }}
              >
                <Image src={item.image} alt="image" height={40} width={40} />
                <h4 className="md:mt-3 font-[700] text-[14px] leading-[28px] tracking-[0.03em] text-left text-[#121212]">
                  {item.title}
                </h4>
                <p className="md:mt-3 text-[12px] font-[400] leading-[16px] tracking-[0.03em] text-left text-[#696969]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <SpecificSection />
        <FloatingContactWidget />
      </div>
    </div>
  );
};
export default Home;
