import { create } from 'zustand'

export enum Mode {
  'N' = 'normal',
  'I' = 'insert'
}

type State = {
  mode: Mode
}

type Action = {
  updateMode: (mode: Mode) => void
}

export const useVimKeyMaps = create<State & Action>((set) => ({
  mode: Mode.N,
  updateMode: (mode) => { set(() => ({ mode })) }
}))
