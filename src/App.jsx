import { useState } from 'react'

import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Exp from './components/Exp.jsx'
import Webtoon from './components/Webtoon.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Home />
    <About />
    <Projects />
    <Exp />
    <Webtoon />
    <Contact />
    <Footer />
    </>
  )
    
   
    
  
}

export default App
