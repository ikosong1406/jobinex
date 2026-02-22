import { motion } from "framer-motion";

export default function GetApp() {
  return (
    <section className="bg-white py-20 px-4 md:px-16">
      {/* Inner colored container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#02160bff] rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-10 md:p-16 text-white"
      >
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl font-extrabold leading-tight">
            Your Gateway to{" "}
            <span className="text-[var(--color-primary)]">
              Global Opportunities
            </span>
          </h2>

          <p className="text-base text-white/90 max-w-md mx-auto md:mx-0">
            One platform, two powerful paths. London professionals outsource
            their job search. Nigerian freelancers access international clients
            and get paid in NGN.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="https://app.jobbinex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 transition text-center"
            >
              🇬🇧 Outsource Applications
            </a>
            <a
              href="https://app.jobbinex.com/freelancer-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-center"
            >
              🇳🇬 Freelancer Portal
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
