export default function Pillars() {
  const pillars = [
    {
      title: "Compassion",
      description:
        "We prioritize the dignity and well-being of our patients, delivering care with empathy and kindness.",
    },
    {
      title: "Integrity",
      description:
        "Every decision and interaction is grounded in transparency and ethical practices.",
    },
    {
      title: "Excellence",
      description:
        "Through continuous learning and adoption of cutting-edge medical practices, we maintain our commitment to superior care.",
    },
    {
      title: "Innovation",
      description:
        "Leveraging technology and advanced systems, we deliver homecare solutions that redefine healthcare standards.",
    },
    {
      title: "Collaboration",
      description:
        "A multidisciplinary approach ensures holistic care for patients, with families, caregivers, and healthcare professionals working together seamlessly.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
        Our Pillars
      </h2>
      <p className="mt-2 text-[16px] font-[400] italic text-[#3A3A3A] text-center font-poppins leading-[24px]">
        Core Values That Shape Our Mission
      </p>
      <p className="mt-4 text-[16px] font-[400] text-[#3A3A3A] text-center font-poppins leading-[24px]">
        At Apollo HomeCare, our operations are built on five foundational
        pillars:
      </p>

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
  );
}
