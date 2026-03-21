import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Child Safety Policy (CSAE) | SocialTide',
  description: 'SocialTide standards against child sexual abuse and exploitation (CSAE) — our policies, prohibited content, and how to report violations.',
  alternates: {
    canonical: 'https://www.socialtide.app/csae-policy'
  }
};

export default function CSAEPolicy() {
  return (
    <div className="min-h-screen bg-ocean-light">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ocean-foam hover:text-white transition-colors duration-300 mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Content Container */}
        <article className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SocialTide — Standards Against Child Sexual Abuse and Exploitation (CSAE)
            </h1>
            <p className="text-ocean-foam text-sm">Last updated: March 20, 2026</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-8">

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Commitment</h2>
              <p className="leading-relaxed">
                SocialTide maintains a strict zero-tolerance policy against child sexual abuse and exploitation (CSAE) in any form. The safety, dignity, and well-being of children is a foundational priority for our platform. We are committed to preventing, detecting, and responding to any content or behaviour that sexually exploits or endangers minors.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Prohibited Content and Behaviour</h2>
              <p className="leading-relaxed mb-4">
                The following are strictly prohibited on SocialTide and will result in immediate account termination and reporting to the appropriate authorities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Child Sexual Abuse Material (CSAM) — sharing, storing, uploading, or distributing any sexual imagery or content involving minors</li>
                <li>Grooming — communicating with a minor for the purpose of exploiting or abusing them</li>
                <li>Solicitation — requesting sexual content from or arranging sexual contact with a minor</li>
                <li>Sextortion — coercing or threatening a minor into producing or sharing sexual content</li>
                <li>Trafficking — facilitating or promoting the sexual exploitation or trafficking of minors</li>
                <li>Any content that sexualizes, endangers, or facilitates harm to a child</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Enforcement</h2>
              <p className="leading-relaxed mb-4">
                When a violation of this policy is identified, SocialTide will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Immediately remove the content and suspend or permanently ban the account involved</li>
                <li>Preserve relevant evidence in accordance with applicable law</li>
                <li>Report known or suspected CSAM to the <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> via CyberTipline, as required under U.S. federal law (18 U.S.C. § 2258A)</li>
                <li>Cooperate fully with law enforcement agencies in Canada, the United States, and other applicable jurisdictions</li>
              </ul>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to Report a Violation</h2>
              <p className="leading-relaxed mb-4">
                If you encounter content or behaviour on SocialTide that you believe violates this policy, please report it immediately through one of the following channels:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>In-app reporting:</strong> Use the &quot;Report&quot; option on any message to flag concerning content directly to our moderation team.
                </li>
                <li>
                  <strong>Email:</strong> Contact us at{' '}
                  <a
                    href="mailto:support@socialtide.app"
                    className="text-tide-blue hover:text-white underline transition-colors duration-300"
                  >
                    support@socialtide.app
                  </a>
                  {' '}with details of the reported content or behaviour.
                </li>
                <li>
                  <strong>NCMEC CyberTipline:</strong> You may also report directly to NCMEC at{' '}
                  <a
                    href="https://www.missingkids.org/gethelpnow/cybertipline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tide-blue hover:text-white underline transition-colors duration-300"
                  >
                    missingkids.org/cybertipline
                  </a>
                  .
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                All reports are treated as high priority and reviewed promptly.
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Age Minimum</h2>
              <p className="leading-relaxed">
                SocialTide requires users to be at least 13 years of age. We do not knowingly permit accounts for children under 13. If we become aware that a user is under 13, the account will be immediately terminated. Parents or guardians who believe their child has created an account should contact us at{' '}
                <a
                  href="mailto:support@socialtide.app"
                  className="text-tide-blue hover:text-white underline transition-colors duration-300"
                >
                  support@socialtide.app
                </a>
                .
              </p>
            </section>

            <hr className="border-white/20" />

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related Policies</h2>
              <p className="leading-relaxed mb-4">
                This policy should be read alongside our other community standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="/terms-of-service" className="text-tide-blue hover:text-white underline transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-tide-blue hover:text-white underline transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
