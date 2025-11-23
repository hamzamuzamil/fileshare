'use client'

import React, { JSX } from 'react'
import { useRotatingSpinner } from '../hooks/useRotatingSpinner'

function AetherIcon({ isRotating }: { isRotating?: boolean }): JSX.Element {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 300 300"
      fill="none"
      className={isRotating ? 'animate-spin-slow' : ''}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={isRotating ? 'Rotating aether' : 'Aether'}
    >
      <defs>
        <linearGradient id="aetherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#EC4899" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="aetherGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="140" fill="url(#aetherGlow)" />
      <circle cx="150" cy="150" r="120" fill="url(#aetherGradient)" opacity="0.3" />
      <circle cx="150" cy="150" r="100" stroke="url(#aetherGradient)" strokeWidth="3" fill="none" opacity="0.5" />
      <circle cx="150" cy="150" r="80" stroke="url(#aetherGradient)" strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="150" cy="150" r="60" stroke="url(#aetherGradient)" strokeWidth="2" fill="none" opacity="0.3" />
      <path
        d="M150 50 L150 100 M150 200 L150 250 M50 150 L100 150 M200 150 L250 150"
        stroke="url(#aetherGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="150" cy="150" r="20" fill="url(#aetherGradient)" opacity="0.8" />
    </svg>
  )
}

function Arrow({ direction }: { direction: 'up' | 'down' }): JSX.Element {
  return (
    <svg
      width="120"
      height="173"
      viewBox="0 0 232 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={
        direction === 'down'
          ? 'rotate-180 transition-transform duration-150'
          : 'transition-transform duration-150'
      }
      role="img"
      aria-label={`Arrow pointing ${direction}`}
      style={{
        viewTransitionName: 'arrow-direction',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M229.212 157.623C232.34 162.312 232.632 168.343 229.973 173.313C227.314 178.284 222.135 181.387 216.498 181.387H171.177V318.848C171.177 322.901 169.567 326.788 166.701 329.654C163.834 332.521 159.947 334.131 155.894 334.131H75.8861C71.8331 334.131 67.9461 332.521 65.0801 329.654C62.2141 326.788 60.6041 322.901 60.6041 318.848V181.387H15.2831C9.64615 181.387 4.46615 178.284 1.80715 173.313C-0.851852 168.343 -0.558859 162.312 2.56914 157.623C28.4951 118.757 79.4511 42.369 103.176 6.80196C106.011 2.55196 110.782 -3.05176e-05 115.89 -3.05176e-05C120.999 -3.05176e-05 125.769 2.55196 128.604 6.80196C152.329 42.369 203.285 118.757 229.212 157.623Z"
        fill="white"
      />
    </svg>
  )
}

export default function Spinner({
  direction,
}: {
  direction: 'up' | 'down'
}): JSX.Element {
  const isRotating = useRotatingSpinner()
  return (
    <div className="relative w-[180px] h-[180px] flex items-center justify-center">
      <AetherIcon isRotating={isRotating} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Arrow direction={direction} />
      </div>
    </div>
  )
}
