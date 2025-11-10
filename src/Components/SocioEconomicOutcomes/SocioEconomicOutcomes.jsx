import React from "react";
import {
  Picture45,
  Picture46,
  Picture44,
  Picture48,
  Picture47,
} from "../../imports";

const SocioEconomicOutcomes = () => {
  const points = [
    "Affordable and sustainable renewable energy and domestic cooking solutions.",
    "Robust and effective industrial waste management and environmental protection strategies.",
    "Employment opportunities for both skilled and unskilled workers across the supply chain.",
    "New and untapped markets for small and medium-sized enterprises (SMEs) in feedstock sourcing, plant operations, and product sales.",
    "Bioenergy training opportunities for Nigerian scientists, engineers, and technicians.",
    "High return on investment potential.",
  ];

  const images = [Picture45, Picture46, Picture44, Picture48, Picture47];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-darkGreen tracking-wide">
            Socio-Economic Outcomes
          </h2>
          <div className="w-20 h-1 bg-[#4b9b3f] mx-auto mt-3"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left side - bullet points */}
          <ul className="space-y-4 text-gray-800 text-lg leading-relaxed">
            {points.map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#4b9b3f] font-bold text-xl mr-2">✓</span>
                {text}
              </li>
            ))}
          </ul>

          {/* Right side - images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images[0]}
              alt="Outcome"
              className="col-span-2 rounded-xl object-cover w-full h-60"
            />
            <img
              src={images[1]}
              alt="Outcome"
              className="rounded-xl object-cover w-full h-44"
            />
            <img
              src={images[2]}
              alt="Outcome"
              className="rounded-xl object-cover w-full h-44"
            />
            <img
              src={images[3]}
              alt="Outcome"
              className="col-span-2 rounded-xl object-cover w-full h-48"
            />
          </div>
        </div>

        {/* Footer Line */}
        <div className="text-center mt-10">
          <p className="text-sm italic text-[#2f5130] font-medium">
            Waste Redefined. Energy Delivered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocioEconomicOutcomes;
