import React, { JSX } from 'react'
import useClipboard from '../hooks/useClipboard'
import InputLabel from './InputLabel'

export function CopyableInput({
  label,
  value,
}: {
  label: string
  value: string
}): JSX.Element {
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <div className="flex flex-col w-full">
      <InputLabel>{label}</InputLabel>
      <div className="flex w-full">
        <input
          id={`copyable-input-${label.toLowerCase().replace(/\s+/g, '-')}`}
          className="grow px-3 py-2 text-xs glass border-r-0 rounded-l text-white dark:text-stone-100 border-white/20 dark:border-white/10"
          value={value}
          readOnly
        />
        <button
          className="px-4 py-2 text-sm text-white glass-strong hover:scale-105 active:scale-95 rounded-r border-t border-r border-b border-white/20 dark:border-white/10 transition-transform"
          onClick={onCopy}
        >
          {hasCopied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
