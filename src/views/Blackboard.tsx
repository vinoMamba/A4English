import { useEffect, useState } from "react"

export default function Blackboard() {
  const [value, setValue] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setValue(4)
    }, 3000)
  }, [])
  return (
    <div>Blackboard{value}</div>
  )
}

