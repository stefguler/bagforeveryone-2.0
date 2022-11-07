import styled from "styled-components";

// this is the overall page wrapper inside the body.
// With 'display: flex' on the body, it was acting weird.
export const PageWrapper = styled.div `
    /* border: 2px solid green; */
    margin: 0 auto;
    display: flex;
    width: 90%;
    gap: .5em;
    padding: .5em;
    flex-direction: column;
    align-items: center;
`
// background covering dark div for readability:
export const Dark = styled.div `
    display: inline-block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
    min-width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`