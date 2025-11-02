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
      title: "1. Create Your Profile",
      description:
        "Tell us about your career goals, experience, and the kind of jobs you’re targeting. Our system personalizes everything from there.",
    },
    {
      icon: <FaClipboardList className="text-green-500" size={28} />,
      title: "2. Match & Prepare",
      description:
        "We identify suitable openings and draft professional applications that align perfectly with your skills and preferences.",
    },
    {
      icon: <FaPaperPlane className="text-yellow-500" size={28} />,
      title: "3. Apply with Confidence",
      description:
        "Your Jobbinex assistant handles the entire submission process — accurately and on time — ensuring no opportunity is missed.",
    },
    {
      icon: <FaBriefcase className="text-purple-500" size={28} />,
      title: "4. Land the Right Job",
      description:
        "Relax while we keep track of your applications and notify you of interviews and responses from employers.",
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
          Easy Steps to Land Your Dream Job
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
        >
          We’ve simplified the job search process into four actionable steps
          designed to save time and maximize your success.
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
            alt="Easy Steps Illustration"
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
              className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition"
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
