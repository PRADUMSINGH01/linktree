"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaReddit, FaPoll } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const LinkFeatureComponent = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-around items-center w-full h-full dark:bg-black  ">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center h-full text-white ">
        <div className=" text-2xl md:text-4xl font-stander text-center bg-red-500/70 px-6 -m-1  border ml-4 rounded-b-full  px-10">
          <h1>Monitize your All Media Plateforms</h1>
        </div>

        <div className="text-xl md:text-4xl font-stander text-center bg-yellow-700 px-8 -m-3 hover:m-4 ml-10  border rounded-b-full px-10">
          <h1>Monitize your All Media Plateforms</h1>
        </div>
        <div className="text-lg md:text-3xl font-stander text-center bg-pink-500 px-10 mt-2 ml-20 shadow-xl  border rounded-b-full px-10">
          <h1>Monitize your All Media Plateforms</h1>
        </div>
      </div>
      <motion.div
        className="p-6 rounded-lg bg-white shadow-md max-w-md mx-auto m-10 font-basic text-2xl dark:bg-stone-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Organize Your Links
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Add and manage links to your favorite platforms with ease.
        </p>

        <div className="space-y-2">
          <motion.div
            className="flex items-center gap-2 p-2 border rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <FaInstagram className="text-pink-500" />
            <span className="text-sm">Instagram</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 p-2 border rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <FaYoutube className="text-red-500" />
            <span className="text-sm">YouTube</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 p-2 border rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <FaReddit className="text-orange-500" />
            <span className="text-sm">Reddit</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 p-2 border rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <FaPoll className="text-blue-500" />
            <span className="text-sm">Create Polls</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 w-full p-2 border rounded-lg bg-pink-500 text-white"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-lg text-center w-full flex items-center justify-center ">
              Many More
            </span>
            <AiOutlineArrowRight />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LinkFeatureComponent;
