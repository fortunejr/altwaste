import React, { useState, useEffect } from "react";
import { aboutimg, herobg, pyrogas } from "../../imports";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  const phrases = ["Energy Delivered", "Waste Redefined"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 relative w-full bg-gradient-to-r from-[#004d40] to-[#007c4f] text-white overflow-hidden">
      {/* Background Image Blur Overlay */}
      <img
        src={herobg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Green Curved Background Shape */}
      <div className="hidden lg:block absolute w-[720px] h-[320px] bg-[#58d24b] rounded-l-full right-0 translate-x-20 top-60 z-0" />

      {/* Arrows Above Right Image */}
      <div
        className="hidden slide-in-right lg:block scale-x-[-1] absolute top-40 right-[430px] w-[300px] h-[100px] z-20"
        style={{
          WebkitMaskImage: "url('/chevrons.svg')",
          maskImage: "url('/chevrons.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          backgroundColor: "#58d24b",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-14 z-10">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Animated Heading */}
          <div className="relative h-12 overflow-hidden mb-3">
            {phrases.map((text, i) => (
              <h2
                key={i}
                className={`absolute w-full text-xl sm:text-3xl lg:text-2xl font-bold transition-all duration-700 ${
                  index === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {text}
              </h2>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="slide-in-left text-4xl sm:text-6xl lg:text-6xl leading-tighter">
            The <span className="text-[#00ffbf]">BioEnergy</span>
            <br />
            Recovery Programme
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Empowering sustainability through innovative energy recovery
            systems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="https://wa.me/2349166897626">
              <button className="flex items-center gap-2 bg-[#00c853] px-6 py-3 rounded-full font-semibold hover:bg-[#00a844] transition-all">
                <BsWhatsapp />
                Message Us
              </button>
            </a>

            <a href="mailto:info@altwasteenergy.com">
              <button className="flex items-center gap-2 border border-[#00ffbf] px-6 py-3 rounded-full hover:bg-[#00ffbf] hover:bg-opacity-20 transition-all">
                <MdEmail />
                Email Us
              </button>
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="fade-in flex-1 relative flex items-center justify-center">
          <img
            src={aboutimg}
            alt="facility"
            className="relative w-2xl max-w-[950px] h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
