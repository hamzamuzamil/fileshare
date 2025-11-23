import React, { JSX } from 'react'

export default function ProgressBar({
  value,
  max,
}: {
  value: number
  max: number
}): JSX.Element {
  const percentage = (value / max) * 100
  const isComplete = value === max

  return (
    <div
      id="progress-bar"
      className="w-full h-12 glass rounded-xl overflow-hidden relative shadow-lg"
    >
      <div
        id="progress-bar-fill"
        className={`h-full ${
          isComplete
            ? 'bg-gradient-to-r from-green-400 to-emerald-500'
            : 'bg-gradient-to-r from-blue-400 to-indigo-500'
        } transition-all duration-300 ease-in-out`}
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          id="progress-percentage"
          className="text-white font-bold text-shadow"
        >
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  )
}
