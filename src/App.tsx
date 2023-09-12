import { Suspense, lazy, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Loading } from "./components/Loading"
import { useDarkMode } from "./hooks/useThemeMode"
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'

const Blackboard = lazy(() => import("./views/Blackboard"))

function App() {
  const [isDarkMode] = useDarkMode(s => [s.isDarkMode])
  useEffect(() => {
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDarkMode])
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={
            <>
              <IconAccessibility />
              <IconAccountBox style={{ fontSize: '2em', color: 'red' }} />
              <Blackboard />
            </>
          } />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
