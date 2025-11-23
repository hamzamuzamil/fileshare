import { JSX } from 'react'

export default function Wordmark(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
        AetherShare
      </h1>
    </div>
  )
}
