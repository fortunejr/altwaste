import React from "react";
import {
  FaLeaf,
  FaIndustry,
  FaRecycle,
  FaFire,
  FaLightbulb,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      video: "https://videocdn.cdnpk.net/videos/9c6139aa-f6cd-4836-bfe1-5a8f93b07c29/horizontal/previews/clear/small.mp4?token=exp=1761489173~hmac=705a484f7d14973433808b66caabd3f7681d2a717477ee318bb72fecbb47103f",
      title: "Biomass Pyrolysis & Gasification Power Systems",
      description:
      "We design and deploy advanced pyro-gasification plants that convert agro-waste into hydrogen-rich syngas, bio-oil, and charcoal for power generation and industrial use.",
    },
    {
      video: "https://videocdn.cdnpk.net/videos/aecfd4e5-5e0f-46d0-bdda-c4d42a4c10f0/horizontal/previews/clear/large.mp4?token=exp=1761489375~hmac=af855e15000614b76db226105ba9f7d0495df385d6df53a44449e0468fa193ea",
      title: "Waste-to-Energy Plant Development",
      description:
      "We build turnkey waste-to-energy plants that transform organic residues into renewable electricity, helping communities and industries achieve energy security.",
    },
    {
      video: "https://videocdn.cdnpk.net/videos/11a7f4de-1083-4518-b4c6-7437a6348210/horizontal/previews/watermarked/large.mp4",
      title: "Charcoal Briquettes & Bio-Oil Production",
      description:
      "Our pyro-gasification process yields eco-friendly charcoal briquettes and bio-oil — sustainable alternatives to traditional fuels that reduce deforestation and emissions.",
    },
    {
      video: "https://videocdn.cdnpk.net/videos/a6ef61f6-60a8-4bbd-b4c7-c6fe477dc102/horizontal/previews/clear/large.mp4?token=exp=1761490511~hmac=71836f0bee9ee98903e855e5a5dd3c99e564521b6f60e6efa2d63418ea070cd5",
      title: "Renewable Energy Consulting",
      description:
      "We provide expert consulting for renewable energy integration, sustainable waste management strategies, and carbon credit optimization for industrial clients.",
    },
    {
      video: "https://videocdn.cdnpk.net/videos/86d4f168-5022-4f79-8b81-ef919d9fb9d1/horizontal/previews/clear/large.mp4?token=exp=1761490601~hmac=6a3bd868c76a417a03fe5df8b5c6726d6d632d705d9c99a16cc218951a348914",
      title: "Agro-Waste Collection & Management",
      description:
        "We develop structured systems for sourcing, transporting, and processing agricultural waste, ensuring a reliable supply chain for bioenergy production.",
    },
  ];

  return (
    <section className="w-full bg-darkGreen py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-6">
          Our Solutions
        </h2>
        <p className="text-lightGreen max-w-2xl mx-auto text-lg">
          Transforming agricultural waste into clean energy through innovative
          technologies and sustainable systems.
        </p>

        {/* Solutions Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-3xl shadow-md border border-[#00ffc3]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full mb-2 rounded-xl"
              ></video>
              <h3 className="text-xl font-semibold text-darkGreen mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
