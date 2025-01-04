"use client";

import { useEffect, useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import AboutAvatarSVG from "@/app/about/avatarSVG";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftSlideControls = useAnimation();
  const rightSlideControls = useAnimation();
  const mainControls = useAnimation();

  useEffect(() => {
    leftSlideControls.start("visible");
    rightSlideControls.start("visible");
    mainControls.start("visible");
  }, [isInView]);

  const ACHIEVEMENTS = [
    "Awarded with the Above and Beyond Award (Individual)! 🎉 in my Current Organisation.",
    "Solved more than 400+ DSA problems",
    "Certified AWS Cloud Practitioner"
  ];

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          className="md:w-[60%] flex flex-col justify-center px-8"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={leftSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Prabhakar Kumar from Varanasi, India. I have done
            my graduation from HIT Haldia.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="md:w-[40%]"
          variants={{
            hidden: { opacity: 0, x: "80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={rightSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <AboutAvatarSVG className="w-[100%]" />
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
   
      </motion.div>
    </div>
  );
};

export default About;
