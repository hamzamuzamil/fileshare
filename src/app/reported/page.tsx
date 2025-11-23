import { JSX } from 'react'
import Spinner from '../../components/Spinner'
import Wordmark from '../../components/Wordmark'
import TitleText from '../../components/TitleText'
import ReturnHome from '../../components/ReturnHome'

export default function ReportedPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center space-y-5 py-10 max-w-md mx-auto px-4">
      <Spinner direction="down" />
      <Wordmark />

      <div className="glass-strong rounded-2xl p-6 w-full">
        <TitleText>This transfer has been halted.</TitleText>
        <div className="px-8 py-6 glass rounded-xl mt-4">
          <h3 className="text-lg font-medium text-white mb-4">
            Message from the management
          </h3>
          <p className="text-sm text-white/90 leading-relaxed mb-6">
            This transfer has been put on hold for potential violations of our terms of service. Our
            quality team is looking into it to ensure we maintain our
            high standards.
          </p>
          <div className="text-sm text-white/70 italic">
            - The AetherShare Team
          </div>
        </div>
      </div>

      <ReturnHome />
    </div>
  )
}
