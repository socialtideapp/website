import type { Metadata } from 'next';
import ObfuscatedEmail from './ObfuscatedEmail';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | SocialTide',
  description: 'SocialTide Privacy Policy - Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.socialtide.app/privacy-policy'
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ocean-light">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32">
        {/* Back to Home Link */}
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-ocean-foam hover:text-white transition-colors duration-300 mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>

        {/* Content Container */}
        <article className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SocialTide - Privacy Policy</h1>
            <p className="text-ocean-foam text-sm">Last updated: January 2, 2026</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="leading-relaxed mb-4">
                This Privacy Policy explains how SocialTide collects, uses, stores, and protects personal information.
              </p>
              <p className="leading-relaxed mb-2">We are committed to transparency and comply with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>PIPEDA (Canada)</li>
                <li>GDPR (European Union)</li>
                <li>Applicable U.S. privacy laws</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address</li>
                <li>Account credentials</li>
                <li>Profile details (optional)</li>
                <li>Messages and group content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Automatically Collected</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information</li>
                <li>App usage data</li>
                <li>Log data (including IP address)</li>
                <li>Diagnostic and crash data</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How We Use Data</h2>
              <p className="leading-relaxed mb-2">We use personal data to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide core app functionality</li>
                <li>Enable messaging and group features</li>
                <li>Secure accounts and prevent abuse</li>
                <li>Improve app performance and reliability</li>
                <li>Communicate essential service information</li>
              </ul>
              <p className="font-semibold text-white">We do not sell personal data.</p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Messages & Content</h2>
              <p className="leading-relaxed mb-4">
                Messages are stored securely to enable app features.
              </p>
              <p className="leading-relaxed mb-4">
                We may analyze aggregated and anonymized data (e.g., usage trends) to improve SocialTide. 
                Private messages are not accessed for advertising purposes.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Emails & Notifications</h2>
              <p className="leading-relaxed mb-2">We send transactional emails only, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Account verification</li>
                <li>Password resets</li>
                <li>Security alerts</li>
              </ul>
              <p className="leading-relaxed">
                You may control notification preferences in the app. (Coming Soon)
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Legal Basis for Processing (GDPR)</h2>
              <p className="leading-relaxed mb-2">
                For users in the European Economic Area (EEA), we process personal data based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contractual necessity (providing the service)</li>
                <li>Legitimate interests (security, fraud prevention)</li>
                <li>User consent, where required</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Data Sharing</h2>
              <p className="leading-relaxed mb-2">We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Trusted service providers (e.g., hosting, authentication, analytics)</li>
                <li>Authorities when legally required</li>
              </ul>
              <p className="leading-relaxed">
                All partners are required to safeguard your data.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="leading-relaxed mb-4">
                Your data may be processed in Canada, the United States, or other jurisdictions where our service providers operate. 
                We take steps to ensure appropriate safeguards are in place.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Data Retention</h2>
              <p className="leading-relaxed mb-2">We retain data only as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Operate the service</li>
                <li>Meet legal requirements</li>
              </ul>
              <p className="leading-relaxed">
                You may request account deletion at any time.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="leading-relaxed mb-4">
                SocialTide is not intended for children under 13. We do not knowingly collect data from children under 13. 
                If discovered, such data will be deleted.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Object to certain processing</li>
              </ul>
              <p className="leading-relaxed">
                Contact us to exercise these rights.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security</h2>
              <p className="leading-relaxed mb-4">
                We use industry-standard safeguards to protect personal data. No system is completely secure, but we actively monitor and improve protections.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed mb-4">
                We may update this Privacy Policy. Material changes will be communicated in-app or by email.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Contact</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  <strong className="text-white">Email:</strong> <ObfuscatedEmail />
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Company:</strong> SocialTide
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Location:</strong> Canada
                </p>
              </div>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
