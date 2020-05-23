import { useState, useEffect } from "react"

const useMouseMove = (deps: Array<any> = []) => {
  const [ position, setPosition ] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = function (event: MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return position
}

export default useMouseMove