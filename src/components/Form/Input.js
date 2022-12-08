import React from 'react'
import "./Form.css"

function Input(props) {
  
    const element = props.element === 'input' ? <input
    placeholder={props.placeholder}
    onChange={props.onChange}
    className="input"
    type={props.type}
    value={"" || props.value}
    maxLength={props.maxLength}
    required={props.required}
    name={props.name}
    pattern={props.pattern}
    /> : null

    return (
    <div className='inputDiv'>
        <label className='label'>{props.label}</label>
        {element}
        <p className='errorText'>{props.errorText}</p> 
    </div>
  )
}

export default Input