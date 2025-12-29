import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'edge'
export const alt = 'SocialTide - Connect Through Daily Questions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Load the logo
  const logoData = await fetch(
    new URL('/logo.png', 'https://www.socialtide.app')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3FA9B5 0%, #9FD6C2 40%, #1F6F78 100%)',
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
            background: 'rgba(159, 214, 194, 0.2)',
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
            background: 'rgba(31, 111, 120, 0.3)',
          }}
        />

        {/* Logo */}
        <img
          src={`data:image/png;base64,${Buffer.from(logoData).toString('base64')}`}
          alt="SocialTide Logo"
          width={140}
          height={140}
          style={{
            borderRadius: 16,
            marginBottom: 32,
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          }}
        />

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
            color: '#E6F3F1',
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
            background: 'rgba(127, 182, 133, 0.25)',
            borderRadius: 50,
            border: '1px solid rgba(127, 182, 133, 0.4)',
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
