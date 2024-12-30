import { DiRedis } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiKubernetes, SiGit, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { motion} from "framer-motion";


const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const, // No need for `as "reverse"`
      },
    },
  });


 const Skillemojis = () =>{
    return(
        <div>
            <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <SiC className="text-7xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <SiCplusplus className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <SiJavascript className="text-7xl text-yellow-300" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <SiTypescript className="text-7xl text-blue-600" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <FaHtml5 className="text-7xl text-yellow-600" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <FaCss3Alt className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>

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
            variants={iconVariants(2.5)}
            className="p-4">
            <SiExpress className="text-7xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <SiTailwindcss className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <SiPostgresql className="text-7xl text-sky-700" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <SiMongodb className="text-7xl text-cyan-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <DiRedis className="text-7xl text-red-700" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <FaDocker className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <SiKubernetes className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
            <FaAws className="text-7xl " />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4">
            <SiGit className="text-7xl text-red-500" />
          </motion.div>




        </motion.div>
        </div>
    )
}

export default Skillemojis;