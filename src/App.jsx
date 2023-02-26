import React from 'react'
import { Navbar } from './components'
import About from './sections/About'
import Features from './sections/Features'
import Hero from './sections/Hero'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </>
  )
}

export default App
