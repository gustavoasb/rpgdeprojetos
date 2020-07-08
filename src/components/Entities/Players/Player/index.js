import React from 'react'
import { PlayerContainer, PlayerImage, PlayerName } from './styles'

export default function Player({name, img}){
    return(
        <PlayerContainer>
            <PlayerName>{name}</PlayerName>
            <PlayerImage src={img} alt={name} />
        </PlayerContainer>
    )
}