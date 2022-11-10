import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { PageWrapper } from './TeamPage.styled'
import Team from '../../components/team/Team'

const TeamPage = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Team />
        <Footer />
    </PageWrapper>
  )
}

export default TeamPage

