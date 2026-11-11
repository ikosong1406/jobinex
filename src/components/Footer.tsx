import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <a href="/">
            <img src={logo} alt="" className="w-[90px]" />
          </a>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
            Jobbinex helps busy and working professionals outsource their job
            application process saving time and improving results with
            assistance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-[var(--color-primary)] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-[var(--color-primary)] transition"
              >
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
              <a
                href="/terms"
                className="hover:text-[var(--color-primary)] transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-[var(--color-primary)] transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jobbinex. All rights reserved.
      </div>
    </footer>
  );
}
