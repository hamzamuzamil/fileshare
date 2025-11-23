import React, { JSX, useCallback } from 'react'
import InputLabel from './InputLabel'

export default function PasswordField({
  value,
  onChange,
  isRequired = false,
  isInvalid = false,
}: {
  value: string
  onChange: (v: string) => void
  isRequired?: boolean
  isInvalid?: boolean
}): JSX.Element {
  const handleChange = useCallback(
    function (e: React.ChangeEvent<HTMLInputElement>): void {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <div className="flex flex-col w-full">
      <InputLabel
        hasError={isInvalid}
        tooltip="The downloader must provide this password to start downloading the file. If you don't specify a password here, any downloader with the link to the file will be able to download it. It is not used to encrypt the file, as this is performed by WebRTC's DTLS already."
      >
        {isRequired ? 'Password' : 'Password (optional)'}
      </InputLabel>
      <input
        autoFocus
        type="password"
        className={`w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-400 ${
          isInvalid
            ? 'border-2 border-red-400'
            : ''
        } text-white placeholder:text-white/70`}
        placeholder="Enter a secret password for this transfer..."
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
