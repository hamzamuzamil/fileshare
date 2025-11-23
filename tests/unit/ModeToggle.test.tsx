/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { describe, it, expect, vi } from 'vitest'
import { ModeToggle } from '../../src/components/ModeToggle'

const setTheme = vi.fn()
vi.mock('next-themes', () => ({ useTheme: () => ({ setTheme, resolvedTheme: 'light' }) }))

describe('ModeToggle', () => {
  it('toggles theme', () => {
    const { getByRole } = render(<ModeToggle />)
    fireEvent.click(getByRole('button'))
    expect(setTheme).toHaveBeenCalledWith('dark')
  })
})
