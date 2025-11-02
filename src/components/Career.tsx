import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBriefcase,
  FaPalette,
  FaChartLine,
  FaUserTie,
  FaStethoscope,
  FaGavel,
  FaGlobe,
  FaWrench,
  FaCamera,
} from "react-icons/fa";

const careers = [
  { icon: <FaLaptopCode size={22} />, label: "Tech" },
  { icon: <FaBriefcase size={22} />, label: "Business" },
  { icon: <FaPalette size={22} />, label: "Design" },
  { icon: <FaChartLine size={22} />, label: "Marketing" },
  { icon: <FaUserTie size={22} />, label: "HR & Management" },
  { icon: <FaStethoscope size={22} />, label: "Healthcare" },
  { icon: <FaGavel size={22} />, label: "Legal" },
  { icon: <FaGlobe size={22} />, label: "Remote" },
  { icon: <FaWrench size={22} />, label: "Engineering" },
  { icon: <FaCamera size={22} />, label: "Media" },
];

export default function CareersCarousel() {
  return (
    <motion.div
      className="relative z-10 pb-10 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <motion.div
        className="flex gap-4 px-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // speed (higher = slower)
        }}
      >
        {/* Duplicate the careers list twice for seamless loop */}
        {[...careers, ...careers].map((career, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/10 rounded-lg py-2 px-3 backdrop-blur-sm min-w-max"
          >
            <span className="text-[var(--color-primary)]">{career.icon}</span>
            <p className="font-medium text-sm whitespace-nowrap">
              {career.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
