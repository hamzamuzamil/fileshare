/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect, vi } from 'vitest'
import UnlockButton from '../../src/components/UnlockButton'

describe('UnlockButton', () => {
  it('calls onClick', () => {
    const fn = vi.fn()
    const { getByText } = render(<UnlockButton onClick={fn} />)
    fireEvent.click(getByText('Unlock'))
    expect(fn).toHaveBeenCalled()
  })
})
