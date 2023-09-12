import { memo } from "react"
import s from "./loading.module.scss"
export const Loading = memo(() => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <span className={s.loading}></span>
      </div>
    </div>
  )
})
