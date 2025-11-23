import React, { JSX } from 'react'
import TypeBadge from './TypeBadge'

type UploadedFileLike = {
  fileName?: string
  type: string
}

export default function UploadFileList({
  files,
  onRemove,
}: {
  files: UploadedFileLike[]
  onRemove?: (index: number) => void
}): JSX.Element {
  const items = files.map((f: UploadedFileLike, i: number) => (
      <div
        key={`${f.fileName}-${i}`}
        className={`w-full border-b border-white/20 dark:border-white/10 last:border-0`}
      >
      <div className="flex justify-between items-center py-3 px-4">
        <p className="truncate text-sm font-medium text-white/90 flex-1 mr-4">
          {f.fileName}
        </p>
        <div className="flex items-center gap-3">
          <TypeBadge type={f.type} />
          {onRemove && (
            <button
              onClick={() => onRemove?.(i)}
              className="text-white/60 hover:text-white focus:outline-none transition-colors duration-200 text-lg font-bold w-6 h-6 flex items-center justify-center rounded hover:bg-white/10"
              aria-label="Remove file"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  ))

  return (
    <div className="w-full glass rounded-xl shadow-lg overflow-hidden">
      {items.length > 0 ? (
        items
      ) : (
        <div className="p-4 text-center text-white/70 text-sm">
          No files selected
        </div>
      )}
    </div>
  )
}
