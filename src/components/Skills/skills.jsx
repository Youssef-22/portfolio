import react from 'react'
import { motion } from 'framer-motion'
import './skills.css'
import { images } from '../../constatnts'
import Aboutcard from '../../components/aboutcard/aboutcard'
function Skills() {
  return (
    <section id="about" className='about'>
        <div className='up'>
          <div className='left'>
              <h2><span className='span bg__color2'>About</span>{" "}Me</h2>
              <div className='line bg__color2'></div>
              <p>
                &lt;YK&gt;
                <div>
                  Hi there ,in this section you will find everything you need to know about me 
                </div>
                &lt;/YK&gt;
              </p>
          </div>
          <div className='right'>
          <img src={images.skillimg}/>
          <div className='border'></div>
          </div>
        </div>
        <motion.div 
      className='down'
      initial="hidden"
      whileInView="visible"
      viewport={{once:true,amount : 0.5}}
      transition={{delay : 0.5 ,duration:0.5}}
      variants={{
        hidden: {opacity:0,x:-50},
        visible : {opacity:1,x:0}
      }}
      >
        <Aboutcard 
            title = "01 Education"
            text = "First year computer science student at the national school of applied science Fes"
            color = 'pink'
            />
            <Aboutcard 
            title = "02 Skills"
            text = "Frontend web developer with React.js with over 5 projects C/C++/java/html/CSS/Js/react.js /node.js/express/mongodb/git/postman... "
            color = 'lightseagreen'
            />
            <Aboutcard 
            title = "03 next Step"
            text = "Currently working on improving my design wiyh figma also working on building M E R N  projects and learning game development"
            color = 'yellow'
            />
      </motion.div>
    </section>
  )
}

export default Skills