import React, { useState, useEffect } from "react"

const MouseTracker:React.FC = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0})

  useEffect(() => {
    
    console.log('before addEventListener', position.x)
    const onMouseClick = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    document.addEventListener("click", onMouseClick)
    return () => {
      console.log('before removeEventListener', position.x)
      document.removeEventListener("click", onMouseClick)
    }
  })

  console.log('before render', position.x)
  return <p>x: { position.x }, y: { position.y }</p>
}

export default MouseTracker
