import { WordInputModal } from "./components/WordInputModal"
import { useWordList } from "./hooks/useWords"
import { WordItem } from "./components/WordItem"
import { useKeyPress } from "./hooks/useKeyPress"
import { Mode, useVimKeyMaps } from "./hooks/useVimKeyMaps"
import { Theme, Text } from '@radix-ui/themes';

function App() {
  const [mode] = useVimKeyMaps(s => [s.mode])
  const [wordList, currentIndex, plusOne, minusOne] = useWordList(s => [s.wordList, s.currentIndex, s.plusOne, s.minusOne])

  useKeyPress('KeyJ', () => {
    if (mode === Mode.N) {
      plusOne()
    }
  })

  useKeyPress('KeyK', () => {
    if (mode === Mode.N) {
      minusOne()
    }
  })

  return (
    <Theme appearance="light" accentColor="gray" grayColor="slate" panelBackground="solid" radius="full">
      <WordInputModal />
      <main>
        {wordList.length > 0 ? wordList.map(i => (<WordItem key={i.sort} word={i} currentIndex={currentIndex} />)) :
          <Text align="center" size="6" color="gray">Enter I To Start</Text>
        }
      </main>
    </Theme>
  )
}

export default App
