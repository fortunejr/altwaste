import React from "react";
import { FaLeaf, FaIndustry, FaRecycle, FaFire, FaLightbulb } from "react-icons/fa";

const Solutions = () => {
  const solutions = [
    {
      title: "Biomass Pyrolysis & Gasification Power Systems",
      description:
        "We design and deploy advanced pyro-gasification plants that convert agro-waste into hydrogen-rich syngas, bio-oil, and charcoal for power generation and industrial use.",
      icon: <FaFire className="text-[#00ffc3] text-4xl" />,
    },
    {
      title: "Waste-to-Energy Plant Development",
      description:
        "We build turnkey waste-to-energy plants that transform organic residues into renewable electricity, helping communities and industries achieve energy security.",
      icon: <FaIndustry className="text-[#00ffc3] text-4xl" />,
    },
    {
      title: "Charcoal Briquettes & Bio-Oil Production",
      description:
        "Our pyro-gasification process yields eco-friendly charcoal briquettes and bio-oil — sustainable alternatives to traditional fuels that reduce deforestation and emissions.",
      icon: <FaLeaf className="text-[#00ffc3] text-4xl" />,
    },
    {
      title: "Renewable Energy Consulting",
      description:
        "We provide expert consulting for renewable energy integration, sustainable waste management strategies, and carbon credit optimization for industrial clients.",
      icon: <FaLightbulb className="text-[#00ffc3] text-4xl" />,
    },
    {
      title: "Agro-Waste Collection & Management",
      description:
        "We develop structured systems for sourcing, transporting, and processing agricultural waste, ensuring a reliable supply chain for bioenergy production.",
      icon: <FaRecycle className="text-[#00ffc3] text-4xl" />,
    },
  ];

  return (
    <section className="w-full bg-[#f8fffb] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-darkGreen mb-6">
          Our Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Transforming agricultural waste into clean energy through innovative technologies and sustainable systems.
        </p>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md border border-[#00ffc3]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold text-darkGreen mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
