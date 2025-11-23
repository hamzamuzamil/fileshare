/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect } from 'vitest'
import InputLabel from '../../src/components/InputLabel'

describe('InputLabel', () => {
  it('shows tooltip on hover', () => {
    const { getByRole, getByText } = render(
      <InputLabel tooltip="tip">Label</InputLabel>,
    )
    const button = getByRole('button')
    fireEvent.mouseOver(button)
    expect(getByText('tip')).toBeInTheDocument()
  })
})
