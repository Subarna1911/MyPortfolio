import React from "react";
import { techLogos } from "../constant/data.js";

const Skills = () => {
  return (
    <div id="skills" className="max-w-screen w-full h-full md:spacing-md spacing-sm">
      <div className="container mx-auto md:px-6 px-4 space-y-5">
        <h2 className="md:text-5xl text-3xl font-bold text-center">Skills</h2>
        <p className="text-center md:text-lg text-sm">Here is what I bring to the table (other than snacks)👩🏻‍💻</p>

        {/* Slider Wrapper */}
        <div className="relative w-full overflow-hidden h-28 flex items-center">

          <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-20"></div>

          <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-20"></div>

          <div className="flex animate-scroll">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="tech logo"
                className="h-16 w-24 mx-4 object-contain hover:cursor-pointer hover:animate-pulse"
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
