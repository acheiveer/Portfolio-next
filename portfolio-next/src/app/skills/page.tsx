"use client";

import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillSection from "./skillpage";

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as "reverse", // Ensure repeatType is treated as a literal
      } as const, // Make sure the transition object is treated as a constant
    },
  });
  
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
       <div>
       <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-10 text-center text-4xl">My Technical Skills</motion.h2>
    </div> 
      <div className="flex flex-col md:flex-row gap-4">
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
         className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
         className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
         className="p-4">
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
         className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
         className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

      </motion.div>
       </div>
      <motion.div
        className="my-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SkillSection />
      </motion.div>

    </div>
  );
};

export default About;
