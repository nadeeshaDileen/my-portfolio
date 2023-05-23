import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import MyImg2 from '../components/MyImg2'
import Form from '../components/Form'


function Contact() {
  return (
    <div>
    <Navbar/>
    <MyImg2 heading="CONTACT" text="Some of them"/>
    <Form/>
    <Footer/>
  </div>
  )
}

export default Contact