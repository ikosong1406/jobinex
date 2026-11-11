
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
      <section className="relative flex flex-col justify-between min-h-screen text-white">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/53/fd/d3/53fdd326b305f667bbe5272c59f3458c.gif')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between flex-1 w-full px-6 md:px-16">

          {/* Left side - Text content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-6 mt-20 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your Job Search,{" "}
              <span className="text-[var(--color-primary)]">
                Our Responsibility.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Stop spending hours searching and applying for jobs.
              Jobbinex helps UK professionals and workers find relevant
              opportunities while our team manages their job applications
              on their behalf.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <a
                className="px-8 py-3.5 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 hover:scale-105 transition duration-300 text-center shadow-lg"
                href="https://app.jobbinex.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Outsource Your Job Search →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Career categories */}
        <div className="relative z-10">
          <Career />
        </div>
      </section>

      {/* WHY CHOOSE JOBINEX */}
      <Better />

      {/* HOW IT WORKS */}
      <Steps />

      {/* PRICING */}
      <Pricing />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <GetApp />
    </main>
  );
}
