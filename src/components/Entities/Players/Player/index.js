import React from 'react'
import { PlayerContainer, PlayerImage } from './styles'

export default function Player({name, img}){
    return(
        <PlayerContainer>
            {name}
            <PlayerImage src={img} alt={name} />
        </PlayerContainer>
    )
}