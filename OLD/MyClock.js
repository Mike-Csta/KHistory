import React, { useState, useEffect } from "react"

const MyClock = () => {
  const Today = new Date()
  let h = Today.getHours()
  let m = Today.getSeconds()

  const [time, setTime] = useState(h + ":" + m)
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(h + ":" + m)
    }, 1000)
    clearInterval(timerId)
  }, [])
  return time
}

export default MyClock
