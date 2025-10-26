import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const stats = [
    { number: 75, label: "Trusted Partners & Clients" },
    { number: 100, label: "Successful Projects delivered" },
    { number: 25, label: "Skilled Workers & Experts" },
  ];

  return (
    <section className="bg-lightGreen py-2 flex justify-center px-4">
      <div className=" rounded-2xl px-10 py-8 max-w-7xl w-full text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-12 gap-5">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <div
                key={index}
                ref={ref}
                className="transform transition duration-500 hover:scale-105 px-5 "
              >
                <h2 className="stats-font lg:text-5xl text-4xl font- text-white">
                  {inView ? <CountUp className="lg:text-7xl text-5xl" end={stat.number} duration={2.5} /> : 0}+
                </h2>
                <p className="mt-3 text-lg text-white tracking-wide font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;