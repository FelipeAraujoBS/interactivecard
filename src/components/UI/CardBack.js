import React from 'react'

import "./Card.css"

function CardBack(props) {

  return (
    <div className='cardContainerBack'>
        <div className='cvcContainer'>
          <h3>{props.formInfo === "" ? "123" : props.formInfo}</h3>
        </div>
    </div>
  )
}

export default CardBack