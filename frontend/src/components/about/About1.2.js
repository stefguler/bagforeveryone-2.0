import React from 'react'
import { 
    AboutContainerDiv,
    AboutBagforeveryoneContainerDiv,
    HowItStartedContainerDiv,
    WorkshopsContainerDiv,
    ContentBoxDiv,
    TextBoxDiv,
    PictureBoxDiv,
    PictureDiv,
} from './About.styles'



const About2 = () => {
    return (
        <> 
        <AboutContainerDiv>
            <ContentBoxDiv>
                    <TextBoxDiv>
                        <h1>About bagforeveryone</h1>
                        <p>The project welcomes refugee and migrant communities, local Greeks, and vulnerable people residing on the Greek island of Lesvos to join in and learn how to use industrial sewing machines to craft items by hand and produce stylish shopper bags. The bags, which are all available on our website, are all made from vegan materials and purchased in the town of Mytilene, the capital of Lesvos.</p>
                        <p>Our team on the ground in Greece consists of the project leader, Christina, the procurement manager, Annie, the media coordinator, Beth, and the founder of our partner organization, Starfish Foundation, Melinda. There are also two tailors who lead production of our beautiful bags. In Switzerland, there is Diana, Olivia and Markus, who are responsible for fundraising and communication. The project is a joint initiative of the Greek non-profit organization Starfish Foundation and the Swiss association #EducationEveryone. All of the donations are reinvested back into the project.</p>
                    </TextBoxDiv>
                    <PictureBoxDiv>
                        <PictureDiv src="../assets/images/about/About1.jpg" />
                        <PictureDiv src="../assets/images/about/About2.jpg" />    
                    </PictureBoxDiv>    
            </ContentBoxDiv>
        </AboutContainerDiv>
        </>
    )
}

export default About2