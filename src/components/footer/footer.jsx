import React from 'react'
import "./footer.css"
import { images } from '../../constatnts'
function Footer() {
  return (
    <footer className='footer'>
            <div className='up'>
            <a href='https://www.linkedin.com/in/youssef-kharroubine-39622a257/' target="_blank" rel='noreferrer'><img src={images.linkedin} alt="linkedin"/></a>
            <a href='https://www.facebook.com' target="_blank" rel='noreferrer'><img src={images.facebook} alt="facebook"/></a>
            <a href='https://www.instagram.com/you_ssef_kh_/' target="_blank" rel='noreferrer'><img src={images.instagram} alt="instagram"/></a>
            </div>
            <div className='down'>
                <h1 className='bg__color2'>Youssef Kharroubine</h1>
                  <h3>+212762896164</h3>
                <h3> 2023 Kharroubine . All rights reserved</h3>
            </div>
    </footer>
  )
}

export default Footer