import { create } from 'zustand'


type State = {
  isDarkMode: boolean
}

type Action = {
  setDarkMode: (value: boolean) => void
}

const LOCAL_MODE = localStorage.getItem('darkMode') !== null
  ? JSON.parse(localStorage.getItem('darkMode') as string)
  : window.matchMedia('(prefers-color-scheme: dark)').matches

export const useDarkMode = create<State & Action>((set) => ({
  isDarkMode: LOCAL_MODE,
  setDarkMode: (value) => {
    localStorage.setItem('darkMode', JSON.stringify(value))
    set(() => ({ isDarkMode: value }))
  }
}))
