import React from 'react'
import { BossContainer, BossImage, BossName } from './styles'
import BossHPBar from './BossHPBar'

export default function Boss({name, img, percentage}){
    return(
        <BossContainer>
            {/* <BossInfo> */}
                <BossName>{name}</BossName>
                <BossHPBar percentage={percentage}/>
            {/* </BossInfo> */}
            <BossImage src={img} alt="Boss"/>
        </BossContainer>
    )
}