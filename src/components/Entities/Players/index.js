import React from 'react'
import {PlayersContainer} from './styles'
import PlayerImg from '../../../assets/person1.png'
import Player from './Player'

export default function Players(){
    return(
        <PlayersContainer>
            <Player name={'Mayara'} img={PlayerImg} />
        </PlayersContainer>
    )
}