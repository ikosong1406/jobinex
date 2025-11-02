import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Andrew",
      role: "Marketing Executive",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Jobbinex completely transformed my job search. My assistant handled everything — from applications to follow-ups — while I focused on my work.",
    },
    {
      name: "Roy Dallas",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote:
        "The process was seamless and efficient. I landed interviews with top companies without spending hours applying manually.",
    },
    {
      name: "Lisa Martins",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "It felt like having a personal job manager. I got tailored applications and valuable insights that helped me secure my ideal role.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900"
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mt-3"
        >
          Hear directly from professionals who’ve streamlined their job search
          with Jobbinex.
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-left hover:shadow-xl transition"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              “{t.quote}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
