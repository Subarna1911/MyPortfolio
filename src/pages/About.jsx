import React, { useState } from "react";
import { aboutContents, expContents } from "../constant/data.js";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="about" className="max-w-screen w-full h-full">
      <div className="container mx-auto md:px-6 px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="space-y-5 border px-8 py-16 rounded-sm">
            <h2 className="md:text-5xl text-3xl font-bold text-center">
              Professional Journey
            </h2>

            <p className="md:text-lg text-sm text-center">
              I love to craft asthetically pleasing websites, which is equally
              great and beautiful.
            </p>

            {/* Tab Buttons */}
            <div className="flex gap-6 justify-center items-center">
              <button
                onClick={() => handleTab("About")}
                className={`w-full border hover:cursor-pointer px-2 py-4 max-w-60 inline-block text-lg rounded-sm transition-all duration-300
      ${
        activeTab === "About"
          ? "bg-black text-white scale-105 shadow-lg"
          : "hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg active:scale-95"
      }`}
              >
                About Me
              </button>

              <button
                onClick={() => handleTab("Exp")}
                className={`w-full hover:cursor-pointer border px-2 py-4 max-w-60 text-lg rounded-sm transition-all duration-300
      ${
        activeTab === "Exp"
          ? "bg-black text-white scale-105 shadow-lg"
          : "hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg active:scale-95"
      }`}
              >
                Experience
              </button>
            </div>

            {/* Tab Contents */}
            <div className="w-full md:px-4 px-3">
              {/* ABOUT CONTENT */}
              {activeTab === "About" &&
                aboutContents.map((item) => (
                  <div key={item.id}>
                    {item.intro.map((line, index) => (
                      <li key={index} className="text-lg mb-2 list-disc">
                        {line}
                      </li>
                    ))}

                    <h3 className="text-2xl font-semibold md:mt-8 mt-4">
                      {item.heading}
                    </h3>

                    {item.story.map((line, index) => (
                      <li key={index} className="text-lg mt-2 list-disc">
                        {line}
                      </li>
                    ))}
                  </div>
                ))}

              {/* EXPERIENCE CONTENT section  */}
              {activeTab === "Exp" &&
                expContents.map((item) => (
                  <div key={item.id}>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {item.company} — {item.time}
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      {item.expList.map((point, index) => (
                        <li className="text-lg" key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
