import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SocialTide - Connect Through Daily Questions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #088395 0%, #05bfdb 40%, #0a4d68 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative wave shapes */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(5, 191, 219, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(10, 77, 104, 0.3)',
          }}
        />

        {/* Logo circle with sun gradient */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            background: 'linear-gradient(135deg, #ffd93d 0%, #ff9a3d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* People icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-2px',
            marginBottom: 16,
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          SocialTide
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#e0f4f7',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Bringing people together, one question at a time
        </div>

        {/* Coming soon badge */}
        <div
          style={{
            marginTop: 40,
            padding: '12px 32px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: 50,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            fontSize: 20,
            color: 'white',
            fontWeight: 500,
          }}
        >
          Coming soon to iOS & Android
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
