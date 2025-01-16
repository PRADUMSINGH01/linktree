"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaReddit, FaPoll } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const LinkFeatureComponent = () => {
  return (
    <motion.div
      className="p-6 rounded-lg bg-white shadow-md max-w-md mx-auto m-10 font-basic text-2xl"
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
  );
};

export default LinkFeatureComponent;
