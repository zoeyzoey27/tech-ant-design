import React from 'react'
import About from '../components/home/About'
import FAQ from '../components/home/FAQ'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import Pricing from '../components/home/Pricing'
import Works from '../components/home/Works'

const Home = () => {
  return (
    <div className='main'>
        <Hero/>
        <About/>
        <Features/>
        <Works/>
        <FAQ/>
        <Pricing/>
    </div>
  )
}

export default Home