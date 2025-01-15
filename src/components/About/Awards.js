export default function Awards() {
  const awards = [
    {
      name: "FICCI Healthcare Excellence Awards",
      description: "For outstanding contribution to patient care.",
      bgColor: "#E6F5F5",
    },
    {
      name: "Golden Globe Tigers Award",
      description: "For leadership in homecare services.",
      bgColor: "#B0E0E1",
    },
    {
      name: "Times Healthcare Awards",
      description: "Honoring Apollo as a trusted healthcare brand in India.",
      bgColor: "#E6F5F5",
    },
    {
      name: "JCI Accreditation",
      description:
        "Recognizing our hospitals for maintaining international patient safety and quality standards.",
      bgColor: "#B0E0E1",
    },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-[32px] font-semibold text-[var(--dark,#031432)] text-center font-poppins leading-normal">
        Awards
      </h2>

      <p className="mt-2 text-[16px] font-light italic text-[#3A3A3A] text-center leading-[24px]">
        Recognition for Excellence in Healthcare Delivery
      </p>

      <p className="mt-1 text-[16px] font-light text-[#3A3A3A] text-center leading-[24px]">
        Apollo Hospitals Group, including Apollo HomeCare, has been recognized
        both nationally and internationally for its excellence in healthcare.
        Recent awards include:
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            style={{ backgroundColor: award.bgColor }}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-[20px] font-medium text-black text-center font-poppins leading-normal">
              {award.name}
            </h3>
            <p className="mt-2 text-[14px] font-normal text-[#6C87AE] text-center  leading-normal">
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
