import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../constant/data";
import {projects} from '../constant/data.js';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination, Autoplay} from "swiper/modules";
import { MoveRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";


const Projects = () => {
  return (
    <div id="projects" className="max-w-screen w-full">
      <div className="container mx-auto md:px-6 px-4">
        <div className="space-y-5 px-8 rounded-sm">
          <h2 className="md:text-6xl text-4xl font-bold text-center">
            Projects
          </h2>
          <p className="md:text-lg text-sm text-center">
            I crafted these projects with passion and love
          </p>

          {/* Swiper Container */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1},
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full py-10 pb-16"
            >
              {projectsData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a href={data.projectLink} className="hover:cursor-pointer">
                    <ProjectCard data={data} />
                  </a>
                </SwiperSlide>  
              ))}
            </Swiper>
            
            {/* Navigation Buttons */}
            <button className="swiper-button-prev custom-nav absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-100 transition-all w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-6 h-6">
                <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z" fill="currentColor"></path>
              </svg>
            </button>
            <button className="swiper-button-next custom-nav absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-100 transition-all w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" className="w-6 h-6">
                <path d="M14.441,23.938 L20.382,18.016 L14.4779,12.056 C13.895,11.467 13.8979,10.518 14.4869,9.935 C14.7789,9.645 15.1609,9.5000013 15.5429,9.5000013 C15.9289,9.5000013 16.3149,9.648 16.6079,9.944 L23.5649,16.966 C24.1469,17.554 24.1449,18.5000013 23.5589,19.084 L16.5589,26.062 C15.9739,26.647 15.0219,26.646 14.4379,26.059 C13.8529,25.472 13.8549,24.522 14.4409,23.938 L14.441,23.938 Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <a href={projects}>
              <button className="border my-6 rounded-full flex px-6 gap-4 items-center h-16 hover:cursor-pointer transition-all duration-300 hover:text-pink-600 hover:border-pink-600  hover:scale-105 hover:shadow-lg active:scale-95 group">
                Check out My Work <span className="transition-transform duration-300 group-hover:translate-x-1"><MoveRight/></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;