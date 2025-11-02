import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£19",
      duration: "/week",
      description:
        "Perfect for individuals just starting out or applying to a few jobs per week.",
      features: [
        "Up to 5 job applications weekly",
        "1:1 assistant support",
        "Application status tracking",
        "Weekly performance summary",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "£39",
      duration: "/week",
      description:
        "Ideal for busy professionals who want consistent support with tailored job applications.",
      features: [
        "Up to 15 job applications weekly",
        "Dedicated assistant",
        "Priority application review",
        "Weekly insights and optimization tips",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: "£59",
      duration: "/week",
      description:
        "For executives or power users who want full coverage and strategic job application management.",
      features: [
        "Unlimited job applications",
        "Full-time assistant access",
        "Custom CV & cover letter optimization",
        "Detailed progress reports",
      ],
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
          Choose the plan that fits your job search goals. Upgrade, pause, or
          cancel anytime — no hidden fees.
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

            <div className="flex items-end justify-center md:justify-start gap-1 mb-6">
              <span
                className={`text-5xl font-extrabold ${
                  plan.highlight ? "text-gray-900" : "text-white"
                }`}
              >
                {plan.price}
              </span>
              <span
                className={`text-sm font-medium ${
                  plan.highlight ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {plan.duration}
              </span>
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
              <button
                className={`px-6 py-3 font-semibold rounded-full w-full ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-black hover:bg-green-400"
                    : "bg-white/20 hover:bg-white/30"
                } transition`}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
