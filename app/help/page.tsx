import type { Metadata } from 'next';
import ObfuscatedEmail from '../privacy-policy/ObfuscatedEmail';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Help | SocialTide',
  description: 'SocialTide Help Center - Find answers to frequently asked questions and get support.',
  alternates: {
    canonical: 'https://www.socialtide.app/help'
  }
};

export default function Help() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Help Center</h1>
            <p className="text-ocean-foam text-lg">Find answers to common questions and get support.</p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-8">
            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              
              {/* Question 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">I didn't get the confirm signup email?</h3>
                <div className="pl-4 border-l-4 border-ocean-foam/50">
                  <p className="leading-relaxed mb-3">
                    If you haven't received your confirmation email, please check your spam or junk folder. Sometimes emails from new services can be filtered incorrectly.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-white">Help us reach your inbox:</strong> If you find our email in spam, please mark it as "Not Spam" or "Not Junk." This helps ensure future emails reach you directly.
                  </p>
                </div>
              </div>

              {/* Question 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">I didn't receive the password reset email?</h3>
                <div className="pl-4 border-l-4 border-ocean-foam/50">
                  <p className="leading-relaxed mb-3">
                    Password reset emails should arrive within a few minutes. If you don't see it in your inbox, please check your spam or junk folder.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-white">Help us reach your inbox:</strong> If you find our email in spam, please mark it as "Not Spam" or "Not Junk." This improves email delivery for all future communications.
                  </p>
                </div>
              </div>

              {/* Question 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">How can I submit feedback?</h3>
                <div className="pl-4 border-l-4 border-ocean-foam/50">
                  <p className="leading-relaxed mb-3">
                    We'd love to hear your feedback! You can submit enhancement requests, report bugs, or share general feedback directly through the SocialTide mobile app.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong className="text-white">To submit feedback:</strong>
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mb-3">
                    <li>Open the SocialTide app</li>
                    <li>Go to your Profile</li>
                    <li>Tap <strong className="text-white">Send Feedback</strong></li>
                    <li>Share your thoughts, ideas, or report any issues</li>
                  </ol>
                  <p className="leading-relaxed">
                    Your feedback helps us improve SocialTide for everyone. We read every submission and appreciate you taking the time to help make the app better!
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-white/20" />

            {/* Additional Help */}
            <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="leading-relaxed mb-4">
                If you can't find the answer to your question, don't hesitate to reach out to our support team. We're here to help!
              </p>
              <p className="leading-relaxed">
                Email us at <ObfuscatedEmail /> and we'll get back to you as soon as possible.
              </p>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
