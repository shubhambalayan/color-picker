import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Image/Hero'
import Navbar from '../components/Navbar'

const Image = () => {
  return (
    <div className='bg-secondary position-relative overflow-hidden' style={{minHeight:"100vh"}}>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Image 