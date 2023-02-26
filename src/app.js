import { Navbar,Home,Skills,Projects,Dotgroup,Line,Contact,Footer } from "./components"
import "./app.css"
export default function App(){
    return(
        <div>
            <div>
            <Navbar/>
        </div>
        <div>
            <Dotgroup/>
        </div>
        <div>
            <Home/>
        </div>
        <Line />
        <div>
            <Skills/>
        </div>
        <Line />
        <div>
            <Projects/>
        </div>
        <Line />
        <div>
            <Contact/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
        
    )
}