import React from 'react'

export default function StopButton({
  isDownloading,
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isDownloading?: boolean
}): React.ReactElement {
  return (
    <button
      className="px-4 py-2 text-xs text-white glass hover:scale-105 active:scale-95 rounded-lg transition-transform flex items-center font-medium"
      onClick={onClick}
    >
      <svg
        className="w-4 h-4 mr-1"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" />
      </svg>
      {isDownloading ? 'Stop Download' : 'Stop Upload'}
    </button>
  )
}
