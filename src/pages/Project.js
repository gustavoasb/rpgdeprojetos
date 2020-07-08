import React from 'react'
import PageContainer from "../components/PageContainer";
import TopBar from "../components/TopBar";
import Progress from "../components/Progress";
import Grass from "../components/Grass";
import ProjectBg from "../assets/background_option_1.png";
import DefaultGrass from "../assets/grass.png";

export default function Project(){
    return(
        <PageContainer background={ProjectBg}>
            <TopBar health={2} level={9} project="Papa Jow"/>
            <Progress percentage={50} />
            <Grass img={DefaultGrass} mode={'hard-light'}/>
        </PageContainer>
    )
}