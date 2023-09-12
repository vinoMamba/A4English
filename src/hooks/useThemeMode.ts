import { create } from 'zustand'


type State = {
  isDarkMode: boolean
}

type Action = {
  setDarkMode: (value: boolean) => void
}

export const useDarkMode = create<State & Action>((set) => ({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  setDarkMode: (value) => {
    set(() => ({ isDarkMode: value }))
  }
}))
