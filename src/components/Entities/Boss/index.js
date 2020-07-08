import React from 'react'
import { BossContainer, BossImage } from './styles'

export default function Boss({name, img}){
    return(
        <BossContainer>
            {name}
            <BossImage src={img} alt="Boss"/>
        </BossContainer>
    )
}