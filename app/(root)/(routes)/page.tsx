import { Hero } from '@/components/home/animated-hero'
import Contact from '@/components/home/contact'
import { About } from '@/components/home/fleet-showcase'
import { Fleet } from '@/components/home/vans-slider'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Fleet/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home