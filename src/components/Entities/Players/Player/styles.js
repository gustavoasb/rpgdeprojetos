import styled from 'styled-components'

export const PlayerContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const PlayerImage = styled.img`
    height: calc(100% - 2rem);
`

export const PlayerName = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    color: #fff;
    -webkit-text-stroke: 1px black;
`