import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Tech from './Components/Tech'
import Works from './Components/Works'
import Feedbacks from './Components/Feedbacks'
import Contact from './Components/Contact'
import Stars from './Components/canvas/Stars'
import Cp from './Components/Cp'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black text-white overflow-hidden'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Cp />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App