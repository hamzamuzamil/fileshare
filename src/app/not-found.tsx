import { JSX } from 'react'
import Spinner from '../components/Spinner'
import Wordmark from '../components/Wordmark'
import ReturnHome from '../components/ReturnHome'
import TitleText from '../components/TitleText'

export const metadata = {
  title: 'AetherShare - 404: Page Not Found',
  description: 'Oops! This page seems to be missing.',
}

export default async function NotFound(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col items-center space-y-5 py-10 max-w-2xl mx-auto px-4">
      <Spinner direction="down" />
      <Wordmark />
      <div className="glass-strong rounded-2xl p-6 w-full">
        <TitleText>404: Looks like this page got lost in the aether!</TitleText>
        <ReturnHome />
      </div>
    </div>
  )
}
