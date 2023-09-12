import { FC, useEffect, useState } from "react"
import { Word } from "../hooks/useWords"
import s from './wordItem.module.css'
import { CSSProperties } from "react"

type Props = {
  word: Word
  currentIndex: number
}

export const WordItem: FC<Props> = ({ word, currentIndex }) => {
  const isCurrent = currentIndex === word.sort
  const [itemStyle, setItemStyle] = useState<CSSProperties>({
    top: 0,
    left: 0,
    color: 'gray'
  })
  useEffect(() => {
    setItemStyle(() => ({
      top: word.top,
      left: word.left,
      color: isCurrent ? 'rgba(251, 251, 251,.9)' : 'rgba(251,251,251,.1)',
      zIndex: isCurrent ? 1000 : 10,
      fontSize: isCurrent ? 24 : 18
    }))

  }, [word, isCurrent])
  return (
    <span tabIndex={word.sort} className={s.item} style={itemStyle}>
      {isCurrent && <i>{word.sort}-</i>}
      {word.text}
    </span>
  )
}
