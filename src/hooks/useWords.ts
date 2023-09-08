import { create } from 'zustand'

export interface Word {
  text: string
  sort: number
}

type State = {
  wordList: Array<Word>
}

type Action = {
  addWord: (text: string) => void
  // deleteWordByText: (text: string) => void
  // getWordList: () => Array<Word>
}

export const useWordList = create<State & Action>((set, get) => ({
  wordList: [],
  addWord: (text) => {
    const { wordList } = get()
    console.log(wordList)
    const newWord: Word = {
      text,
      sort: wordList.length
    }
    const newList = [
      ...wordList,
      newWord
    ]
    set(() => ({ wordList: newList }))
  }
}))
