import React, { useState } from "react";
import {
  FaCheckCircle,
  FaDollarSign,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

const Plan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePlan = () => {
    setIsYearly(!isYearly);
  };

  const pricing = isYearly ? 99 : 9; // Price for yearly and monthly
  const features = [
    "Access to all features",
    "Priority customer support",
    "Unlimited content uploads",
    "Exclusive updates",
    "Customizable themes",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-black  py-12 px-4 sm:px-6 lg:px-8 font-basic">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-stone-700 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center dark:text-white text-gray-600">
          Choose Your Plan
        </h2>
        <div className="flex justify-center items-center space-x-6 text-white dark:text-black">
          <button
            onClick={togglePlan}
            className={`${
              !isYearly ? "text-yellow-500 font-semibold" : "text-gray-500"
            } transition-all ease-in-out duration-300`}
          >
            Monthly
          </button>
          <button
            onClick={togglePlan}
            className={`${
              isYearly ? "text-yellow-500 font-semibold" : "text-gray-500"
            } transition-all ease-in-out duration-300`}
          >
            Yearly
          </button>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-4xl font-bold dark:text-white/50 text-back">
            {isYearly ? `$${pricing} / Year` : `$${pricing} / Month`}
          </h3>
        </div>

        <div className="mt-6 text-left flex flex-col justify-center  items-center space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-yellow-600"
            >
              <FaCheckCircle className="text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all ease-in-out duration-300">
            {isYearly ? "Start Yearly Plan" : "Start Monthly Plan"}
          </button>
        </div>

        <div className="mt-4 text-center text-gray-600 text-sm">
          <p>
            <FaCalendarAlt className="inline mr-1" />
            <span className="underline cursor-pointer">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
