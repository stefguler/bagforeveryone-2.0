import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Homepage.styles'
import About from '../../components/about/About'

const Homepage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <About />
        <Mission />
        <Footer />
    </PageWrapper>
  )
}

export default Homepage

