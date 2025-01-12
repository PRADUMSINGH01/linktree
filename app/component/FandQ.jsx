export default function Faq() {
  const faqs = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for building server-rendered applications.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "How do I enable dark mode?",
      answer: "Use the dark mode toggle button at the top of the page.",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 bg-gradient-to-br from-purple-500 to-blue-600 ">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">FAQ</h1>
      </header>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow bg-white/10 dark:bg-gray-800"
          >
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="mt-2 text-white/50 dark:text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
