/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect, vi } from 'vitest'
import CancelButton from '../../src/components/CancelButton'

describe('CancelButton', () => {
  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    const { getByText } = render(<CancelButton onClick={onClick} />)
    fireEvent.click(getByText('Cancel'))
    expect(onClick).toHaveBeenCalled()
  })
})
