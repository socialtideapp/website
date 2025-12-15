import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep overflow-x-hidden flex items-center justify-center px-6">
      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-block">
            <svg
              className="w-32 h-32 text-ocean-foam mx-auto mb-6 animate-pulse-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lost at Sea
          </h2>
          <p className="text-xl text-ocean-foam mb-8 leading-relaxed">
            Looks like this page drifted away with the tide. Let's get you back to shore.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-sun-orange to-sun-yellow rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all shadow-2xl"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
