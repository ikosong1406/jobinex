import { motion } from "framer-motion";
import Career from "../components/Career";
import Better from "../subcomponents/Better";
import Steps from "../subcomponents/Steps";
import Pricing from "../subcomponents/Pricing";
import Testimonials from "../subcomponents/Testimonials";
import GetApp from "../subcomponents/GetApp";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-between h-[80vh] md:h-[80vh] text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/53/fd/d3/53fdd326b305f667bbe5272c59f3458c.gif')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Main content container */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full px-8 md:px-16">
          {/* Left side (text content) */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6 mt-20 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 px-4 py-1 inline-block rounded-full">
              <p className="text-sm uppercase tracking-widest">
                🚀 New: Now expanding to Nigeria
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Outsource Your Job Applications{" "}
              <span className="text-[var(--color-primary)]">Effortlessly.</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
              Jobbinex connects you with dedicated assistants who handle your
              job applications, follow-ups, and submissions.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                className="px-6 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full transition text-center"
                href="https://app.jobbinex.com"
              >
                Outsource Applications
              </a>
              <a
                className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-center"
                href="https://work.jobbinex.com"
              >
                🇳🇬 Freelancer Dashboard
              </a>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-gray-400 pt-4">
              🇬🇧 London job seekers save time · 🇳🇬 Nigerian freelancers earn in
              NGN
            </p>
          </motion.div>
        </div>

        <Career />
      </section>
      <Better />
      <Steps />
      <Pricing />
      <Testimonials />
      <GetApp />
    </main>
  );
}
