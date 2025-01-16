import React from "react";
import {
  FaLink,
  FaPoll,
  FaChartLine,
  FaCogs,
  FaShareAlt,
  FaGoogle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLink className="text-blue-500 text-3xl" />,
    title: "Customizable Link Pages",
    description:
      "Create personalized link pages to share all your content from one place.",
  },
  {
    icon: <FaGoogle className="text-green-500 text-3xl" />,
    title: "Google Forms Integration",
    description:
      "Easily embed Google Forms to collect data and responses seamlessly.",
  },
  {
    icon: <FaPoll className="text-purple-500 text-3xl" />,
    title: "Polls and Surveys",
    description:
      "Add interactive polls and surveys to engage your audience directly.",
  },
  {
    icon: <FaChartLine className="text-orange-500 text-3xl" />,
    title: "Advanced Analytics",
    description:
      "Track clicks, views, and engagement with real-time analytics.",
  },
  {
    icon: <FaShareAlt className="text-pink-500 text-3xl" />,
    title: "Social Media Sharing",
    description:
      "Share your link pages across multiple social platforms with one click.",
  },
  {
    icon: <FaCogs className="text-yellow-500 text-3xl" />,
    title: "Customization & Branding",
    description:
      "Fully customize your page with themes, fonts, and custom domain support.",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 font-basic">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Powerful Features for Every User
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={animationVariants}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
