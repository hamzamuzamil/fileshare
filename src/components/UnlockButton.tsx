import React, { JSX } from 'react'

export default function UnlockButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold glass-strong w-full"
    >
      Unlock
    </button>
  )
}
