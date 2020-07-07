import React from 'react'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'

export default function Skip(){

    let history = useHistory()

    function goFoward(){
        history.push('/projetos')
    }

    return(
        <Container onClick={goFoward}>
            Pular {'>'}
        </Container>
    )
}