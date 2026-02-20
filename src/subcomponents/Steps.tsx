import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaClipboardList,
  FaPaperPlane,
  FaBriefcase,
  FaDollarSign,
} from "react-icons/fa";

export default function Steps() {
  const steps = [
    {
      icon: <FaUserCheck className="text-blue-500" size={28} />,
      title: "1. Choose Your Path",
      description:
        "London professionals: Outsource your job applications. Nigerian freelancers: Sign up to access international gigs. One platform, two powerful paths.",
    },
    {
      icon: <FaClipboardList className="text-green-500" size={28} />,
      title: "2. Set Your Preferences",
      description:
        "Job seekers: Define your dream role. Freelancers: Showcase your skills. Our system matches both sides for the perfect fit.",
    },
    {
      icon: <FaPaperPlane className="text-yellow-500" size={28} />,
      title: "3. We Handle the Work",
      description:
        "London clients: Our assistants submit applications for you. Nigerian talent: Get hired and deliver projects — we handle payments in NGN.",
    },
    {
      icon: <FaBriefcase className="text-purple-500" size={28} />,
      title: "4. Success on Both Ends",
      description:
        "Londoners land interviews without lifting a finger. Nigerians earn fair wages paid locally. Everyone wins.",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900"
        >
          How Jobbinex Works for{" "}
          <span className="text-[var(--color-primary)]">Everyone</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
        >
          Whether you're in London looking to save time or in Nigeria seeking
          global opportunities — we've streamlined the process for you.
        </motion.p>

        {/* Dual badges */}
        <div className="flex justify-center gap-4 mt-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <FaBriefcase size={14} /> London Job Seekers
          </span>
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <FaDollarSign size={14} /> Nigerian Freelancers
          </span>
        </div>
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
            alt="Jobbinex dual marketplace connecting London and Nigeria"
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
                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
