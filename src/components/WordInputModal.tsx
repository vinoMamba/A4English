import { Input, InputRef, Modal } from "antd"
import { useEffect, useRef, useState } from "react";
import { useWordList } from "../hooks/useWords";
import { useKeyPress } from "../hooks/useKeyPress";

export const WordInputModal = () => {
  const [addWord] = useWordList(s => [s.addWord])
  const [word, setWord] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<InputRef | null>(null)

  useKeyPress('Space', () => setIsModalOpen(true))
  useKeyPress('Enter', () => {
    if (isModalOpen && word) {
      setIsModalOpen(false)
      addWord(word)
      setWord("")
    }
  })

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
