import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
    height: 10px;
    width: 350px;
    margin-left: 1rem;
    background: ${props => `linear-gradient(90deg, #268604 ${props.percentage}%, black,gray ${props.percentage+1}%)`};
    border: 1px solid black;
`