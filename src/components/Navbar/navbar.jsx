import react from 'react'
import { images } from '../../constatnts'
import './navbar.css'
function Navbar() {
  const [istop,setistop] = react.useState(true);
  react.useEffect(()=>{ 
    const handlescroll = ()=>{
      if(window.scrollY===0) setistop(true);
      if(window.scroll !== 0) setistop(false);
    }
    window.addEventListener('scroll',handlescroll);
    return ()=> window.removeEventListener('scroll',handlescroll)
  },[])
  const bg = istop  ? "transparent" : "pink";
    const [toggle , settoggle ] = react.useState(false);
    function change(){
      settoggle(prev => !prev);
    }
    return (
      <nav className='navbar'>
      <div className='nav-logo'>
            <h4 className='logo font-playfair'>YK</h4>
      </div>
      <ul className='list'>
        <li className='list-items'><a href='#home'>Home</a></li>
        <li className='list-items'><a href=' #about'>About</a></li>
        <li className='list-items'><a href='#projects'>Projects</a></li>
        <li className='list-items'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='small-screen'>
        <img  src={toggle ? images.close : images.menu} className="menu" onClick={change}/>
        {toggle && <div className='table'>
        <ul className='list'>
        <li className='list-items'><a href='#home' onClick={change}>Home</a></li>
        <li className='list-items'><a href=' #about' onClick={change}>About</a></li>
        <li className='list-items'><a href='#projects' onClick={change}>Projects</a></li>
        <li className='list-items'><a href='#contact' onClick={change}>contact</a></li>
      </ul>
      </div>}
      </div>
    </nav>
  )
}

export default Navbar