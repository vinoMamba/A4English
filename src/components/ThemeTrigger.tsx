import SunIcon from "~icons/clarity/sun-solid"
import MoonIcon from "~icons/clarity/moon-solid"
import { useDarkMode } from "../hooks/useThemeMode"
export const ThemeTrigger = () => {
  const [isDarkMode, setDarkMode] = useDarkMode(s => [s.isDarkMode, s.setDarkMode])
  const trigger = () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <div onClick={trigger} style={{ display: 'inline-block' }}>
      {isDarkMode
        ? <MoonIcon />
        : <SunIcon />}
    </div>
  )
}
