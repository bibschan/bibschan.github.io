"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const images = ["/images/logo.png", "/images/logo.png"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      3000 // slide change interval
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-64">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-full h-64 flex justify-center items-center relative"
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="contain"
              className="object-cover h-full w-full rounded-md overflow-hidden border-2 border-gray-300 bg-gray-200"
            />
          </div>
        ))}
      </div>

      {/* Stepper */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
