import React from 'react'

const Multiplicacao = (props) => {
  return (
    <div>
      <h1>
      o resultado de {props.num1} * {props.num2} = {props.num1 * props.num2}
      </h1>
    </div>
  )
}

export default Multiplicacao