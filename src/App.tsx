import { ConfigProvider, ThemeConfig } from "antd"
import { WordInputModal } from "./components/WordInputModal"
import { useWordList } from "./hooks/useWords"
import { WordItem } from "./components/WordItem"
import { useEffect } from "react"

function App() {
  const [wordList, currentIndex, plusOne, minusOne] = useWordList(s => [s.wordList, s.currentIndex, s.plusOne, s.minusOne])
  const theme: ThemeConfig = {
    token: {
      colorPrimary: '#343a40',
    },
    components: {
      Modal: {
        contentBg: '#fafafa',
        headerBg: '#fafafa'
      },
      Tag: {
        defaultBg: '#ededed',
        defaultColor: '#666666'
      },
    }
  }

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent) => {
      if (e.code === 'Equal') {
        plusOne()
      }
      if (e.code === 'Minus') {
        minusOne()
      }
    }
    window.addEventListener("keypress", handleKeypress)
    return () => {
      window.removeEventListener("keypress", handleKeypress)
    }
  }, [minusOne, plusOne])

  return (
    <>
      <ConfigProvider theme={theme}>
        <WordInputModal />
        <main>
          {wordList.length > 0 ? wordList.map(i => (<WordItem key={i.sort} word={i} currentIndex={currentIndex} />)) : "Space Start"}
        </main>
      </ConfigProvider >
    </>
  )
}

export default App
