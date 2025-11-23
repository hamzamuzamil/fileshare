/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect } from 'vitest'
import TermsAcceptance from '../../src/components/TermsAcceptance'

describe('TermsAcceptance', () => {
  it('opens modal', () => {
    const { getByText } = render(<TermsAcceptance />)
    fireEvent.click(getByText('our terms'))
    expect(getByText('FilePizza Terms')).toBeInTheDocument()
  })
})
