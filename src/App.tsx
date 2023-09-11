import { ConfigProvider, ThemeConfig } from "antd"
import { WordInputModal } from "./components/WordInputModal"
import { useWordList } from "./hooks/useWords"
import { WordItem } from "./components/WordItem"
import { useKeyPress } from "./hooks/useKeyPress"

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
  useKeyPress('Equal',plusOne)
  useKeyPress('Minus',minusOne)
  
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
