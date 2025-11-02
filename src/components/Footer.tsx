import { FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <a
            href="/"
            className="text-3xl font-extrabold text-white tracking-wide"
          >
            <span className="text-[var(--color-primary)]">JOB</span>BINEX
          </a>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
            Jobbinex helps busy and working professionals outsource their job
            application process — saving time and improving results with
            intelligent assistance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-[var(--color-primary)] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[var(--color-primary)] transition">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[var(--color-primary)] transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#faq" className="hover:text-[var(--color-primary)] transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--color-primary)] transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[var(--color-primary)] transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-[var(--color-primary)] transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="mailto:info@jobinex.uk"
              className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jobbinex. All rights reserved.
      </div>
    </footer>
  );
}
