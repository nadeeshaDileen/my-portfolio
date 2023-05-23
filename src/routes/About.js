import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import MyImg2 from '../components/MyImg2'
import Test from '../components/test'
import AboutContent from '../components/About/AboutContent'

const About = () => {
  return (
    <div>
    <Navbar/>
    <MyImg2 heading="About" text="Some of them"/>
    <AboutContent/>
    <Test/>
    <Footer/>
  </div>
  )
}

export default About