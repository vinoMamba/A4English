import { FC, useEffect, useState } from "react"
import { Word } from "../hooks/useWords"
import s from './wordItem.module.css'
import { CSSProperties } from "react"

type Props = {
  word: Word
  currentIndex: number
}

export const WordItem: FC<Props> = ({ word, currentIndex }) => {
  const [itemStyle, setItemStyle] = useState<CSSProperties>({
    top: 0,
    left: 0,
    color: 'gray'
  })
  useEffect(() => {
    setItemStyle(() => ({
      top: word.top,
      left: word.left,
      color: currentIndex === word.sort ? 'red' : 'gray'
    }))

  }, [word, currentIndex])
  return (
    <span tabIndex={word.sort} className={s.item} style={itemStyle}>{word.text}</span>
  )
}
