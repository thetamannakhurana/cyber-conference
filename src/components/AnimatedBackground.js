'use client'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [particles, setParticles] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const particleCount = window.innerWidth < 768 ? 10 : 20
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8
    }))
    setParticles(newParticles)

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large Gradient Orbs - KEEP */}
      <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float -top-10 md:top-10 -left-10 md:-left-20"></div>
      <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float -bottom-10 md:bottom-10 -right-10 md:-right-20" style={{ animationDelay: '2s' }}></div>
      {!isMobile && (
        <div className="absolute w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      )}

      {/* SCAN LINES REMOVED - These two lines were deleted */}
      {/* <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 animate-scan"></div> */}
      {/* {!isMobile && (
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-scan" style={{ animationDelay: '4s' }}></div>
      )} */}

      {/* Floating Particles - KEEP */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400 animate-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Rotating Rings - Desktop only - KEEP */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-rotate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-blue-500/20 rounded-full animate-rotate-pulse" style={{ animationDelay: '5s' }}></div>
        </>
      )}
    </div>
  )
}
