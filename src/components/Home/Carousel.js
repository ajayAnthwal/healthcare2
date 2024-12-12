// Carousel.js
import React, { useRef, useState, useEffect } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import Image from "next/image";
import "embla-carousel-react/embla-carousel.css";

const EmblaCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    autoplay: true,
    speed: 5,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div
      className="relative w-full overflow-hidden mt-10"
      style={{ height: "40rem" }}
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div key={index} className="embla__slide">
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute flex items-center"
        style={{ bottom: "1rem", left: "48%" }}
      >
        <div
          className="me-2"
          style={{
            height: "0.8rem",
            width: "0.8rem",
            borderRadius: "100%",
            backgroundColor: "white",
          }}
        />
        <div
          className="me-2"
          style={{
            height: "0.8rem",
            width: "0.8rem",
            borderRadius: "100%",
            backgroundColor: "white",
          }}
        />
        <div
          style={{
            height: "1rem",
            width: "1rem",
            borderRadius: "100%",
            backgroundColor: "rgb(0, 113, 138)",
          }}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
