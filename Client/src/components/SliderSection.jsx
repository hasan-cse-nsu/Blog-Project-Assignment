/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const SliderSection = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = props.list.slice(0, 6);

  const changeSlide = () => {
    setCurrentSlide((prevSlide) => {
      return (prevSlide + 1) % slides.length;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="flex w-full h-full justify-center items-center space-x-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full sm:w-[300px] md:w-[350px] lg:w-[400px] p-6 bg-white rounded-lg shadow-lg transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-95"
              }`}
            >
              <div className="relative mb-6">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">{slide.title}</h1>
                <p className="text-lg mb-4">{slide.short}</p>
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SliderSection;
