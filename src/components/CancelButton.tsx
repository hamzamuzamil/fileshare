import React, { JSX } from 'react'

export default function CancelButton({
  onClick,
  text = 'Cancel',
}: {
  onClick: React.MouseEventHandler
  text?: string
}): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-8 py-3 text-sm font-medium text-white glass-strong rounded-xl hover:bg-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 flex-1 sm:flex-none"
    >
      {text}
    </button>
  )
}
