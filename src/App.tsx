import { ConfigProvider, ThemeConfig } from "antd"
import { WordInputModal } from "./components/WordInputModal"
import { useWordList } from "./hooks/useWords"

function App() {
  const [wordList] = useWordList(s => [s.wordList])
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


  return (
    <>
      <ConfigProvider theme={theme}>
        <WordInputModal />
        <main>
          {wordList.length > 0 ? wordList.map(i => (<span>{i.text}</span>)) : "Space Start"}
        </main>
      </ConfigProvider >
    </>
  )
}

export default App
