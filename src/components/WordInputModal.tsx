import { Input, InputRef, Modal } from "antd"
import { useEffect, useRef, useState } from "react";
import { useWordList } from "../hooks/useWords";
import { useKeyPress } from "../hooks/useKeyPress";
import { Mode, useVimKeyMaps } from "../hooks/useVimKeyMaps";

export const WordInputModal = () => {
  const [updateMode] = useVimKeyMaps(s => [s.updateMode])
  const [addWord] = useWordList(s => [s.addWord])
  const [word, setWord] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<InputRef | null>(null)

  useKeyPress('KeyI', () => {
    setIsModalOpen(true)
    updateMode(Mode.I)
  }
  )
  useKeyPress('Enter', () => {
    if (isModalOpen && word) {
      setIsModalOpen(false)
      addWord(word)
      setWord("")
      updateMode(Mode.N)
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
