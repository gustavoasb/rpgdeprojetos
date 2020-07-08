import styled from 'styled-components';

export const BossHPContainer = styled.div`
    height: 10px;
    width: 250px;
    background: ${props => `linear-gradient(90deg, #ff0000 ${props.percentage}%, black,gray ${props.percentage+1}%)`};
    border: 1px solid black;
    margin-bottom: 1rem;
`