import React, { JSX } from 'react'

export default function DownloadButton({
  onClick,
}: {
  onClick?: React.MouseEventHandler
}): JSX.Element {
  return (
    <button
      id="download-button"
      onClick={onClick}
      className="h-12 px-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold glass-strong w-full"
    >
      Download
    </button>
  )
}
