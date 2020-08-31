import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    background-color: rgba(0,0,0,0.4);
    flex-direction: row;
    padding: 0 20px;
    @media only screen and (max-width: 800px) {
        padding-top: 10px;
        box-sizing: border-box;
        height: 15%;
        flex-flow: column;
    }
`

export const ProjectName = styled.span`
    font-size: 1.5rem;
    color: ${props => props.color || `white`};
    -webkit-text-stroke: 1px black;
    text-align: center;
`