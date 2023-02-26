import react from 'react'
import {motion} from "framer-motion"
import {fileSaver} from "file-saver"
import {images} from "../../constatnts"
import { cv } from '../../constatnts'
import './home.css'
function Home() {
  return (
    <section id='home' className='home section__paddding flex__center'>
      <div className="left-side">
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount : 0.5}}
      transition={{duration:0.5}}
      variants={{
        hidden: {opacity:0,x:-50},
        visible : {opacity:1,x:0}
      }}
      >
        <p className='name'>Youssef {""}
        <span className='special'>
          Kharroubine
          <img className='special-img' src={images.brush}/>
        </span>
        </p>
        <p className='text'>
        Reliable and consistent computer science student always learning
        more, currently learning new
        technologies like designing with Figma and
        working on M E R N  projects
        </p>
      </motion.div>
      <motion.div
      className='btn-section'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount : 0.5}}
      transition={{delay : 0.2,duration:0.5}}
      variants={{
        hidden: {opacity:0,x:-50},
        visible : {opacity:1,x:0}
      }}
      >
       <a href="https://youssef-22.github.io/portfolio/YoussefKharroubinelast.pdf" download="Youssef Kharroubine Cv.pdf" target="_blank"><button className='cv-btn bg__color2'>Download CV</button></a>
        <button className='cntct-btn bg__color'><a href='#contact'>Contact Me</a></button>
      </motion.div>
      <motion.div
      className='social-media'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount : 0.5}}
      transition={{delay : 0.5,duration:0.5}}
      variants={{
        hidden: {opacity:0,x:-50},
        visible : {opacity:1,x:0}
      }}
      >
            <a href='https://www.linkedin.com/in/youssef-kharroubine-39622a257/' target="_blank" rel='noreferrer'><img src={images.linkedin} alt="linkedin"/></a>
            <a href='https://www.facebook.com' target="_blank" rel='noreferrer'><img src={images.facebook} alt="facebook"/></a>
            <a href='https://www.instagram.com/you_ssef_kh_/' target="_blank" rel='noreferrer'><img src={images.instagram} alt="instagram"/></a>
            
      </motion.div>
      </div>
      <div className='right-side'>
          <div className='border'/>
          <img src={images.me} alt='profile'/>
      </div>
    </section>
  )
}

export default Home