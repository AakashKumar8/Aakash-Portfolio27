import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blogs from './components/Blogs'

function App() {
  return (
    <>
    <Navbar/>
    <Home />
    <About/>
    <Skills/>
    <Projects/>
    <Blogs/>
    <Contact/>
    </>
  )
}

export default App