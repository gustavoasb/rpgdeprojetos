import styled from 'styled-components'

export const GrassContainer = styled.div`
    background-image: ${props => `url(${props.img})`};
    background-repeat: repeat-x;
    height: 10vh;
    @media only screen and (max-width: 800px) {
        height: 5vh;
    }
    width: 100vw;
`

export const GrassOverlay = styled.div`
    z-index: 1;
    mix-blend-mode: hard-light;
    background-color: #590067;
    position: absolute;
    height: 10vh;
    bottom: 0;
    width: 100vw;
    @media only screen and (max-width: 800px) {
        height: 5vh;
    }
`