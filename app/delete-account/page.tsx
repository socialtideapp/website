import type { Metadata } from 'next';
import Link from 'next/link';
import ObfuscatedEmail from '../privacy-policy/ObfuscatedEmail';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Delete Account | SocialTide',
  description: 'Learn how to delete your SocialTide account and associated data.',
  alternates: {
    canonical: 'https://www.socialtide.app/delete-account'
  }
};

export default function DeleteAccount() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Delete Your Account</h1>
            <p className="text-ocean-foam text-lg">
              You can permanently delete your SocialTide account and all associated data at any time.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none text-white/90 space-y-8">

            {/* Primary method */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Delete via the App</h2>
              <p className="leading-relaxed mb-6">
                The fastest way to delete your account is directly through the SocialTide mobile app:
              </p>

              <ol className="space-y-4 pl-0 list-none">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-sun-orange to-sun-yellow text-ocean-deep font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-1">Log in to SocialTide</p>
                    <p className="text-white/80">Open the SocialTide mobile app and sign in to the account you wish to delete.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-sun-orange to-sun-yellow text-ocean-deep font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-1">Go to the Profile tab</p>
                    <p className="text-white/80">Tap the <strong className="text-white">Profile</strong> tab in the bottom navigation bar.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-sun-orange to-sun-yellow text-ocean-deep font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-1">Tap Delete Account</p>
                    <p className="text-white/80">Scroll down and tap <strong className="text-white">Delete Account</strong>, then follow the on-screen steps to confirm. Your account and all associated data will be permanently removed.</p>
                  </div>
                </li>
              </ol>
            </section>

            <hr className="border-white/20" />

            {/* Alternative method */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Alternative: Contact Support</h2>
              <p className="leading-relaxed mb-4">
                If you are unable to access the app, you can request account deletion by emailing our support team. Please note that this method takes longer because we need to verify your identity before proceeding.
              </p>
              <div className="pl-4 border-l-4 border-ocean-foam/50">
                <p className="leading-relaxed mb-2">
                  Send an email to{' '}
                  <ObfuscatedEmail />{' '}
                  with the subject line <strong className="text-white">&ldquo;Delete My Account&rdquo;</strong> and include the email address associated with your account.
                </p>
                <p className="leading-relaxed text-white/70 text-sm">
                  We will respond within 3–5 business days to confirm your identity and complete the deletion.
                </p>
              </div>
            </section>

            <hr className="border-white/20" />

            {/* What gets deleted */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Gets Deleted</h2>
              <p className="leading-relaxed mb-4">
                When your account is deleted, the following data is permanently removed:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your profile and account credentials</li>
                <li>All posts, comments, and activity history</li>
                <li>Connections and follower relationships</li>
                <li>Any personal information we hold on your behalf</li>
              </ul>
              <p className="leading-relaxed mt-4 text-white/70 text-sm">
                Deletion is permanent and cannot be undone. If you think you may want to return, consider logging out instead.
              </p>
            </section>

          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
