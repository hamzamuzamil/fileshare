import React, { JSX } from 'react'

export default function Loading({ text }: { text: string }): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-white/90 mt-2">{text}</p>
    </div>
  )
}
