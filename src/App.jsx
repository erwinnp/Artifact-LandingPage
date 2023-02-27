import React from 'react'
import { Navbar } from './components'
import About from './sections/About'
import Features from './sections/Features'
import Hero from './sections/Hero'
import Newest from './sections/Newest'
import Newsletter from './sections/Newsletter'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Newest />
      <Newsletter />
    </>
  )
}

export default App
