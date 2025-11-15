import React from "react";
import { aboutimg, profile } from "../../imports";
import { Link } from "react-router";

const Intro = () => {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-16 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro Section */}
        {/*
          Crucial Change: Added lg:order-2 to Text Section
          and lg:order-1 to Image Section to swap them on desktop.
          On mobile (default), the Text Section comes first.
        */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          {/* Text Section (Now defaults to first on mobile) */}
          <div className="flex-1 lg:order-2"> {/* Added lg:order-2 */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-darkGreen mb-6 leading-tight">
              About <span className="text-lightGreen">AltWaste</span>
            </h2>
            {/* ... (rest of your text section content) ... */}

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-darkGreen">
                Alternative Waste Energy Systems Limited (AltWaste)
              </span>{" "}
              is a proudly Nigerian bioenergy company transforming agricultural
              waste into clean, sustainable biofuels and bioenergy. We operate
              advanced biomass pyro-gasification plants that process residues
              such as sawdust, rice husk, corn cobs, and palm kernel shells —
              producing <span className="font-bold">renewable electricity, charcoal,</span> and <span className="font-bold">bio-oil.</span>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our innovative solutions stem from{" "}
              <span className="font-semibold text-darkGreen">
                nine years of research and development
              </span>
              , addressing two critical challenges:{" "}
              <span className="text-lightGreen font-semibold">
                waste management and energy scarcity.
              </span>{" "}
              We convert organic waste into productive energy resources that
              benefit industries, communities, and the environment.
            </p>

            <div className="bg-gradient-to-r from-[#f4fff6] to-[#e6fff3] rounded-2xl p-8 shadow-lg border border-lightGreen/20">
              <h3 className="text-2xl font-bold text-darkGreen mb-4">
                Core Services
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li>Biomass Pyrolysis & Gasification Power Systems</li>
                <li>Waste-to-Energy Plant Development</li>
                <li>Charcoal Briquettes & Bio-Oil Production</li>
                <li>Renewable Energy Consulting</li>
                <li>Agro-Waste Collection & Management</li>
              </ul>
            </div>
          </div>


          {/* Image Section (Now defaults to second on mobile) */}
          <div className="flex-1 flex justify-center lg:order-1"> {/* Added lg:order-1 */}
            {/*
              Crucial Change: Changed max-w-sm to max-w-xs on mobile
              to prevent the profile image from dominating the screen.
              Added mb-10 for separation when stacked.
            */}
            <div className="flex flex-col items-center text-center max-w-xs sm:max-w-sm mb-10 lg:mb-0">
              {/* Profile Image */}
              <img
                src={profile}
                alt="AltWaste about"
                className="w-full rounded-xl object-cover shadow-lg"
                /* Added h-64 or h-80 (fixed height) for mobile 
                  if h-1/2 was problematic. I'll remove h-1/2 
                  and use aspect-square/aspect-video with a max-h 
                  for better responsiveness.
                */
              />

              {/* Name & Titles */}
              <div className="mt-4">
                <h3 className="text-[#008060] font-semibold text-lg">
                  Dr. Nnanna-jnr Okoro{" "}
                  <span className="italic font-normal text-gray-600">PhD. Chem Eng. (Wits), COREN, MNSE, SACI</span>
                </h3>

                <p className="text-gray-600 mt-1 text-sm font-bold">
                  CEO/Head of Technology – Bioenergy/Biofuels 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-darkGreen mb-3">
            Our Mission & Vision
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Driving sustainability through innovative bioenergy solutions.
          </p>
        </div>

        {/* No changes needed here. grid-cols-1 on mobile and 
          lg:grid-cols-2 on desktop is perfect.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-[#f4fff6] rounded-3xl shadow-md border border-lightGreen/30 p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-darkGreen mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver innovative and sustainable bioenergy solutions that
              convert organic waste into clean, affordable energy for a greener
              Africa.
            </p>
          </div>

          <div className="bg-[#e6fff3] rounded-3xl shadow-md border border-[#00ffc3]/30 p-10 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-darkGreen mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be Africa’s leading bioenergy company, advancing renewable
              technologies that promote energy security, environmental
              sustainability, and circular economy growth.
            </p>
          </div>
        </div>

        <Link to={"/about"}>
          <button className="mx-auto flex items-center mt-10 cursor-pointer bg-lightGreen text- font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00e6ad] transition-all">
            Read more
          </button>
        </Link>

        {/* Tagline with subtle animation */}
        <div className="mt-24 text-center">
          <p className="text-3xl sm:text-4xl font-semibold italic">
            “Waste Redefined. Energy Delivered.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;