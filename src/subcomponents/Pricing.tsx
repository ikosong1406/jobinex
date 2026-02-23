import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaBriefcase } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 49.99,
      duration: "/Monthly",
      description:
        "Perfect for individuals just starting out or applying to a few jobs per week. Get a professional foundation with our expert document creation.",
      features: [
        "Up to 40+ job applications",
        "Application status tracking",
        "Weekly performance summary",
        "Professionally Written CV & Cover Letter",
        "Human-Written Guarantee (No AI)",
        "ATS Optimization for all documents",
      ],
      oldPrice: null,
      discount: 0,
      highlight: false,
      audience: "Job Seeker",
    },
    {
      name: "Professional",
      price: 99.99,
      oldPrice: 124.99,
      duration: "/Monthly",
      description:
        "Ideal for busy professionals who want consistent support with tailored job applications and a complete hands-on service.",
      features: [
        "Everything in Starter, plus:",
        "Up to 100+ job applications",
        "Priority application review",
        "Custom CV & cover letter optimization",
        "Weekly insights and optimization tips",
        "LinkedIn Profile Refinement & Optimization",
        "Targeted Job Research Assistance",
        "Assisted Application Submissions",
      ],
      discount: 20,
      highlight: true,
      audience: "Job Seeker",
    },
    {
      name: "Elite",
      price: 249.99,
      oldPrice: 499.99,
      duration: "/Monthly",
      description:
        "For executives or power users who want full coverage, strategic job application management, and end-to-end career advancement support.",
      features: [
        "Everything in Professional, plus:",
        "Unlimited job applications",
        "Detailed progress reports",
        "Dedicated career strategist session",
        "Full application management",
        "Priority Service & Faster Turnaround",
        "One-to-One Interview Coaching Session",
        "Personal Brand Strategy & Crafting",
      ],
      discount: 50,
      highlight: false,
      audience: "Job Seeker",
    },
  ];

  // Freelancer section data
  const freelancerPricing = {
    name: "Freelancer Plan",
    fee: "20%",
    description:
      "For Nigerian freelancers accessing international gigs. We handle payment processing, currency conversion, and client vetting so you can focus on delivering quality work.",
    features: [
      "Access to UK & international clients",
      "Get paid directly in NGN to your local bank",
      "No PayPal or Stripe required",
      "Client vetting & dispute protection",
      "20% service fee deducted from payout",
      "Keep 80% of every gig you complete",
      "No upfront costs or monthly fees",
    ],
  };

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
          className="text-3xl font-extrabold"
        >
          Pricing for{" "}
          <span className="text-[var(--color-primary)]">Every Path</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-200 max-w-2xl mx-auto mt-3"
        >
          At Jobbinex, every application is written by real people who
          understand how hiring really works. We don't use AI or templates, we
          craft each document to reflect your unique strengths, experience, and
          goals.
        </motion.p>
      </div>

      {/* Audience Toggle Hint */}
      <div className="flex justify-center gap-6 mb-10 text-sm">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
          <FaBriefcase className="text-[var(--color-primary)]" />
          <span>UK Job Seekers: Monthly Plans</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
          <FaGlobe className="text-[var(--color-primary)]" />
          <span>Nigerian Freelancers: 20% Service Fee</span>
        </div>
      </div>

      {/* Pricing Cards - Job Seeker Plans */}
      <div className="grid grid-cols- md:grid-cols-3 gap-8 mb-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-xl border ${
              plan.highlight
                ? "bg-white text-gray-900 border-transparent"
                : "bg-white/10 border-white/20"
            } transition-transform duration-300`}
          >
            {/* Audience Badge */}
            <span className="inline-block bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs px-2 py-1 rounded-full mb-3">
              {plan.audience}
            </span>

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

      {/* Freelancer Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent rounded-3xl p-6 border border-[var(--color-primary)]/30"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left - Icon and Title */}
          <div className="md:w-1/3 text-center md:text-left">
            <div className="bg-[var(--color-primary)]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <FaGlobe className="text-[var(--color-primary)] text-3xl" />
            </div>
            <h3 className="text-3xl font-bold text-white">
              {freelancerPricing.name}
            </h3>
            <div className="mt-2">
              <span className="text-5xl font-extrabold text-[var(--color-primary)]">
                {freelancerPricing.fee}
              </span>
              <span className="text-gray-300 text-lg ml-2">Service Fee</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">
              You keep 80% of earnings
            </p>
          </div>

          {/* Right - Features */}
          <div className="md:w-2/3">
            <p className="text-gray-200 mb-4">
              {freelancerPricing.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {freelancerPricing.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-2">
                  <FaCheckCircle
                    className="text-[var(--color-primary)] flex-shrink-0"
                    size={16}
                  />
                  <span className="text-sm text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://app.jobbinex.com/freelancer-dashboard"
                className="inline-block px-8 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 transition"
              >
                Join as Freelancer
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
