import styled from 'styled-components'

export const Container = styled.div`
    background-image: ${ props => `url(${props.background})`};
    height: 100vh;
    width: 100vw;
    background-size: cover;
`

export const Centralize = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SpecialText = styled.span`
    color: ${props => props.color};
`