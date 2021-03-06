import styled from 'styled-components'

export const BossContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: #FF0000;
    width: 25%;
    height: 60%;
    @media only screen and (max-width: 800px) {
        width: 40%;
    }
`

export const BossImage = styled.img`
    height: calc(100% - 3.125rem - 10px);
    @media only screen and (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`

export const BossInfo = styled.div`
    display: flex
`

export const BossName = styled.div`
    -webkit-text-stroke: 1px black;
    margin-bottom: 1rem;
    font-size: 1.125rem;
`