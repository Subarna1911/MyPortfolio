import React, { useState, useEffect } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import OverlayMenu from "../components/OverlayMenu";
import resume from '../assets/FrontEndResumeSubarna.pdf'

const Navbar = () => {
  const [menuOpen, setOpenMenu]       = useState(false);
  const [isVisible, setIsVisible]     = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If scrolling down → hide navbar
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setIsVisible(false);
      }
      // If scrolling up → show navbar
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`max-w-screen w-full border-b border-b-white  backdrop-blur-md 
          fixed top-0 left-0 z-50 transition-transform duration-300 py-3
          ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4 md:px-6 text-white">
          <div className="flex items-center justify-between">
            {/* Left */}
            <button onClick={() => setOpenMenu(true)} aria-label="open-menu">
              <Menu className="hover:text-pink-600 cursor-pointer font-bold" />
            </button>

            {/* Center */}
            <div className="text-lg font-bold cursor-pointer">Subarna</div>

            {/* Right */}
            <a
              href={resume}
              download="Subarna-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                aria-label="resume"
                className="md:w-28 w-25 text-sm md:text-lg border rounded-full px-3  py-1 text-center 
    flex gap-2 items-center cursor-pointer hover:border-pink-600 
    hover:text-[#ff008c] duration-300"
              >
                Resume <ArrowUpRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setOpenMenu(false)} />
    </div>
  );
};

export default Navbar;
