
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Homepage.styles'
import About2 from '../../components/about/About1.2'
import About1 from '../../components/about/About'
import About3 from '../../components/about/About1.3'

const About = () => {
  return (
    <PageWrapper>
        <Navbar />
        <About1 />
        <About2 />
        <About3 />
        <Footer />
    </PageWrapper>
  )
}

export default About

