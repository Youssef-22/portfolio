import react from 'react'
import './projects.css'
import {images} from "../../constatnts"
function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='up'>
      <h2>My{" "}<span className='span bg__color2'>Projects</span></h2>
      <div className='line-container'>
              <div className='line bg__color2'></div>
      </div>
              <p>
                &lt;YK&gt;
                <div>
                  Hi there ,in this section you will find 4 of my projects ...
                </div>
                &lt;/YK&gt;
              </p>
      </div>
      <div className='down'>
        <div className='prj-card' >
        <img src={images.project1} />
        <p>Gericht : Fully responsive frontend restaurant Webpage that presents the menu and
            the gallery that shows the special plates plus other amazing sections
            React.js
            <span>
              <a className='take bg__color2' href='https://youssef-22.github.io/gericht-b/' target="_blank">Demo here</a>
            </span>
            </p>
          
        </div>
        <div className='prj-card'>
        <img src={images.project2} />
        <p>Fully responsive frontend webpage with an amazing design 
          Html / CSS / JS 
          <span>
              <a className='take bg__color2' href='https://youssef-22.github.io/music-land/' target="_blank">Demo here</a>
            </span>
        </p>
        </div>
        <div className='prj-card'>
        <img src={images.project3} />
        <p>A clone of the first page of airbnb with an amazing feature of dark mode and light mode
          React.js
          <span>
              <a className='take bg__color2' href='https://youssef-22.github.io/airbnb-clone/' target="_blank">Demo here</a>
            </span>
          </p>
        </div>
        <div className='prj-card'>
        <img src={images.project4} />
        <p>A fun webpage that lets the User creates his own meme by getting the latest
          meme's images from an API and add his own punchline to the image
          React.js
          <span>
              <a className='take bg__color2' href='https://youssef-22.github.io/meme-generator/' target="_blank">Demo here</a>
            </span>
          </p>
        </div>
          
      </div>
        
    </section> 
  )
}

export default Projects