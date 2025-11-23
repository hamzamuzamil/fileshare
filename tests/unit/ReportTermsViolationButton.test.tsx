/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect, vi } from 'vitest'
import FilePizzaQueryClientProvider from '../../src/components/QueryClientProvider'

vi.mock('../../src/components/WebRTCProvider', () => ({
  useWebRTCPeer: () => ({ peer: { connect: vi.fn(() => ({ on: vi.fn(), close: vi.fn() })) } }),
}))

import ReportTermsViolationButton from '../../src/components/ReportTermsViolationButton'

describe('ReportTermsViolationButton', () => {
  it('opens modal on click', () => {
    const { getByText } = render(
      <FilePizzaQueryClientProvider>
        <ReportTermsViolationButton uploaderPeerID="peer" slug="slug" />
      </FilePizzaQueryClientProvider>,
    )
    fireEvent.click(getByText('Report suspicious pizza delivery'))
    expect(getByText('Found a suspicious delivery?')).toBeInTheDocument()
  })
})
