import React, {useEffect} from "react";
import Header from "./components/Header";
import Image from "next/image";
import imgurl from "../public/dog.jpg";
import imgurl2 from "../public/satelite.png";
import {
  SiBootstrap,
  SiExpress,
  SiExpo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiMaterialui,
  SiCplusplus,
  SiPython,
  SiMysql,
  SiGit,
  SiPostman,
  SiDocker,
  SiYoutubestudio,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiAdobephotoshop,
  SiPhotopea,
  SiLinux,
  SiOverleaf,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import {RiReactjsLine} from "react-icons/ri"
import { motion } from "framer-motion";

const About = () => {

  useEffect(() => {
    document.title = "Mohit Maroliya | About"
  }, [])
  

  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className="max-w-7xl mx-auto  shadow">
          <div className="px-4 py-6 sm:px-0 flex flex-col lg:flex-row">
            <div className="max-w-4xl mx-auto sm:py-10  sm:px-6 lg:px-8 ">
              <Image
                src={imgurl}
                width="325"
                height="405"
                className="opacity-80"
              />
            </div>
            <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
              <h2 className="text-4xl md:text-6xl xl:text-8xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2">
                My Name is <br /> Mohit Maroliya
              </h2>
            </div>
          </div>
          <div className="px-5 container text-center mx-auto">
            <p className="text-sm sm:text-lg text-gray-100/80 font-light tracking-wider leading-normal pb-4 lg:pb-8 hover:text-white hover:drop-shadow-2xl selection:bg-blue-200 selection:text-blue-900">
              My Name is <strong>Mohit Maroliya</strong>. I'm a Full Stack
              Developer. I completed my education from Indian Institute of
              Technology Jodhpur (2017-21) in CSE. Currently, I'm workings as a
              Software Development Engineer in a Software Company.
            </p>
          </div>
          <motion.div animate={{y:[0,-8,0,8,0]}} transition={{repeat: Infinity, repeatType: "loop", duration:5}} className=" w-40 xl:w-60 h-30 mx-auto mb-5 hover:drop-shadow-2xl">
            <Image src={imgurl2} layout="responsive" alt="satelite" />
          </motion.div>
          <div className="max-w-7xl mx-auto md:py-5 lg:py-20 px-4 sm:px-2 lg:px-2">
            <h2 className="text-4xl md:text-6xl xl:text-6xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent text-center bg-clip-text font-extrabold bg-gradient-to-tl from-white to-sky-500/10 p-2">
              My Skills
            </h2>
          </div>
          {/* web development */}
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:true}} transition={{delay:0.3}}  className="text-center m-2">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Web Development
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 px-3 sm:px-4 lg:px-10 lg:w-4/5 mx-auto ">
              <div className=" mx-auto flex-row justify-center items-center">
                <SiReact className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  ReactJS
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <FaNodeJs className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  NodeJS
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiExpress className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  ExpressJS
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiNextdotjs className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  NextJS
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiTailwindcss className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Tailwind
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiExpo className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Expo
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <FaHtml5 className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  HTML-5
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <FaCss3 className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  CSS-3
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiJavascript className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  JavaScript
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiBootstrap className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  BootStrap5
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiFramer className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Framer Motion
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <RiReactjsLine className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  ReactNative
                </span>
              </div>
            </div>
          </motion.div>

          {/*programming */}
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:true}} transition={{delay:0.3}} className="text-center m-2">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Programming
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 px-3 sm:px-4 lg:px-10 lg:w-4/5 mx-auto ">
              <div className=" mx-auto flex-row justify-center items-center">
                {/* empty  */}
              </div>
              <div className=" mx-auto flex-row justify-center items-center">
                <SiCplusplus className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  C++
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiPython className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Python3
                </span>
              </div>
            </div>
          </motion.div>

          {/* databases */}
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:true}} transition={{delay:0.3}}className="text-center m-2">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Databases
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 px-3 sm:px-4 lg:px-10 lg:w-4/5 mx-auto ">
              <div className=" mx-auto flex-row justify-center items-center">
                {/* empty  */}
              </div>
              <div className=" mx-auto flex-row justify-center items-center">
                <SiMysql className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MySQL
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiMongodb className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  MongoDB
                </span>
              </div>
            </div>
          </motion.div>

          {/* utilities */}
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:true}} transition={{delay:0.3}} className="text-center m-2">
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Utilities
              </h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 px-3 sm:px-4 lg:px-10 lg:w-4/5 mx-auto ">
              <div className=" mx-auto flex-row justify-center items-center">
                <SiGit className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Git/Github
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiPostman className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  PostMan
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiDocker className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Docker
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiYoutubestudio className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  YTStudio
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiHeroku className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Heroku
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiNetlify className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Netlify
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiVercel className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Vercel
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiAdobephotoshop className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Adobe PS
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiPhotopea className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  PhotoPea
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiLinux className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Linux
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiOverleaf className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  Overleaf
                </span>
              </div>

              <div className=" mx-auto flex-row justify-center items-center">
                <SiVisualstudiocode className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 hover:drop-shadow-3xl opacity-90 hover:opacity-100" />
                <span className="text-center lg:text-lg sm:ml-1 md:ml-2 lg:ml-4 xl:ml-7 ">
                  VSCode
                </span>
              </div>
            </div>
          </motion.div>
          
        </div>

        <div className="w-1/5 bg-gray-100 h-[2px] mx-auto my-10 hover:drop-shadow-2xl"></div>
      </div>
    </>
  );
};

export default About;
