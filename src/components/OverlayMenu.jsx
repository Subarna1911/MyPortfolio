import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const OverlayMenu = ({ isOpen, onClose }) => {

  const menuItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="w-16 h-16 absolute top-6 right-6 text-black text-3xl"
          >
            <FiX />
          </button>

          <ul className="space-y-6 flex flex-col items-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <a
                  href={`#${item}`}
                  onClick={onClose}
                  className="text-4xl text-black font-semibold hover:text-pink-600"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;
