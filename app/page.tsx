export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep overflow-x-hidden">
      {/* Hero Section */}
      <main className="relative">
        {/* Animated waves background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
          {/* Header */}
          <header className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sun-yellow to-sun-orange rounded-full flex items-center justify-center shadow-xl animate-pulse-slow">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              SocialTide
            </h1>
            <p className="text-xl md:text-2xl text-ocean-foam max-w-2xl mx-auto leading-relaxed">
              Bringing people together, one question at a time
            </p>
          </header>

          {/* Main Feature */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-16 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Connection Made Simple
            </h2>
            <p className="text-lg md:text-xl text-ocean-foam text-center max-w-3xl mx-auto leading-relaxed">
              Create groups with friends, family, or colleagues. Each day, someone is randomly selected to ask the group a question. 
              No pressure, no planning—just meaningful conversations that flow naturally like the tide.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-tide-blue to-ocean-deep rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create Groups</h3>
              <p className="text-ocean-foam">Connect with the people who matter most</p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sun-orange to-sun-yellow rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Random Questions</h3>
              <p className="text-ocean-foam">Someone new asks each time—no planning needed</p>
            </div>

            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-ocean-light to-tide-blue rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Minimal Effort</h3>
              <p className="text-ocean-foam">Stay connected without the overwhelm</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-sun-orange to-sun-yellow rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ride the Tide?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Coming soon to iOS and Android
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 text-white font-semibold text-lg cursor-not-allowed">
                <span className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </span>
              </div>
              <div className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 text-white font-semibold text-lg cursor-not-allowed">
                <span className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 text-center py-12 text-ocean-foam border-t border-white/10">
          <p className="text-sm">
            © {new Date().getFullYear()} Social Tide. Available on mobile only.
          </p>
        </footer>
      </main>
    </div>
  );
}

