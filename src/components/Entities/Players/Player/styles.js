import styled from 'styled-components'

export const PlayerContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: flex-end;
`

export const PlayerImage = styled.img`
    height: calc(100% - 2rem);
    @media only screen and (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`

export const PlayerName = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    -webkit-text-stroke: 1px black;
    @media only screen and (max-width: 800px) {
        font-size: 0.5rem;
        -webkit-text-stroke: 0px;
    }
`