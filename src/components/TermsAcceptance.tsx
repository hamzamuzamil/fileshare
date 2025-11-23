'use client'

import { JSX, useState } from 'react'
import CancelButton from './CancelButton'

export default function TermsAcceptance(): JSX.Element {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex justify-center">
        <span className="text-xs text-white/80">
          By selecting a file, you agree to{' '}
          <button
            onClick={() => setShowModal(true)}
            className="underline hover:text-white transition-colors duration-200"
            aria-label="View upload terms"
          >
            our terms
          </button>
          .
        </span>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setShowModal(false)}
        >
          <div
            className="glass-strong rounded-xl p-8 max-w-md w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-title"
              className="text-xl font-bold mb-4 text-white"
            >
              AetherShare Terms
            </h2>

            <div className="space-y-4 text-white/90">
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-3 px-4 py-2 rounded-lg glass">
                  <span className="text-base">📤</span>
                  <span className="text-sm">
                    Files are shared directly between browsers — no server
                    storage
                  </span>
                </li>
                <li className="flex items-start gap-3 px-4 py-2 rounded-lg glass">
                  <span className="text-base">✅</span>
                  <span className="text-sm">
                    Only upload files you have the right to share
                  </span>
                </li>
                <li className="flex items-start gap-3 px-4 py-2 rounded-lg glass">
                  <span className="text-base">🔒</span>
                  <span className="text-sm">
                    Share download links only with known recipients
                  </span>
                </li>
                <li className="flex items-start gap-3 px-4 py-2 rounded-lg glass">
                  <span className="text-base">⚠️</span>
                  <span className="text-sm">
                    No illegal or harmful content allowed
                  </span>
                </li>
              </ul>

              <p className="text-sm italic">
                By uploading a file, you confirm that you understand and agree
                to these terms.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <CancelButton
                text="Got it!"
                onClick={() => setShowModal(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
