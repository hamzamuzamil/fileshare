import React, { JSX, useState, useCallback, useEffect, useRef } from 'react'
import { extractFileList } from '../fs'
import { UploadedFile } from '../types'

export default function DropZone({
  onDrop,
}: {
  onDrop: (files: UploadedFile[]) => void
}): JSX.Element {
  const [isDragging, setIsDragging] = useState(false)
  const [fileCount, setFileCount] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
    setFileCount(e.dataTransfer?.items.length || 0)
  }, [])

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault()

    const currentTarget =
      e.currentTarget === window ? window.document : e.currentTarget
    if (
      e.relatedTarget &&
      currentTarget instanceof Node &&
      currentTarget.contains(e.relatedTarget as Node)
    ) {
      return
    }

    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy'
    }
  }, [])

  const handleDrop = useCallback(
    async (e: DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      if (e.dataTransfer) {
        try {
          const files = await extractFileList(e)
          if (files.length > 0) {
            onDrop(files)
          }
        } catch (error) {
          console.error('[DropZone] Error extracting files:', error)
        }
      }
    },
    [onDrop],
  )

  const handleClick = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleFileInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const files = Array.from(e.target.files) as UploadedFile[]
        if (files.length > 0) {
          onDrop(files)
        }
        // Reset input to allow selecting the same file again
        e.target.value = ''
      }
    },
    [onDrop],
  )

  useEffect(() => {
    window.addEventListener('dragenter', handleDragEnter)
    window.addEventListener('dragleave', handleDragLeave)
    window.addEventListener('dragover', handleDragOver)
    window.addEventListener('drop', handleDrop)

    return () => {
      window.removeEventListener('dragenter', handleDragEnter)
      window.removeEventListener('dragleave', handleDragLeave)
      window.removeEventListener('dragover', handleDragOver)
      window.removeEventListener('drop', handleDrop)
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-2xl text-white transition-opacity duration-300 backdrop-blur-sm z-50 ${
          isDragging ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        Drop to select {fileCount} file{fileCount !== 1 ? 's' : ''}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileInputChange}
        multiple
      />
      <button
        id="drop-zone-button"
        type="button"
        className="block cursor-pointer relative py-6 px-8 text-lg font-semibold text-white glass-strong rounded-2xl transition-all duration-300 ease-in-out outline-none hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-white/50 shadow-xl w-full"
        onClick={handleClick}
      >
        <span className="text-center block">
          Drop a file to get started
        </span>
      </button>
    </>
  )
}
