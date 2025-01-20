import React from "react";
import Vaccination from "@/assets/images/vaccination/Vaccination.png";
import Image from "next/image";

const Vacinnation = () => {
  const pillars = [
    {
      title: "Convenience",
      description:
        "Scheduling at your preferred time eliminates the need for travel and waiting.",
    },
    {
      title: "Safety",
      description:
        "Reduces exposure to infections often present in healthcare facilities.",
    },
    {
      title: "Comfort",
      description:
        "Familiar surroundings can ease anxiety associated with receiving vaccinations.",
    },
    {
      title: "Personalized Care",
      description:
        "Trained specialists ensure the vaccination process is smooth and tailored to individual needs.",
    },
  ];

  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              ADULT VACCINATION
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              Apollo&apos;s Adult Vaccination at Home is a healthcare service that
              allows adults to receive essential and recommended vaccines in the
              comfort and safety of your home. These vaccines help protect
              against influenza, pneumonia, hepatitis, tetanus, and other
              diseases. Apollo&apos;s home healthcare service is especially
              valuable for individuals who face challenges in visiting
              healthcare facilities due to mobility issues, busy schedules, or
              concerns about exposure to infections.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{
          background:
            "linear-gradient(189deg, #E6F5F5 -74.5%, #C1EFEF 160.14%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Why is Vaccination Important?
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <ol className="list-decimal pl-5 text-[#2A2A2A] text-base  text-[16px] leading-[24px]">
                <li className="mb-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    1. Disease Prevention
                  </span>
                  <br />
                  Vaccines help protect against severe illnesses, some of which
                  can be life-threatening.
                </li>
                <li className="mb-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    2. Community Protection
                  </span>
                  <br />
                  By staying vaccinated, adults contribute to herd immunity,
                  reducing the spread of infectious diseases.
                </li>
                <li>
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    3. Age-Specific Needs
                  </span>
                  <br />
                  As immunity can wane over time, adult vaccinations provide
                  crucial protection, particularly for older adults, individuals
                  with chronic illnesses, or those with weakened immune systems.
                </li>
                <li>
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    4. Convenience for At-Risk Groups
                  </span>
                  <br />
                  Adults who are bedridden or have mobility issues can stay
                  protected without the need to visit a clinic or hospital.
                </li>
              </ol>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={Vaccination}
                alt="Newborn baby care"
                className="mx-auto w-[400px]"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 px-6 bg-white">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          Benefits of Apollo Adult Vaccination at Home
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index}>
              <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              How is Apollo&apos;s Adult Vaccination Service Different?
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              Apollo Homecare&apos;s adult vaccination service stands out for its
              expert care, comprehensive vaccine options, and strict safety
              protocols. With personalized vaccination plans, post-vaccination
              support, and the convenience of home service, Apollo ensures a
              seamless and reliable experience for your health and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-center my-8">
          <h2 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal mb-8">
            Vaccinations at Home
          </h2>
          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            Prevention is better than cure. Home care specialists provide
            essential vaccines for adults right at your home, ensuring safety,
            convenience, and <br /> professional care.
          </p>

          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            Apollo Home Vaccination services offer a comprehensive range of
            vaccines, including:
          </p>

          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            <strong> Immunizations:</strong> Keep yourself protected with timely
            vaccinations.
          </p>

          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            <strong> Adult Vaccines :</strong> From annual flu shots to
            travel-specific immunizations, Apollo ensures your convenience and
            safety.
          </p>

          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            <strong>Specialized Vaccinations :</strong> Personalized solutions
            for seniors, gender specific, and individuals with unique health
            needs, all delivered with Apollo&apos;s <br /> trusted care.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-[#031432] text-center  text-[16px] font-semibold leading-normal">
            Below are some of the adult vaccines and immunizations that can be
            administered right at your home:
          </h2>

          <ul className="list-none text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            <li> H1N1</li>
            <li>Tetanus injection / Diphtheria</li>
            <li>Typhoid</li>
            <li>Flu Vaccination</li>
            <li>Chicken Pox</li>
            <li>Hepatitis A and Hepatitis B Vaccination</li>
            <li>HPV Vaccine to prevent Cervical Cancer</li>
            <li>Meningococcus</li>
            <li>Pneumococcus</li>
            <li>Shingles Vaccination</li>
          </ul>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              Importance of Apollo&apos;s Vaccination at Home
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              Apollo&apos;s Vaccination is a crucial step to prevent all diseases.
              Getting vaccines at home ensures timely vaccination as well as
              reduces the risk of exposure to infections in crowded healthcare
              facilities. This is especially important for individuals with
              mobility issues, chronic illnesses or who prefer the safety and
              convenience of home care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              What Apollo Homecare Offers
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              A comprehensive range of vaccines for adults, seniors and
              high-risk groups.
              <br /> Expert administration by trained healthcare professionals
              following strict safety protocols.
              <br /> Customized vaccination plans based on your specific needs.
              <br /> Post vaccination follow-up and support to ensure your
              well-being.
              <br /> With Apollo&apos;s trusted expertise, protecting your health has
              never been easier or more reliable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacinnation;
