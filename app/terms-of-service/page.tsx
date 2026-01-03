import type { Metadata } from 'next';
import ObfuscatedEmail from '../privacy-policy/ObfuscatedEmail';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | SocialTide',
  description: 'SocialTide Terms of Service - Review the terms and conditions for using our service.',
  alternates: {
    canonical: 'https://www.socialtide.app/terms-of-service'
  }
};

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SocialTide - Terms of Service</h1>
            <p className="text-ocean-foam text-sm">Last updated: January 2, 2026</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">
                By creating an account or using the SocialTide mobile application ("SocialTide," "we," "us," or "our"), you agree to these Terms of Service ("Terms").
              </p>
              <p className="leading-relaxed mb-4">
                If you do not agree, do not use the app.
              </p>
              <p className="leading-relaxed mb-2">You confirm that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are at least 13 years old</li>
                <li>You are legally permitted to use this service in your country</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Description of Service</h2>
              <p className="leading-relaxed mb-4">
                SocialTide is a social communication platform that helps people stay connected through simple, meaningful conversations. Features may include chat, groups, and daily prompts.
              </p>
              <p className="leading-relaxed">
                SocialTide is not responsible for user-generated content, but we reserve the right to moderate content to maintain a safe experience.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Account Responsibility</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You are responsible for all activity under your account.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Account Termination</h3>
              <p className="leading-relaxed mb-4">
                You may delete your account at any time. We may suspend or terminate accounts that violate these Terms or misuse the service.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">User Content</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">Ownership</h3>
              <p className="leading-relaxed mb-6">
                You retain ownership of all content you create on SocialTide.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">License to Operate the Service</h3>
              <p className="leading-relaxed mb-4">
                You grant SocialTide a limited, non-exclusive, worldwide license to host, store, and display your content only to operate and improve the app.
              </p>
              <p className="leading-relaxed">
                We do not claim ownership of your content.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Acceptable Use</h2>
              <p className="leading-relaxed mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Harass, abuse, or harm others</li>
                <li>Post illegal, misleading, or explicit content</li>
                <li>Impersonate others</li>
                <li>Attempt unauthorized access to accounts or systems</li>
                <li>Use SocialTide for spam or automation</li>
              </ul>
              <p className="leading-relaxed">
                Violations may result in content removal or account suspension/termination.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy & Data Use</h2>
              <p className="leading-relaxed mb-4">
                Your use of SocialTide is governed by our <a href="/privacy-policy" className="text-ocean-foam hover:text-ocean-foam visited:text-ocean-foam transition-colors duration-300 underline">Privacy Policy</a>, which explains how we collect, use, and protect personal data.
              </p>
              <p className="leading-relaxed">
                SocialTide complies with applicable privacy laws, including PIPEDA (Canada), GDPR (EU), and relevant U.S. regulations.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Communications</h2>
              <p className="leading-relaxed mb-2">We may send transactional communications, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Account verification</li>
                <li>Password resets</li>
                <li>Security notifications</li>
              </ul>
              <p className="leading-relaxed">
                We do not send marketing emails unless you explicitly opt in.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Service Availability</h2>
              <p className="leading-relaxed mb-4">
                The app is provided "as is." We may modify, suspend, or discontinue features at any time without liability.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed mb-2">
                To the maximum extent permitted by law, SocialTide is not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect or incidental damages</li>
                <li>Loss of data</li>
                <li>User-generated content</li>
                <li>User interactions</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These Terms are governed by the laws of Canada. Where required, local consumer protection laws may apply.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="leading-relaxed mb-4">
                We may update these Terms. Material changes will be communicated via the app or email.
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
