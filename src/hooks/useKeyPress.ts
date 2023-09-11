import { useEffect } from "react"

export const useKeyPress = (key: string, fn: Fn) => {
  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      if (key === e.code) {
        fn()
      }
    }
    window.addEventListener("keypress", handleKeypress)
    return () => {
      window.removeEventListener("keypress", handleKeypress)
    }
  }, [key, fn])
}
