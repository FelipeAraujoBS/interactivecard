import React from 'react'

import logo from "../imgs/card-logo.svg"
import "./Card.css"

function CardFront(props) {

  return (
    <div className="cardContainerFront">
      <section className="logoContainer">
        <img src={logo} alt="logo"/>
      </section>
      <section className='infoContainer'>
        <div className = 'numberContainer'>
          <h3>{props.formInfo.number === "" ? '0000 0000 0000 0000' : props.formInfo.number}</h3>
        </div>
        <div className='nameContainer'>
          <div>
            <p>{props.formInfo.name === "" ? 'John Doe' : props.formInfo.name}</p>
          </div>
          <div>
            <p>{props.formInfo.dateMM === "" && props.formInfo.dateYY === "" ? "00/00" : props.formInfo.dateMM + "/" + props.formInfo.dateYY}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CardFront