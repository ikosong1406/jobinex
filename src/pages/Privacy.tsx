import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative bg-black text-white py-20">
        <div className="container mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">Last updated: February 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-8 md:px-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600 mb-0">
                At Jobbinex, we take your privacy seriously. This policy
                describes how we collect, use, and protect your personal
                information.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              1.1 Information You Provide
            </h3>
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Account Information:</strong> Name, email address,
                password, phone number
              </li>
              <li>
                <strong>Profile Information:</strong> Resume/CV, work history,
                education, skills, preferences
              </li>
              <li>
                <strong>Payment Information:</strong> Billing details (processed
                securely by third parties)
              </li>
              <li>
                <strong>Communications:</strong> Messages with assistants,
                support requests, feedback
              </li>
              <li>
                <strong>Verification Documents:</strong> Identity documents (for
                freelancers)
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              1.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, time
                spent
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system
              </li>
              <li>
                <strong>Location Data:</strong> Approximate location based on IP
                address
              </li>
              <li>
                <strong>Cookies:</strong> See our Cookie Policy below
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our Services</li>
              <li>Match job seekers with suitable assistants</li>
              <li>Process transactions and send related information</li>
              <li>Communicate with you about our Services</li>
              <li>Detect and prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. Sharing of Information
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Assistants/Freelancers:</strong> To provide requested
                services
              </li>
              <li>
                <strong>Service Providers:</strong> Payment processors, hosting
                services, analytics
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger
                or acquisition
              </li>
            </ul>
            <p className="font-semibold mt-2">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These include encryption,
              secure servers, and access controls.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. Your Rights and Choices
            </h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, contact us at privacy@jobbinex.com. We
              will respond within the timeframe required by applicable law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              6. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              for such transfers, including standard contractual clauses where
              required.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active
              or as needed to provide Services, comply with legal obligations,
              resolve disputes, and enforce agreements. You may request deletion
              of your account at any time.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our Services are not directed to individuals under 18. We do not
              knowingly collect personal information from children. If we learn
              we have collected information from a child, we will delete it
              promptly.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookie Policy</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Keep you logged in</li>
              <li>Remember your preferences</li>
              <li>Understand how you use our Services</li>
              <li>Improve functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling
              cookies may affect your ability to use certain features.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              10. Third-Party Links
            </h2>
            <p>
              Our Services may contain links to third-party websites. We are not
              responsible for their privacy practices. We encourage you to
              review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              11. Changes to Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you
              of material changes through our Services or by email. Your
              continued use after changes constitutes acceptance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              12. Specific Provisions for UK and Nigeria
            </h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              12.1 UK Users (GDPR)
            </h3>
            <p>
              If you are in the UK, you have rights under the UK GDPR. Our
              lawful bases for processing include consent, contract performance,
              legal obligations, and legitimate interests.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              12.2 Nigerian Users (NDPR)
            </h3>
            <p>
              For Nigerian users, we comply with the Nigeria Data Protection
              Regulation. This includes obtaining consent where required and
              implementing appropriate security measures.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
