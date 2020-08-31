import styled from 'styled-components'

export const PlayersContainer = styled.div`
    width: 75%;
    height: 30%;
    padding-right: 5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 800px) {
        padding: 0;
        width: 60%;
    }
`