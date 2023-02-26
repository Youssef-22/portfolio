import React from 'react'
import "./aboutcard.css"
function Aboutcard(props) {
  const styles = {
    backgroundColor : props.color
  }
  return (
    <div className='about-card'>
      <div className='up'>
      <h1>{props.title}</h1>
      <div className='rectangle' style={{backgroundColor:props.color}}></div>
      </div>
      <div className='text-container'>
      <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Aboutcard