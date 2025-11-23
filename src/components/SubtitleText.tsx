import React, { JSX } from 'react'

export default function SubtitleText({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <p className="text-sm text-center text-white/90 dark:text-stone-400 max-w-md">
      {children}
    </p>
  )
}
