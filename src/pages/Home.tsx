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
                Discover your dream job
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Outsource Your Job Applications {" "}
              <span className="text-[var(--color-primary)]">Effortlessly.</span>
            </h1>

            <p className="text-lg text-gray-200 max-w-md mx-auto md:mx-0">
              Jobbinex connects you with dedicated assistants who handle your job
              applications, follow-ups, and submissions, so you can focus on
              work, life, and the interviews that matter.
            </p>

            <div>
              <a
                className="px-6 py-3 mt-4 bg-[var(--color-primary)] text-black font-semibold rounded-full transition"
                href="https://app.jobbinex.com"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Right side (image) */}
          {/* <motion.div
            className="hidden md:flex md:w-1/2 justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/hero-illustration.png"
              alt="Jobinex hero illustration"
              className="w-[450px] max-w-full drop-shadow-2xl"
            />
          </motion.div> */}
        </div>

        {/* Careers section (under text + image, inside hero) */}
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
