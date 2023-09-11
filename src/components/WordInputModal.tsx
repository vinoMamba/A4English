import { Input, InputRef, Modal } from "antd"
import { useEffect, useRef, useState } from "react";
import { useWordList } from "../hooks/useWords";

export const WordInputModal = () => {
  const [addWord] = useWordList(s => [s.addWord])
  const [word, setWord] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<InputRef | null>(null)


  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsModalOpen(true)
      }

      if (e.code === 'Enter' && isModalOpen && word) {
        setIsModalOpen(false)
        addWord(word)
        setWord("")
      }
    }

    window.addEventListener("keypress", handleKeypress)
    return () => {
      window.removeEventListener("keypress", handleKeypress)
    }
  }, [isModalOpen, addWord, word])

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        inputRef.current!.focus()
      })
    }
  }, [isModalOpen])

  return (
    <Modal open={isModalOpen} closeIcon={false} title={null} footer={null}>
      <Input
        style={{ fontSize: '16px' }}
        ref={inputRef}
        bordered={false}
        placeholder="Input Word"
        value={word}
        onChange={e => setWord(e.target.value)} />
    </Modal>
  )
}
