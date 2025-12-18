'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function ResetPasswordContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [sessionReady, setSessionReady] = useState(false)

  // Exchange the token from URL for a session
  useEffect(() => {
    const exchangeToken = async () => {
      if (!supabase) {
        setStatus('error')
        setMessage('Configuration error. Please contact support.')
        return
      }

      // Get token from URL query parameter (from email link)
      const token = searchParams.get('token')
      const type = searchParams.get('type') || 'recovery'

      if (token) {
        try {
          // Verify the recovery token and establish session
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'recovery'
          })

          if (error) throw error
          
          setSessionReady(true)
        } catch (error: any) {
          setStatus('error')
          setMessage('Invalid or expired reset link. Please request a new one.')
        }
      } else {
        // Check if there's already an active session
        const { data: { session } } = await supabase.auth.getSession()
        if (session) {
          setSessionReady(true)
        } else {
          setStatus('error')
          setMessage('Invalid reset link. Please click the link from your email.')
        }
      }
    }

    exchangeToken()
  }, [searchParams])

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setStatus('error')
      setMessage('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setStatus('error')
      setMessage('Password must be at least 8 characters')
      return
    }

    setStatus('loading')

    if (!supabase) {
      setStatus('error')
      setMessage('Configuration error. Please contact support.')
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      })

      if (error) throw error

      setStatus('success')
      setMessage('Password updated successfully! Redirecting...')
      
      // Redirect after 2 seconds
      setTimeout(() => {
        // Detect if on mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        
        if (isMobile) {
          // Try to open the app, fallback to website if app not installed
          window.location.href = 'socialtide://password-reset-success'
          // Fallback after 1 second if app doesn't open
          setTimeout(() => {
            window.location.href = 'https://www.socialtide.app'
          }, 1000)
        } else {
          // Desktop: redirect to website
          window.location.href = 'https://www.socialtide.app'
        }
      }, 2000)
    } catch (error: any) {
      setStatus('error')
      setMessage(error.message || 'Failed to reset password')
    }
  }

  // Show loading while exchanging token
  if (!sessionReady && status !== 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep overflow-x-hidden flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <p className="text-white text-lg">Verifying reset link...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep overflow-x-hidden flex items-center justify-center px-6">
      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sun-yellow to-sun-orange rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Password Reset!
              </h1>
              <p className="text-lg text-ocean-foam">
                {message}
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sun-yellow to-sun-orange rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Reset Password
                </h1>
                <p className="text-ocean-foam">
                  Enter your new password below
                </p>
              </div>

              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-white font-medium mb-2">
                    New Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-ocean-foam/60 focus:outline-none focus:ring-2 focus:ring-sun-yellow"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-white font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-ocean-foam/60 focus:outline-none focus:ring-2 focus:ring-sun-yellow"
                    placeholder="Confirm new password"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl">
                    <p className="text-white text-sm">{message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-sun-orange to-sun-yellow rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => router.push('/')}
                  className="text-ocean-foam hover:text-white transition-colors"
                >
                  Return to Homepage
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  )
}
