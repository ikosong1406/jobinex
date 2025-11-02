import { FaClock, FaUserCheck, FaRobot, FaShieldAlt, FaHandsHelping, FaChartLine } from "react-icons/fa";

export default function WhyChooseJobinex() {
  return (
    <section className="bg-[#02160bff] text-white py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-3">Why Choose Jobbinex</h2>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          We go beyond traditional job tools — offering a smarter, more efficient, and
          personalized way to manage your job applications effortlessly.
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaRobot size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Assistance</h3>
          <p className="text-white/80">
            Smart automation helps you stay on top of every opportunity with minimal effort.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaUserCheck size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
          <p className="text-white/80">
            Get matched with dedicated assistants who understand your goals and career path.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaClock size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">Time-Saving Process</h3>
          <p className="text-white/80">
            Outsource repetitive job applications so you can focus on interviews and growth.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaShieldAlt size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
          <p className="text-white/80">
            Your career information and application data are fully protected and encrypted.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaHandsHelping size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reliable Assistance</h3>
          <p className="text-white/80">
            Our professional team ensures consistent weekly application delivery and updates.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-md hover:bg-white/20 transition">
          <FaChartLine size={32} className="text-white mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career Growth Focused</h3>
          <p className="text-white/80">
            We don’t just apply — we help you aim higher with curated job opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
