import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LandingPage from '../../components/about/About'
import Mission from '../../components/mission/Mission'


export default function AboutPage() {

  return (
        <>
        <Mission />
        <Navbar />
        <LandingPage />
        <Footer />
        </>
  )
}