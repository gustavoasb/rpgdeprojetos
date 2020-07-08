import React from 'react'
import { Container, ProjectName } from './styles'
import Life from './Life'
import Level from './Level'

export default function TopBar({project, health, level}){
    return(
        <Container>
            <Life health={health}/>
            <ProjectName color="Yellow">{project}</ProjectName>
            <Level value={level}/>
        </Container>
    )
}