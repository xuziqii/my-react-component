import React, { useState, useEffect } from "react"

const MouseTracker:React.FC = () => {
  const [ position, setPosition ] = useState({x: 0, y: 0})

  useEffect(() => {
    
    const onMouseClick = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    document.addEventListener("click", onMouseClick)
    return () => {
      document.removeEventListener("click", onMouseClick)
    }
  }, [])

  return <p>x: { position.x }, y: { position.y }</p>
}

export default MouseTracker
