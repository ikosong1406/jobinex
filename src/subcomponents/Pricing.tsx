
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 79.99,
      oldPrice: 99.99,
      discount: 20,
      duration: "/Monthly",
      description:
        "A practical solution for professionals who want to save time and get consistent support with their job search.",
      features: [
        "Up to 30 job applications per month",
        "Personalised job search preferences",
        "Job matching based on your profile",
        "CV review and optimisation",
        "Cover letter preparation",
        "AI-assisted application preparation",
        "Human review of applications",
        "Application status tracking",
        "Weekly application summary",
        "ATS-friendly document optimisation",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: 149.99,
      oldPrice: 199.99,
      discount: 25,
      duration: "/Monthly",
      description:
        "For busy professionals who want extensive job application support, priority processing and a more hands-on service.",
      features: [
        "Everything in Starter, plus:",
        "Up to 60 job applications per month",
        "Priority application processing",
        "Advanced CV and cover letter optimisation",
        "Role-specific application personalisation",
        "AI-powered job discovery and matching",
        "Human-reviewed application submissions",
        "LinkedIn profile refinement",
        "Targeted job research assistance",
        "Detailed application progress reports",
        "Priority customer support",
      ],
      highlight: true,
    },
  ];

  return (
    <section
      className="text-white py-20 px-4 md:px-16"
      style={{ backgroundColor: "#02160bff" }}
      id="pricing"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Simple, Transparent{" "}
          <span className="text-[var(--color-primary)]">
            Pricing
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mt-3"
        >
          Your time is valuable. Let Jobbinex take the stress out
          of applying for jobs. Choose a plan that suits your career
          goals and let our team manage your applications while you
          focus on your next opportunity.
        </motion.p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`relative rounded-2xl p-8 shadow-xl border ${
              plan.highlight
                ? "bg-white text-gray-900 border-[var(--color-primary)] md:scale-105"
                : "bg-white/10 border-white/20"
            } transition-transform duration-300`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[var(--color-primary)] text-black text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                  MOST POPULAR
                </span>
              </div>
            )}

            <h3
              className={`text-2xl font-bold mb-2 ${
                plan.highlight ? "text-[#02160bff]" : "text-white"
              }`}
            >
              {plan.name}
            </h3>

            <p
              className={`text-sm mb-6 ${
                plan.highlight ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {plan.description}
            </p>

            {/* Discount and Pricing */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-lg font-semibold line-through ${
                    plan.highlight ? "text-gray-400" : "text-gray-400"
                  }`}
                >
                  £{plan.oldPrice.toFixed(2)}
                </span>

                <span className="bg-green-500/15 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold">
                  SAVE {plan.discount}%
                </span>
              </div>

              <div className="flex items-end gap-1">
                <span
                  className={`text-5xl font-extrabold ${
                    plan.highlight ? "text-gray-900" : "text-white"
                  }`}
                >
                  £{plan.price.toFixed(2)}
                </span>

                <span
                  className={`text-sm font-medium pb-2 ${
                    plan.highlight ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {plan.duration}
                </span>
              </div>

              <p
                className={`text-xs mt-2 ${
                  plan.highlight ? "text-green-700" : "text-green-400"
                }`}
              >
                Limited-time introductory offer
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-left">
              {plan.features.map((feature, j) => (
                <li
                  key={j}
                  className={`flex items-start gap-3 ${
                    plan.highlight ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  <FaCheckCircle
                    size={16}
                    className={`flex-shrink-0 mt-1 ${
                      plan.highlight
                        ? "text-green-600"
                        : "text-[var(--color-primary)]"
                    }`}
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                className={`px-6 py-3 font-semibold rounded-full w-full flex justify-center ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-black hover:bg-green-400"
                    : "bg-white/20 text-white hover:bg-white/30"
                } transition`}
                href="https://app.jobbinex.com"
              >
                Get Started →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
