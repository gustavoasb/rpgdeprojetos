import styled from 'styled-components'

export const Container = styled.div`
    height: 45%;
    background-color: #F0FAFF;
    width: 30%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 1.5rem;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
`

export const Next = styled.div`
    margin-top: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    &:hover{
        color: gray;
    }
`