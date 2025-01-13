import { useState, useEffect } from "react";
import Image from "next/image";
import healthcare from "@/assets/images/homepage/healthcare.png";

const BannerCarousel = () => {
  const banners = [
    { id: 1, image: healthcare, alt: "banner 1" },
    { id: 2, image: healthcare, alt: "banner 2" },
    { id: 3, image: healthcare, alt: "banner 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="container mx-auto flex my-[70px] relative">
      <Image
        src={banners[currentIndex].image}
        alt={banners[currentIndex].alt}
        className="w-[100%] rounded-lg"
        width={1920}
        height={600}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#009A9F]" : "bg-[#C7C7C7]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
