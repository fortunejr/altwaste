import React, { useState, useEffect } from "react";
import { hero, herobg } from "../../imports"; // adjust path if needed

const HeroSection = () => {
  const phrases = ["Waste Redefined", "Energy Delivered"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3500); // Change every 3.5 seconds
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative w-full bg-linear-to-r from-[#003f3d] to-[#00796b] text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={herobg}
        alt="AltWaste BioEnergy Recovery Project"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Overlay Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Animated Heading at the Top */}
          <div className="h-16 overflow-hidden relative">
            {phrases.map((phrase, i) => (
              <h2
                key={i}
                className={`absolute w-full text-2xl sm:text-5xl lg:text-3xl font-extrabold transition-all duration-1000 ease-in-out ${
                  i === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {phrase === "Waste Redefined" ? (
                  <span className="text-[#9cffad]">{phrase}</span>
                ) : (
                  <span className="text-[#00ffc3]">{phrase}</span>
                )}
              </h2>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font- leading-tighter">
            The <span className="">Bio</span>
            <span className="text-[#00ffc3]">Energy</span> <br />
            Recovery Project
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg max-w-2xl text-gray-200">
            Empowering sustainability through innovative energy recovery
            systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-lightGreen text- font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00e6ad] transition-all">
              Learn More
            </button>
            <button className="border border-[#00ffc3] px-6 py-3 rounded-full hover:bg-[#00ffc3]/20 transition-all">
              Our Projects
            </button>
          </div>
        </div>

        {/* Right Image Section with Yellow Rounded Background (Desktop Only) */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="hidden lg:block absolute -z-10 w-[450px] h-[450px] bg-yellow-400 rounded-full blur-[2px]" />
          <img
            src={hero}
            alt="BioEnergy Facility"
            className="w-full h-auto max-w-[650px] drop-shadow-2xl rounded-2xl z-10"
          />
        </div>
      </div>

      {/* Bottom Accent */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-[#00ffc3]" /> */}
    </section>
  );
};

export default HeroSection;
