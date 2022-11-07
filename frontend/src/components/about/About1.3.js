import React from 'react'
import { 
    AboutContainerDiv,
    ContentBoxDiv,
    TextBoxDiv,

} from './About.styles'



const About3 = () => {
    return (
        <> 
        <AboutContainerDiv>
            <ContentBoxDiv>
                    <TextBoxDiv>
                        <h1>How it started </h1>
                        <p><img src="../assets/images/about/About3.jpg" />The bagforeveryone project began with a woman named Sara. A talented sewer, Sara, had made the dangerous journey over to Europe from Afghanistan in 2018, and it was on the Greek island of Lesvos that Sara met Olivia, a volunteer from Switzerland. Sara proposed an idea to Olivia: she wanted to make bags, using her sewing skills to craft something beautiful, and she wanted to share her skills with others.</p>
                        <p><img src="../assets/images/about/About4.jpg" />Sara later received the positive news that her asylum had been accepted, and she could leave the island of Lesvos for mainland Europe. However, even with her departure from Lesvos, the project and her ideas remain as important as ever. The project allows anyone residing on Lesvos- from refugee and migrant communities living within the camp, to local Greek people, and vulnerable groups- to join in and learn from experienced tailors to use industrial sewing machines; it is a project which centres on the development of people’s skill sets, and the need to break down barriers between communities on Lesvos.</p>
                    </TextBoxDiv> 
            </ContentBoxDiv>
        </AboutContainerDiv>
        </>
    )
}

export default About3