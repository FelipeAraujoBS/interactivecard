import React from 'react'
import Sucess from "../../imgs/icon-complete.svg"

import "./Sucess.css"

function SucessPage(props) {
  return (
    <div className="sucessContainer">
        <div className='imgContainer'>
        <img className="img" src={Sucess} alt="Sucess" />
        </div>
        <div className="textContainer">
          <h3>Obrigado!</h3>
          <p>Nós adicionamos as informações do seu cartão</p>
        </div>
        <button onClick={props.onClick}>Retornar</button>
    </div>
  )
}

export default SucessPage