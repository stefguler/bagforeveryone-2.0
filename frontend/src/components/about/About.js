import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { 
    LandingPageContainerDiv,
    PictureContainerDiv,
    ContentConteinerDiv,
    StickyButtonDiv,
} from './About.styles'
import About1 from './About1.2'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <>
        <LandingPageContainerDiv>
            <PictureContainerDiv>
                <ContentConteinerDiv>
                    <p>The bagforeveryone project aims to bring together the strengths, experiences, and talents of people by teaching the transferable skill of sewing.</p>
                    <button onClick={() => navigate("/donate")}>DONATE</button>
                </ContentConteinerDiv>
            </PictureContainerDiv>
            <StickyButtonDiv>
                <button>Stories</button>
            </StickyButtonDiv> 
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-122}
            duration={500}
            ignoreCancelEvents={true}
            >
            Click to read more
            </Link>
            <About1 />
        </LandingPageContainerDiv>
        </>
    )
}

export default LandingPage

