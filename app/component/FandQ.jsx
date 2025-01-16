import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you are not satisfied with the product, contact us for a full refund.",
    },
    {
      question: "How do I upgrade my plan?",
      answer:
        "You can upgrade your plan from your account settings page. Choose a new plan, and the changes will take effect immediately.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize data security. Our platform uses advanced encryption and secure servers to keep your information safe.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account dashboard.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we offer 24/7 customer support through chat, email, and phone.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-basic">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
