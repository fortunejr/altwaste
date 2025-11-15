import React, { useState, useEffect } from "react";
import { bamboo, coconuthusk, coconutshell, corncob, cornstraw, emptypalmfruit, olivenut, palmkernel, peanutshell, ricehusk, sorghumstalk, sugarcane, walnutshell, woodchips } from "../../imports";

// Define custom color variables (assuming lightGreen is defined in your main styles)
const primaryColor = "bg-green-600"; 
const primaryColorHover = "hover:bg-green-700";
const primaryColorText = "text-green-600";

const slideshowImages = [
  { src: bamboo, label: "Bamboo" },
  { src: sorghumstalk, label: "Sorghum Stalk" },
  { src: olivenut, label: "Olive Nut" },
  { src: cornstraw, label: "Corn Straw" },
  { src: emptypalmfruit, label: "Empty Palm Fruit Bunch" },
  { src: corncob, label: "Corn Cob" },
  { src: palmkernel, label: "Palm Kernel Shell" },
  { src: coconutshell, label: "Coconut Shell" },
  { src: woodchips, label: "Wood Chips" },
  { src: sugarcane, label: "Sugarcane Bagasse" },
  { src: coconuthusk, label: "Coconut Husk" },
  { src: peanutshell, label: "Peanut Shell" },
  { src: walnutshell, label: "Walnut Shell" },
  { src: ricehusk, label: "Rice Husk" },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  // Add the whole slideshow inside a contextual section
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-10">
        <h2 className={`text-3xl sm:text-4xl font-extrabold text-darkGreen`}>
          Feedstock
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
          Our technology efficiently converts a vast range of agro-waste biomass into bioenergy.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto relative shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Image - Use key prop for better transition control */}
        {/* We use `translate-x-full` classes to simulate slide movement. 
            Note: True, smooth sliding requires a more complex animation setup 
            or a dedicated library, but this improves the visual change on update.
        */}
        <img
          key={index} // Force re-render/transition on index change
          src={slideshowImages[index].src}
          alt={slideshowImages[index].label}
          className="w-full h-72 md:h-[500px] object-cover transition-opacity duration-700 ease-in-out animate-fadeIn" // Added fade-in
        />

        {/* Caption */}
        <div className={`absolute bottom-0 w-full ${primaryColor} text-white px-6 py-3 text-lg font-semibold bg-opacity-90`}>
          {slideshowImages[index].label}
        </div>

        {/* Navigation Buttons (Sleeker Arrows) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/60 transition duration-300 shadow-md focus:outline-none"
        >
          {/* Chevron Left Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/60 transition duration-300 shadow-md focus:outline-none"
        >
          {/* Chevron Right Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>

        {/* Dot Indicators (NEW) */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 rounded-full bg-black/30">
          {slideshowImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? primaryColor : 'bg-gray-300 hover:bg-gray-100'
              }`}
            ></button>
          ))}
        </div>

      </div>
      {/* Custom Tailwind keyframe for a simple fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Slideshow;