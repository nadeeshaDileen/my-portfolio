import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import MyImg2 from '../components/MyImg2'
import PriceCard from '../components/PriceCard'
import Work from '../components/Work'

function Project() {
  return (
    <div>
      <Navbar/>
      <MyImg2 heading="PROJECTS" text="Some of them"/>
      <Work/>
      <PriceCard/>
      <Footer/>
    </div>
  )
}

export default Project