import { motion } from "framer-motion";

export default function TermsOfService() {
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
              Terms of Service
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
                By accessing or using Jobbinex, you agree to be bound by these
                Terms of Service. Please read them carefully.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to Jobbinex. These Terms of Service ("Terms") govern your
              use of our website, mobile applications, and services
              (collectively, the "Services"). By accessing or using our
              Services, you agree to be bound by these Terms and our Privacy
              Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Description of Services
            </h2>
            <p>
              Jobbinex provides a platform that connects job seekers with
              professional assistants who help with job applications,
              follow-ups, and submissions. Our Services include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Job application outsourcing for job seekers</li>
              <li>Freelancer dashboard for Nigerian assistants</li>
              <li>Application tracking and management</li>
              <li>Communication platform between clients and assistants</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              3.1 Registration
            </h3>
            <p>
              To use certain features of our Services, you must register for an
              account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain and update your information promptly</li>
              <li>Keep your account credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              3.2 Account Types
            </h3>
            <p>
              <strong>Job Seekers:</strong> Individuals seeking employment
              assistance
              <br />
              <strong>Freelancers:</strong> Nigerian-based assistants providing
              application services
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              4. Fees and Payments
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              4.1 Service Fees
            </h3>
            <p>
              Jobbinex charges fees for certain services. All fees will be
              clearly displayed before you commit to a purchase. Fees are
              non-refundable except as required by law or as specified in our
              refund policy.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              4.2 Payment Processing
            </h3>
            <p>
              We use third-party payment processors to handle transactions. By
              making payments through our Services, you agree to the terms of
              these processors. We do not store your full payment information.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Currency</h3>
            <p>
              Job seekers may be charged in GBP or other currencies. Freelancers
              are paid in NGN (Nigerian Naira). Exchange rates are determined at
              the time of transaction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. User Obligations
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Submit false or misleading information</li>
              <li>Harass, abuse, or harm others</li>
              <li>Interfere with the proper functioning of our Services</li>
              <li>
                Use automated means to access our Services without permission
              </li>
              <li>Impersonate any person or entity</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              6. Freelancer Terms
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">
              6.1 Independent Contractors
            </h3>
            <p>
              Freelancers are independent contractors, not employees of
              Jobbinex. You are responsible for your own taxes, insurance, and
              compliance with local laws.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              6.2 Quality Standards
            </h3>
            <p>
              Freelancers agree to maintain professional standards in their
              work, including timely communication, accurate applications, and
              confidentiality of client information.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              6.3 Payments to Freelancers
            </h3>
            <p>
              Freelancers will be paid according to the terms agreed upon in
              their dashboard. Payments are processed after client confirmation
              of completed work.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">7.1 Our Content</h3>
            <p>
              All content provided through our Services, including text,
              graphics, logos, and software, is owned by or licensed to Jobbinex
              and protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">
              7.2 User Content
            </h3>
            <p>
              You retain ownership of content you submit through our Services.
              By submitting content, you grant us a license to use, store, and
              process it for providing our Services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to our
              Services immediately, without prior notice, for conduct that we
              believe violates these Terms or is harmful to other users, us, or
              third parties, or for any other reason at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT
              GUARANTEE THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR
              ERROR-FREE.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, JOBBINEX SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Jobbinex, its affiliates,
              and their respective officers, directors, employees, and agents
              from any claims arising out of your use of our Services or
              violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of [Your Jurisdiction],
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of significant changes through our Services or by
              other means. Your continued use of our Services after such changes
              constitutes your acceptance of the new Terms.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
