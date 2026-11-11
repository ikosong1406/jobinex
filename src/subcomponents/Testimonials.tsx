
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David A.",
      role: "Care Assistant | London",
      image: "https://randomuser.me/api/portraits/women/40.jpg",
      quote:
        "Between my care home shifts and weekend work, I barely had time to sit down, let alone search and apply for better jobs. Most nights I was too exhausted to even open my laptop. Jobbinex took that pressure off me. They helped me find relevant opportunities and handled the applications while I focused on work. That alone made a big difference.",
      tag: "Juggling multiple shifts",
    },
    {
      name: "Grace M.",
      role: "International Student | Birmingham",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "I'm balancing my studies, part-time work and bills. There were so many jobs I wanted to apply for, but I simply didn't have the time to complete all those application forms. Having someone help manage my applications has made the process much less stressful. I can now spend more time studying and preparing for opportunities.",
      tag: "Balancing work and studies",
    },
    {
      name: "Michael O.",
      role: "Warehouse Operative | Manchester",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote:
        "Working long warehouse shifts is not easy, especially when you have rent, family responsibilities and other bills to take care of. I wanted to move into a better-paying role, but applying for jobs after work felt like another shift. Jobbinex made the process easier by helping me search for suitable roles and manage my applications.",
      tag: "Looking for better opportunities",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Real Life Is Busy.{" "}
          <span className="text-[var(--color-primary)]">
            Let Us Help.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
        >
          Between work, studies, family responsibilities and rising
          living costs, finding time to apply for better jobs isn't easy.
          Jobbinex helps take the application workload off your shoulders.
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition"
          >
            {/* Customer info */}
            <div className="flex items-center mb-5">
              <img
                src={t.image}
                alt=""
                className="w-14 h-14 rounded-full object-cover mr-4"
              />

              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Customer situation */}
            <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full mb-4">
              {t.tag}
            </span>

            {/* Testimonial */}
            <p className="text-gray-700 text-sm leading-relaxed">
              “{t.quote}”
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing statement */}
      <div className="text-center mt-12">
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          You work hard enough already. Let Jobbinex help you make
          your next career move without adding another job to your day.
        </p>

        <a
          href="https://app.jobbinex.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-full hover:bg-green-400 transition"
        >
          Let Jobbinex Help You →
        </a>
      </div>
    </section>
  );
}
