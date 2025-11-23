'use client'

import React, { JSX, useCallback, useState } from 'react'
import WebRTCPeerProvider from '../components/WebRTCProvider'
import DropZone from '../components/DropZone'
import UploadFileList from '../components/UploadFileList'
import Uploader from '../components/Uploader'
import PasswordField from '../components/PasswordField'
import StartButton from '../components/StartButton'
import { UploadedFile } from '../types'
import Spinner from '../components/Spinner'
import Wordmark from '../components/Wordmark'
import CancelButton from '../components/CancelButton'
import { useMemo } from 'react'
import { getFileName } from '../fs'
import TitleText from '../components/TitleText'
import SubtitleText from '../components/SubtitleText'
import { pluralize } from '../utils/pluralize'
import TermsAcceptance from '../components/TermsAcceptance'
import AddFilesButton from '../components/AddFilesButton'

function PageWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 w-full">
      <div className="flex flex-col items-center space-y-8 max-w-3xl w-full">
        <div className="flex flex-col items-center space-y-4">
          <Spinner direction="up" />
          <Wordmark />
        </div>
        <div className="glass-strong rounded-2xl p-8 md:p-10 w-full shadow-2xl space-y-6">
          {children}
        </div>
      </div>
    </div>
  )
}

function InitialState({
  onDrop,
}: {
  onDrop: (files: UploadedFile[]) => void
}): JSX.Element {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center space-y-8 w-full">
        <div className="flex flex-col items-center space-y-2">
          <TitleText>Peer-to-peer file transfers in your browser.</TitleText>
        </div>
        <div className="w-full max-w-md">
          <DropZone onDrop={onDrop} />
        </div>
        <TermsAcceptance />
      </div>
    </PageWrapper>
  )
}

function useUploaderFileListData(uploadedFiles: UploadedFile[]) {
  return useMemo(() => {
    return uploadedFiles.map((item) => ({
      fileName: getFileName(item),
      type: item.type,
    }))
  }, [uploadedFiles])
}

function ConfirmUploadState({
  uploadedFiles,
  password,
  onChangePassword,
  onCancel,
  onStart,
  onRemoveFile,
  onAddFiles,
}: {
  uploadedFiles: UploadedFile[]
  password: string
  onChangePassword: (pw: string) => void
  onCancel: () => void
  onStart: () => void
  onRemoveFile: (index: number) => void
  onAddFiles: (files: UploadedFile[]) => void
}): JSX.Element {
  const fileListData = useUploaderFileListData(uploadedFiles)
  return (
    <PageWrapper>
      <div className="flex flex-col items-center space-y-6 w-full">
        <TitleText>
          You are about to start uploading{' '}
          {pluralize(uploadedFiles.length, 'file', 'files')}.{' '}
          <AddFilesButton onAdd={onAddFiles} />
        </TitleText>
        <div className="w-full">
          <UploadFileList files={fileListData} onRemove={onRemoveFile} />
        </div>
        <div className="w-full max-w-md">
          <PasswordField value={password} onChange={onChangePassword} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <CancelButton onClick={onCancel} />
          <StartButton onClick={onStart} />
        </div>
      </div>
    </PageWrapper>
  )
}

function UploadingState({
  uploadedFiles,
  password,
  onStop,
}: {
  uploadedFiles: UploadedFile[]
  password: string
  onStop: () => void
}): JSX.Element {
  const fileListData = useUploaderFileListData(uploadedFiles)
  return (
    <PageWrapper>
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="flex flex-col items-center space-y-2">
          <TitleText>
            You are uploading {pluralize(uploadedFiles.length, 'file', 'files')}.
          </TitleText>
          <SubtitleText>
            Leave this tab open. AetherShare does not store files.
          </SubtitleText>
        </div>
        <div className="w-full">
          <UploadFileList files={fileListData} />
        </div>
        <div className="w-full">
          <WebRTCPeerProvider>
            <Uploader files={uploadedFiles} password={password} onStop={onStop} />
          </WebRTCPeerProvider>
        </div>
      </div>
    </PageWrapper>
  )
}

export default function UploadPage(): JSX.Element {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [password, setPassword] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleDrop = useCallback((files: UploadedFile[]): void => {
    setUploadedFiles(files)
  }, [])

  const handleChangePassword = useCallback((pw: string) => {
    setPassword(pw)
  }, [])

  const handleStart = useCallback(() => {
    setUploading(true)
  }, [])

  const handleStop = useCallback(() => {
    setUploading(false)
  }, [])

  const handleCancel = useCallback(() => {
    setUploadedFiles([])
    setUploading(false)
  }, [])

  const handleRemoveFile = useCallback((index: number) => {
    setUploadedFiles((fs) => fs.filter((_, i) => i !== index))
  }, [])

  const handleAddFiles = useCallback((files: UploadedFile[]) => {
    setUploadedFiles((fs) => [...fs, ...files])
  }, [])

  if (!uploadedFiles.length) {
    return <InitialState onDrop={handleDrop} />
  }

  if (!uploading) {
    return (
      <ConfirmUploadState
        uploadedFiles={uploadedFiles}
        password={password}
        onChangePassword={handleChangePassword}
        onCancel={handleCancel}
        onStart={handleStart}
        onRemoveFile={handleRemoveFile}
        onAddFiles={handleAddFiles}
      />
    )
  }

  return (
    <UploadingState
      uploadedFiles={uploadedFiles}
      password={password}
      onStop={handleStop}
    />
  )
}
