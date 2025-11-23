import React, { JSX } from 'react'

export default function TitleText({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <p className="text-xl md:text-2xl text-center text-white dark:text-stone-200 max-w-2xl font-semibold leading-relaxed">
      {children}
    </p>
  )
}
