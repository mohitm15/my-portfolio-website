import React, { useEffect } from "react";
import Header from "./components/Header";
import imgurl1s from "../public/mssmall.png";
import imgurl1l from "../public/mslarge.png";
import imgurl2s from "../public/2small.jpeg";
import imgurl2l from "../public/2large.png";
import imgurl3s from "../public/3large.png";
import imgurl3l from "../public/3large.jpg";
import imgurl4s from "../public/4small.png";
import imgurl4l from "../public/4large.png";
import imgurl5s from "../public/5small.png";
import imgurl5l from "../public/5large.png";
import imgurl6s from "../public/6small.jpg";
import imgurl6l from "../public/6large.png";
import imgurl7s from "../public/7small.png";
import imgurl7l from "../public/7large.png";
import imgurl8s from "../public/8small.png";
import imgurl8l from "../public/8large.png";
import imgurl9s from "../public/9small.png";
import imgurl9l from "../public/9large.png";
import imgurl10s from "../public/10small.png";
import imgurl10l from "../public/10large.png";
import imgurl11s from "../public/11small.png";
import imgurl11l from "../public/11large.png";
import imgurl12s from "../public/12small.png";
import imgurl12l from "../public/12large.png";

import Image from "next/image";
import {
  SiBootstrap,
  SiFramer,
  SiExpo,
  SiJavascript,
  SiLichess,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaNodeJs, FaEye, FaHtml5, FaCss3, FaSpotify } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { motion } from "framer-motion";
import Tooltip from "./components/tooltip";

const Projects = () => {
  useEffect(() => {
    document.title = "Mohit Maroliya | Projects";
  }, []);

  return (
    <>
      <div className="min-h-full">
        <Header />
        <div className=" mx-auto shadow container">
          <div className="px-4 py-6 sm:px-0">
            <div className="mx-auto py-20 px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-6xl xl:text-7xl leading-snug md:leading-snug xl:leading-relaxed w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 p-2 text-center">
                Welcome To My Projects
              </h2>
            </div>
            <h1 className="text-4xl text-center md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Open Source Contributions
              </h1>
              <h1 className="text-4xl text-center md:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 mb-4 lg:mb-6 xl:mb-8 z-10">
                Personal Projects
              </h1>
            <div className="p-5 border-2 border-red-400/20 flex flex-col lg:flex-col items-center justify-center bg-[url('../public/stars2.jpg')]">
              {/* 1st row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1  mschatapp*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="card w-full h-full bg-transparent hover:bg-gradient-to-r hover: hover:to-[#b2eff7] transition hover:rounded-lg hover:drop-shadow-3xl hover:ease-in-out "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl1l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl1s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        ms-chatApp
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base  text-justify text-gray-700 ">
                        ms-chat-app is the macro version of ms-teams where you
                        can form groups and can message & share images with
                        different people. You can also customize the UI by
                        yourself.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2 ">
                        <span className="group">
                          <SiReact className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl" />
                          <Tooltip techname="ReactJS" />
                          </span>
                        <span className="group">
                          <SiMongodb className="hover:text-purple-900  hover:border-purple-900 hover:scale-150  hover:rounded-xl" />
                          <Tooltip techname="MongoDB" />
                          </span>
                        <span className="group">
                          <FaNodeJs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NodeJS" />
                          </span>
                        <span className="group">
                          <SiPostman className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Postman" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://ms-chat-app-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>

                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/ms-chat-app"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* card2  Chesswear*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl10l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl10s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        ChessWear
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        It is an e-commerce platform where you can find variety
                        of Chess-Inspired items. Not only the conventional
                        ChessBoards, but you can also try different Chess-based
                        Tshirts & Hoddies.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiNextdotjs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NextJS" />
                        </span>
                        <span className="group">
                          <SiMongodb className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="MongoDB" />
                        </span>
                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                        </span>
                        <span className="group">
                          <SiPostman className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Postman" />
                          </span>
                        <span className="group">
                          <SiJsonwebtokens className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="JsonWebToken" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="http://chesswear.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/chesswear"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 2nd row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1  myportfolio*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project"
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl8l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl8s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        My PortFolio Website
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        My-PortFolio-website is the website which showcases me.
                        It includes some information about my proffesional world
                        and also my major projects, blogs and contact details.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiNextdotjs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NextJS" />
                          </span>
                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                          </span>
                        <span className="group">
                          <SiFramer className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Framer Motion" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://my-portfolio-website-steel.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/my-portfolio-website"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* card2 weatherlytics*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl9l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl9s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        WeatherLytics
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        Weather-Lytics is a project which shows the current
                        weather & its forecast of any city in the world. It
                        includes Today's Weather highlights and weather forecast
                        for upcoming week.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiNextdotjs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NextJS" />
                          </span>
                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                          </span>
                        <span className="group">
                          <AiOutlineApi className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="OpenWeather API" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://weather-lytics.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/Weather-Lytics"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/*  3rd row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 nftmarketplace*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl11l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl11s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        NFT-Marketplace App
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        NFT MarketPlace App is a android application based on
                        React-Native and Expo where you can Buy, Store, Collect
                        NFTs and Earn crypto. Join 10 Million+ people using NFT
                        MarketPlace App.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <RiReactjsLine className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="React Native" />
                          </span>
                        <span className="group">
                          <SiExpo className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Expo" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg ">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://nft-market-place-showcase.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/NFT-MarketPlace-App"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* card2  todolist*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl12l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl12s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        To-DoList App
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        ToDoList-App is a android application based on
                        React-Native and Expo which keeps your Day-to-Day tasks.
                        You can save your task first and then check it later
                        when it gets completed.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <RiReactjsLine className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="React Native" />
                          </span>
                        <span className="group">
                          <SiExpo className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Expo" />
                          </span>

                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://github.com/mohitm15/ToDoList-App"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/ToDoList-App"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/*  4th row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 notebook*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl3s}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl3l}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        my-notebook
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        my-notebook is a web application that is used to keep
                        your notes securly. Each user can create, edit and
                        delete its own notes. It also authenticates the user
                        before performing any CRUD operation.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiReact className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="ReactJS" />
                          </span>
                        <span className="group">
                          <SiMongodb className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="MongoDB" />
                          </span>
                        <span className="group">
                          <FaNodeJs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NodeJS" />
                          </span>
                        <span className="group">
                          <SiPostman className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Postman" />
                          </span>
                        <span className="group">
                          <SiFramer className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Framer Motion" />
                          </span>
                        <span className="group">
                          <SiBootstrap className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Bootstrap5" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg ">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://my-notebook-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/my-notebook"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* card2  authlogin*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl4l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl4s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        authlogin-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        It's a web application that can be treated as a starter
                        template to learn the basics of login system. It
                        includes self-defined APIs for login, signUp and
                        forgot/change Password functionality.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiNextdotjs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NextJS" />
                          </span>
                        <span className="group">
                          <SiMongodb className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="MongoDB" />
                          </span>
                        <span className="group">
                          <SiPostman className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Postman" />
                          </span>
                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://authlogin-boilerplate-2.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/authlogin-boilerplate-2"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 5th row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 redux*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl5l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl5s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        redux-boilerplate
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        redux-boilerplate is a web application that can be
                        treated as a starter template to learn redux-store and
                        how to manage various states in any hierarchal order in
                        redux-store.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiReact className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="ReactJS" />
                          </span>
                        <span className="group">
                          <SiBootstrap className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Bootstrap5" />
                          </span>
                        <span className="group">
                          <SiRedux className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Redux" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://redux-starter-boilerplate.herokuapp.com/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/redux-boilerplate/tree/master/redux-boilerplate"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* card2 redify*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl6l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl6s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        Redify
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        Redify is the red version of Spotify. It is basically a
                        clone of Spotify providing different songs. You can
                        change, stop and play songs of your playlist easily and
                        between different singers.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <FaHtml5 className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="HTML5" />
                          </span>
                        <span className="group">
                          <FaCss3 className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="CSS3" />
                          </span>
                        <span className="group">
                          <SiJavascript className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Javascript" />
                          </span>
                        <span className="group">
                          <FaSpotify className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Spotify" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a href="http://redify.vercel.app/" target="_blank">
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/Redify"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 6th row */}
              <div className="p-2 sm:p-10 flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-16 justify-center">
                {/* card1 timetravel*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl7l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl7s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        Time Travel
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        Time-travel is an application from which anyone can
                        check the time of major Asian Cities. It uses world-time
                        API and country-flag API to display the time and flag
                        for each country respectively.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiReact className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="ReactJS" />
                          </span>
                        <span className="group">
                          <SiTailwindcss className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="TailwindCSS" />
                          </span>
                        <span className="group">
                          <AiOutlineApi className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="API" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="https://timetravel-mohit.netlify.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/TimeTravel"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* card2 chessmania*/}
                <motion.div
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  className="outer-card-project "
                >
                  <div className="card-project">
                    <div className="block sm:hidden">
                      <Image
                        height={350}
                        width={700}
                        className="object-cover rounded-t-lg "
                        src={imgurl2l}
                        alt=""
                      />
                    </div>
                    <div className="hidden sm:block">
                      <Image
                        width="500%"
                        height="1000%"
                        className="object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shrink-0"
                        src={imgurl2s}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between p-3 leading-normal ">
                      <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 ">
                        ChessMania
                      </h5>
                      <p className="mb-3 font-normal text-xsm sm:text-base text-justify text-gray-700 ">
                        ChessMania is a website where you can find evrything
                        about chess. You can see basic game rules, chess players
                        & their rankings, read articles and see any user profile
                        of LiChess.
                      </p>
                      <hr className="m-auto text-black bg-black" />
                      <h3 className="text-sm sm:text-base text-black font-semibold">
                        Technologies
                      </h3>
                      <div className="text-black flex flex-row space-x-3 py-2">
                        <span className="group">
                          <SiReact className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="ReactJS" />
                          </span>
                        <span className="group">
                          <SiMongodb className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="MongoDB" />
                          </span>
                        <span className="group">
                          <FaNodeJs className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="NodeJS" />
                          </span>
                        <span className="group">
                          <SiBootstrap className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Bootstrap5" />
                          </span>
                        <span className="group">
                          <SiLichess className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="LiChess" />
                          </span>
                        <span className="group">
                          <SiPostman className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="Postman" />
                          </span>
                        <span className="group">
                          <AiOutlineApi className="hover:text-purple-900  hover:border-purple-900 hover:scale-150 hover:rounded-xl " />
                          <Tooltip techname="API" />
                          </span>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full lg:w-4/5 mt-3 lg:mt-5 mx-auto  bg-slate-300  rounded-lg">
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Live"
                        >
                          <a
                            href="http://chess-mania.vercel.app/"
                            target="_blank"
                          >
                            <FaEye size={18} />
                          </a>
                        </button>
                        <button
                          className="bg-indigo-900 text-sm sm:text-base text-white p-1 px-2 rounded-md hover:bg-indigo-800  hover:cursor-pointer transition duration-50 ease-in-out"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="See Code"
                        >
                          <a
                            href="https://github.com/mohitm15/ChessMania"
                            target="_blank"
                          >
                            <HiCode size={18} />
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
