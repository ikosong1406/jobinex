import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyWeAreBetter() {
  const [active, setActive] = useState<number | null>(null);

  const reasons = [
    {
      title: "Personalized Assistance",
      content:
        "Every Jobinex assistant learns your preferences and career goals, ensuring every application matches your professional profile perfectly.",
    },
    {
      title: "Time-Saving Automation",
      content:
        "We handle job searches, application submissions, and follow-ups — saving you hours each week so you can focus on work or personal growth.",
    },
    {
      title: "Real Human Oversight",
      content:
        "Unlike generic automation tools, Jobinex pairs you with real professionals who monitor and refine your applications for the best results.",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Why We are Better for  <span className="text-[var(--color-primary)]">Professionals</span>
          </h2>
          <p className="text-lg text-gray-600">
            We go beyond traditional job tools, combining automation, human
            expertise, and personalization to give you a smarter way to land
            opportunities that truly fit.
          </p>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="flex items-center justify-between w-full px-5 py-3 text-left font-medium hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-[var(--color-primary)]" />
                    <span>{reason.title}</span>
                  </div>
                  <span className="text-xl">
                    {active === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-3 text-gray-600"
                    >
                      {reason.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.GRkRTfe-tfa3Wno3XYKz9gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Jobbinex Professional Assistance"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
