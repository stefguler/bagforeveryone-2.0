import styled from "styled-components";

// single story wrapping container:
export const StoryWrapper = styled.section `
    margin-bottom: 1em;
    // this will make the modal stick to the story in the mobile 
    // design because you scroll down as you go through the stories
    // otherwise the relative parent would be the whole section and the
    // modal would usually appear out of sight. Position fixed is not
    // suitable as it makes it unscrollable! Remove this for desktop 
    // version:
    position: relative;

    // title display:
    h3 {
        position: absolute;
        text-align: center;
        opacity: 1;
        color: white;
        text-shadow: 2px 2px 2px black;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    // to activate show on hover, set opacity
    // of h3 to 0 and use this code:
    /* h3:hover{
        opacity: 1;
    } */
`

