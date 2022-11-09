import React from 'react'
import { 
    LandingPageContainerDiv,
    PictureContainerDiv,
    ContentConteinerDiv,
    StickyButtonDiv,
} from './About.styles'


const About = () => {
    return (
        <>
        <LandingPageContainerDiv>
            <PictureContainerDiv>
                <ContentConteinerDiv>
                    <p>The bagforeveryone project aims to bring together the strengths, experiences, and talents of people by teaching the transferable skill of sewing.</p>
                    <button>DONATE</button>
                </ContentConteinerDiv>
            </PictureContainerDiv>
            <StickyButtonDiv>
                <button>Stories</button>
            </StickyButtonDiv>
        </LandingPageContainerDiv>
        </>
    )
}

export default About