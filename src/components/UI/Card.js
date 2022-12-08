import React from 'react'

function Card(props) {
  return (
    <div className='Card'>
        {props.children}
    </div>
  )
}

export default Card