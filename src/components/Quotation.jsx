import React from "react";
import { motion } from "framer-motion";

const Quotation = () => {
  const sentence = "Real  websites, real impact.";

  // Split sentence into words
  const words = sentence.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="max-w-screen w-full spacing py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-7xl tracking-tight md:tracking-widest md:text-9xl font-bold flex flex-wrap"
          style={{ transform: "translate(50px,100px)" }}
        >
         {words.map((word, i) => {

  const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  return (
    <motion.span
      key={i}
      variants={wordAnimation}
      className={`mr-3 inline-block ${cleanWord === "websites" ? "text-pink-600" : ""}`}
    >
      {word}
    </motion.span>
  );
})}

        </motion.h2>
      </div>
    </div>
  );
};

export default Quotation;
