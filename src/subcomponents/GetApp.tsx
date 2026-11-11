
import { motion } from "framer-motion";

export default function GetApp() {
  return (
    <section className="bg-white py-20 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#02160bff] rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-10 md:p-16 text-white"
      >
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Let Us Handle Your Job Applications.{" "}
            <span className="text-[var(--color-primary)]">
              You Focus on Your Career.
            </span>
          </h2>

          <p className="text-base text-white/90 max-w-md mx-auto md:mx-0">
            Tired of spending hours searching and applying for jobs?
            Jobbinex takes the stress out of your job search. We help
            UK professionals and workers find relevant opportunities
            and handle their job applications on their behalf, so you
            can focus on work, life, and preparing for your next career move.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="https://app.jobbinex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 transition text-center"
            >
              Outsource Your Job Search →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
