import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly does Jobbinex do?",
      answer:
        "Jobbinex is a job application assistant platform that helps busy professionals outsource their job search. We handle job discovery, personalized applications, and weekly submissions on your behalf.",
    },
    {
      question: "How does the application process work?",
      answer:
        "Once you sign up, you’re paired with a dedicated assistant. They review your career goals, craft tailored job applications, and submit them weekly with your approval.",
    },
    {
      question: "Can I approve applications before they’re submitted?",
      answer:
        "Yes. You have full control. Every job opportunity can be reviewed and approved before submission — ensuring only relevant positions are applied to.",
    },
    {
      question: "Are my details and data secure?",
      answer:
        "Absolutely. Jobbinex uses advanced encryption and secure storage to protect your personal information and application history.",
    },
    {
      question: "What kind of jobs can I apply for through Jobbinex?",
      answer:
        "You can apply for jobs across multiple sectors — from tech, marketing, and design to business, HR, and more. We match roles based on your preferences and skillset.",
    },
    {
      question: "Is Jobbinex available as a mobile app?",
      answer:
        "Currently, Jobbinex is accessible via our web platform, but a mobile app is in development to enhance accessibility and ease of use.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          We Know What You Think
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Here are some of the most common questions our users ask, and our clear answers to help you understand Jobbinex better.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-gray-900 focus:outline-none"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[var(--color-primary)]" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
