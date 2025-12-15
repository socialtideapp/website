'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function ConfirmContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get('token')
      const type = searchParams.get('type')

      if (!token) {
        setStatus('error')
        setMessage('Invalid confirmation link')
        return
      }

      if (!supabase) {
        setStatus('error')
        setMessage('Configuration error. Please contact support.')
        return
      }

      try {
        if (type === 'email') {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'email'
          })

          if (error) throw error

          setStatus('success')
          setMessage('Email confirmed successfully! Redirecting to app...')
          
          // Redirect to app after 2 seconds
          setTimeout(() => {
            // Redirect to your app deep link or app store
            window.location.href = 'socialtide://confirmed'
          }, 2000)
        }
      } catch (error) {
        setStatus('error')
        setMessage('Failed to confirm email. The link may have expired.')
      }
    }

    confirmEmail()
  }, [searchParams, router])

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
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
          {status === 'loading' && (
            <>
              <div className="w-16 h-16 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Confirming Your Email
              </h1>
              <p className="text-lg text-ocean-foam">
                Please wait while we verify your account...
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-sun-yellow to-sun-orange rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Email Confirmed!
              </h1>
              <p className="text-lg text-ocean-foam">
                {message}
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/80 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Confirmation Failed
              </h1>
              <p className="text-lg text-ocean-foam mb-8">
                {message}
              </p>
              <button
                onClick={() => router.push('/')}
                className="px-8 py-4 bg-gradient-to-r from-sun-orange to-sun-yellow rounded-2xl text-white font-semibold text-lg hover:scale-105 transition-all shadow-2xl"
              >
                Return to Homepage
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  )
}
