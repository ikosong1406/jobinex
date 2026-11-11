
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaClipboardList,
  FaPaperPlane,
  FaBriefcase,
} from "react-icons/fa";

export default function Steps() {
  const steps = [
    {
      icon: <FaUserCheck className="text-blue-500" size={28} />,
      title: "1. Create Your Account",
      description:
        "Sign up with Jobbinex and tell us about your career goals, experience, qualifications, and the type of roles you're looking for.",
    },
    {
      icon: <FaClipboardList className="text-green-500" size={28} />,
      title: "2. Set Your Job Preferences",
      description:
        "Choose your preferred job titles, industries, locations, salary expectations, and other requirements. We'll use these to guide your job search.",
    },
    {
      icon: <FaPaperPlane className="text-yellow-500" size={28} />,
      title: "3. We Apply on Your Behalf",
      description:
        "Our team searches for suitable opportunities and handles your job applications based on your preferences and profile.",
    },
    {
      icon: <FaBriefcase className="text-purple-500" size={28} />,
      title: "4. Get Ready for Opportunities",
      description:
        "Spend less time filling out applications and more time preparing for interviews and your next career move. Track your application progress with Jobbinex.",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          How Jobbinex Works for{" "}
          <span className="text-[var(--color-primary)]">
            You
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
        >
          Your job search doesn't have to feel like a full-time job.
          Let Jobbinex handle the applications while you focus on your
          career, work, and everyday life.
        </motion.p>
      </div>

      {/* Content layout */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left side - Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.B8SiYe2rUIYdtP2NAjkHewHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="UK professional using Jobbinex job application outsourcing service"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right side - Steps */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition border-l-4 border-[var(--color-primary)]"
            >
              <div className="flex-shrink-0">{step.icon}</div>

              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
