import React, { useState } from 'react'
import Card from '../UI/Card'
import Input from "./Input"

import "./Form.css"

function Form(props) {
  const [errorsValues, setErrorsValues] = useState({})
  const [buttonState, setButtonState] = useState(false)

  const handleName = (e) => {
    props.setName(e.target.value)
  }
  const handleNumber = (e) => {
    props.setNumber(e.target.value)
  }
  const handleDateMM = (e) => {
    props.setDateMM(e.target.value)
  } 
  const handleDateYY = (e) => {
    props.setDateYY(e.target.value)
  }
  const handleCvc = (e) => {
    props.setCvc(e.target.value)
  }
  
  const validate = (values) => {
    const errors = {}

    if(values.name === ""){
      errors.name = "O nome é obrigatório!" 
    }else if(!/[A-Za-z0-9]+/.test(values.name)){
      errors.name = "Apenas letras são permitidas!"
    }
    if(values.number === ""){
      errors.number = "O numero do cartão é obrigatório!"
    }else if(!/[0-9 ]+/.test(values.number)){
      errors.number = "Apenas numeros são permitidos!"
    }
    if(values.dateMM === ""){
      errors.dateMM = "A data é obrigatória!"
    }else if(!/[0-9 ]+/.test(values.dateMM)){
      errors.dateMM = "Apenas numeros são permitidos!"
    }
    if(values.dateYY === ""){
      errors.dateYY = "A data é obrigatória!"
    }else if(!/[0-9 ]+/.test(values.dateYY)){
      errors.dateYY = "Apenas numeros são permitidos!"
    }
    if(values.cvc === ""){
      errors.cvc = "A código de segurança é obrigatória!"
    }else if(!/[0-9 ]+/.test(values.cvc)){
      errors.cvc = "Apenas numeros são permitidos!"
    }

    return errors
  }
 
 
  

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrorsValues(validate(props.formInfo))
    console.log(errorsValues)
  }
  

  function cc_format(value) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];
  
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
  
  return parts.length > 1 ? parts.join(" ") : value;
  }


  return (
    <Card>
        <form onSubmit={handleSubmit} className='Form'>
          <Input errorText={errorsValues.name}  name="name" onChange={handleName} label="CARHOLDER NAME" element="input" placeholder="e.g Felipe de Araújo"/>
          <Input errorText={errorsValues.number} maxLength="19" name="number" value={cc_format(props.ccFormat)} onChange={handleNumber} label="CARD NUMBER" element="input"  placeholder="e.g 1234 5678 9123 0000 "/>
          <div className='form-date-cvc'>
          <div className='form-date'>
            <label className='label'>EXP. DATE (MM/YY)</label>
            <div>
            <Input errorText={errorsValues.dateMM} name="dateMM" maxLength="2" onChange={handleDateMM}  placeholder="MM" type='month' className element="input"/>
            <Input errorText={errorsValues.dateYY} name="dateYY" maxLength="2" onChange={handleDateYY} placeholder="YY" type="year" className element="input"/>
            </div>
          </div>
            <div className='form-cvc'>
              <label className='label'>CVC</label>
              <Input  errorText={errorsValues.cvc} name="cvc" maxLength="3" onChange={handleCvc}  placeholder="CVC" className="" element="input"/>
            </div>
          </div>
         {!buttonState ?  <button type='submit' onClick={() => setButtonState(true)} className='button'>Confirmar</button> :
          <button onClick={props.onClick} className='button-sub'>Confirmar</button>}
        </form>
    </Card>
  )
}

export default Form