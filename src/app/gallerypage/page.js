"use client";
import React, { useState } from "react";
import Image from "next/image";
import pressImg from "@/assets/images/career/press-and-news.png";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const galleryItems = [
    { image: pressImg },
    { image: pressImg },
    { image: pressImg },
    { image: pressImg },
    { image: pressImg },
    { image: pressImg },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setSelectedImage(galleryItems[index].image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex].image);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex].image);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="text-gray-800 container mx-auto mt-9">
      <section className="py-16 px-6">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          Full Gallery
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-[250px] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={closeImage}
          >
            <X size={30} />
          </button>
          <button className="absolute left-5 text-white" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <div className="relative w-[90%] md:w-[60%] lg:w-[50%] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected Image"
              fill
              className="object-contain"
            />
          </div>
          <button className="absolute right-5 text-white" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
