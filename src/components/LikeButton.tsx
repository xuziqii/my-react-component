import React, { useState, useEffect } from "react"

const LikeButton:React.FC = () => {
  const [ like, setLike ] = useState(0)
  useEffect(() => {
    document.title = `clicked like ${like} times`
  })

  return (
    <div>
      <button
        onClick={ () => setLike(like + 1) }
      >{ like } like</button>
    </div>
  )
}

export default LikeButton
