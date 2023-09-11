import { create } from 'zustand'

export interface Word {
  text: string
  sort: number,
  top: number,
  left: number
}

type State = {
  wordList: Array<Word>
  currentIndex: number
}

type Action = {
  addWord: (text: string) => void
  updateCurrentIndex: (value: number) => void
  plusOne: () => void
  minusOne: () => void
}

export const useWordList = create<State & Action>((set, get) => ({
  wordList: [],
  currentIndex: 0,
  addWord: (text) => {
    const { wordList } = get()
    const newWord: Word = {
      text,
      sort: wordList.length,
      left: Math.floor(Math.random() * document.body.clientWidth),
      top: Math.floor(Math.random() * document.body.clientHeight)
    }
    const newList = [
      ...wordList,
      newWord
    ]
    set(() => ({ wordList: newList, currentIndex: wordList.length }))
  },
  plusOne: () => {
    const { currentIndex, wordList } = get()
    const max = wordList.length - 1
    if (currentIndex < max) {
      const newValue = currentIndex + 1
      set(() => ({ currentIndex: newValue }))
    }
  },
  minusOne: () => {
    const { currentIndex } = get()
    if (currentIndex > 0) {
      const newValue = currentIndex - 1
      set(() => ({ currentIndex: newValue }))
    }
  },
  updateCurrentIndex: (value) => {
    const { wordList } = get()
    const max = wordList.length - 1
    if (value < max) {
      set(() => ({ currentIndex: value }))
    }
  }
}))
