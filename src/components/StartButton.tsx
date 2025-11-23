import React from 'react'

export default function StartButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}): React.ReactElement {
  return (
    <button
      id="start-button"
      type="button"
      onClick={onClick}
      className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] font-semibold flex-1 sm:flex-none focus:ring-2 focus:ring-white/50"
    >
      Start Upload
    </button>
  )
}
