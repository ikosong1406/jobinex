import { motion } from "framer-motion";

export default function GetApp() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
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
          <h2 className="text-4xl font-extrabold leading-tight">
            Access Jobbinex Anywhere, Anytime
          </h2>
          <p className="text-lg text-white/90 max-w-md mx-auto md:mx-0">
            Start managing your job applications effortlessly with our web
            platform. Stay organized, get instant updates, and let your
            assistant handle the heavy lifting all from your browser.
          </p>

          <div>
            <a
              href="https://app.jobbinex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full transition"
            >
              Use Jobbinex Now
            </a>
          </div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          {/* <img
            src="https://tse1.mm.bing.net/th/id/OIP.KWlEl8XnvRd7sBcUs-s66QHaEw?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Jobinex web platform"
            className="w-[400px] max-w-full drop-shadow-2xl rounded-lg"
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
