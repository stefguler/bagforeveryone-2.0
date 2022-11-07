import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Mission from '../../components/mission/Mission'
import { PageWrapper } from './Homepage.styles'
import About3 from '../../components/about/About1.3'

const Homepage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <About3 />
        <Mission />
        <Footer />
    </PageWrapper>
  )
}

export default Homepage

