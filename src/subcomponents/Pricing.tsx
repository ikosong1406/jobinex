import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
const plans = [
    {
      name: "Starter",
      price: 49.99, // no discount
      duration: "/Monthly",
      description:
        "Perfect for individuals just starting out or applying to a few jobs per week. Get a professional foundation with our expert document creation.",
      features: [
        "Up to 50+ job applications",
        "Application status tracking",
        "Weekly performance summary",
        // Added features from the message
        "Professionally Written CV & Cover Letter", // Core document creation
        "Human-Written Guarantee (No AI)", // Quality assurance
        "ATS Optimization for all documents",
      ],
      oldPrice: null,
      discount: 0,
      highlight: false,
    },
    {
      name: "Professional",
      price: 99.99, // this is the NEW discounted price
      oldPrice: 124.99, // original price before 20% off
      duration: "/Monthly",
      description:
        "Ideal for busy professionals who want consistent support with tailored job applications and a complete hands-on service.",
      features: [
        "Everything in Starter, plus:",
        "Up to 100+ job applications",
        "Priority application review",
        "Custom CV & cover letter optimization",
        "Weekly insights and optimization tips",
        // Added features from the message
        "LinkedIn Profile Refinement & Optimization", // Hands-on service
        "Targeted Job Research Assistance", // Hands-on service
        "Assisted Application Submissions", // Hands-on service
      ],
      discount: 20,
      highlight: true,
    },
    {
      name: "Elite",
      price: 249.99, // this is the NEW discounted price
      oldPrice: 499.99, // original price before 50% off
      duration: "/Monthly",
      description:
        "For executives or power users who want full coverage, strategic job application management, and end-to-end career advancement support.",
      features: [
        "Everything in Professional, plus:",
        "Unlimited job applications",
        "Detailed progress reports",
        "Dedicated career strategist session",
        "Full application management",
        // Added features from the message
        "Priority Service & Faster Turnaround", // Priority service
        "One-to-One Interview Coaching Session", // High-level support
        "Personal Brand Strategy & Crafting", // High-level support
      ],
      discount: 50,
      highlight: false,
    },
];

  return (
    <section
      className="text-white py-20 px-6 md:px-16"
      style={{ backgroundColor: "#02160bff" }}
      id="pricing"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mt-3"
        >
          At Jobbinex, every application is written by real people who understand how hiring really works. We don’t use AI or templates, we craft each document to reflect your unique strengths, experience, and goals. Choose the plan that fits your stage, ambition, and career direction.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-xl border ${
              plan.highlight
                ? "bg-white text-gray-900 border-transparent scale-105"
                : "bg-white/10 border-white/20"
            } transition-transform duration-300`}
          >
            <h3
              className={`text-2xl font-bold mb-2 ${
                plan.highlight ? "text-[#02160bff]" : "text-white"
              }`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-sm mb-4 ${
                plan.highlight ? "text-[#02160bff]" : "text-gray-300"
              }`}
            >
              {plan.description}
            </p>

            <div className="flex flex-col items-center md:items-start mb-6">
              {/* Show old price if discounted */}
              {plan.oldPrice && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`text-lg font-medium mb-1 flex items-center gap-2 ${
                    plan.highlight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <span className="relative">
                    <span className="line-through text-red-500 opacity-80">
                      £{plan.oldPrice.toFixed(2)}
                    </span>
                  </span>
                  <span
                    className={`px-2 py-[2px] text-xs rounded-full font-semibold ${
                      plan.highlight
                        ? "bg-green-100 text-green-700"
                        : "bg-green-800 text-green-200"
                    }`}
                  >
                    SAVE {plan.discount}%
                  </span>
                </motion.div>
              )}

              <div className="flex items-end gap-1">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlight ? "text-gray-900" : "text-white"
                  }`}
                >
                  £{plan.price.toFixed(2)}
                </span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {plan.duration}
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-left">
              {plan.features.map((feature, j) => (
                <li
                  key={j}
                  className={`flex items-center gap-2 ${
                    plan.highlight ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  <FaCheckCircle
                    size={16}
                    className={
                      plan.highlight
                        ? "text-green-600"
                        : "text-[var(--color-primary)]"
                    }
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <a
                className={`px-6 py-3 font-semibold rounded-full w-full flex justify-center ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-black hover:bg-green-400"
                    : "bg-white/20 hover:bg-white/30"
                } transition`}
                href="https://app.jobbinex.com"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
