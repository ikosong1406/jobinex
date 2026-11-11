import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyWeAreBetter() {
  const [active, setActive] = useState(0);

  const reasons = [
    {
      title: "Focus on Your Career, Not Applications",
      content:
        "Applying for jobs can take hours every week. Jobbinex takes that responsibility off your shoulders by searching for relevant opportunities and managing applications on your behalf, giving you more time for work, family, and personal commitments.",
    },
    {
      title: "Applications Tailored to Your Goals",
      content:
        "Your career goals are unique. We use your qualifications, experience, preferred industries, salary expectations, and location preferences to identify relevant opportunities and personalise your applications.",
    },
    {
      title: "Save Time and Reduce the Stress",
      content:
        "Forget repeatedly filling out application forms and searching through job boards. Let Jobbinex manage the application process while you concentrate on your current job and prepare for new opportunities.",
    },
    {
      title: "Stay Updated on Your Progress",
      content:
        "Keep track of your job search with application status updates and progress reports. Know which opportunities you've applied for and stay informed as your applications progress.",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose{" "}
            <span className="text-[var(--color-primary)]">Jobbinex?</span>
          </h2>

          <p className="text-lg text-gray-600">
            Your job search deserves more than endless applications. Jobbinex
            combines smart technology and professional support to help UK
            workers find opportunities while we handle the application process
            on their behalf.
          </p>

          {/* Reasons Accordion */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  aria-expanded={active === index}
                  className="flex items-center justify-between w-full px-5 py-4 text-left font-semibold hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-[var(--color-primary)] flex-shrink-0" />
                    <span>{reason.title}</span>
                  </div>

                  <span className="text-xl text-gray-500">
                    {active === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 pl-12 text-sm leading-relaxed text-gray-600">
                        {reason.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-3">
            <a
              href="https://app.jobbinex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 transition"
            >
              Let Us Handle Your Applications →
            </a>
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
            alt="Professional using Jobbinex job application management service"
            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
