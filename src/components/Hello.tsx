import React from "react"

interface HelloInterface {
  message?: string
}

const Hello: React.FunctionComponent<HelloInterface> = (props) => {
  return (
    <h1>{ props.message }</h1>
  )
}

Hello.defaultProps = {
  message: "Hello World"
}

export default Hello