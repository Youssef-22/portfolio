import React from 'react'
import "./Dotgroup.css"
function Dotgroup() {
  return (
    <div className='dotgroup'>
        <ul className='list'>
        <div className='btn-cntn'><a href='#home'><button className='btn'></button></a></div>
        <div className='btn-cntn'><a href='#about'><button className='btn'></button></a></div>
        <div className='btn-cntn'><a href='#projects'><button className='btn'></button></a></div>
        <div className='btn-cntn'><a href='#contact'><button className='btn'></button></a></div>
        
      </ul>
    </div>
  )
}

export default Dotgroup