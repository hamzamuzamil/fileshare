import { JSX } from 'react'

export function ErrorMessage({ message }: { message: string }): JSX.Element {
  return (
    <div
      className="glass bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-3 rounded-xl relative backdrop-blur-lg"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  )
}
