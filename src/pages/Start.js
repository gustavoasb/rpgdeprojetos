import React, { useState } from "react";
import StartBg from "../assets/background_start.jpg";
import PageContainer from "../components/PageContainer";
import { SpecialText } from "../components/PageContainer/styles";
import Box from "../components/Box";
import Skip from "../components/Skip";

export default function Start() {
  const [step, setStep] = useState(0);
  let last_step = 6;

  function handleStep() {
    if (step !== last_step) {
      setStep(step + 1);
    } else {
    }
  }

  function StepSwitch() {
    switch (step) {
      default: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>Bem vindo ao RPG de Projetos...</Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 1: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              Aqui você pode acompanhar os projetos da CJR... :)
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 2: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              Os projetos possuem atributos de{" "}
              <SpecialText color="#FF0000">Vida</SpecialText>,
              <SpecialText color="#268604">Progresso</SpecialText> e{" "}
              <SpecialText color="#3399FF">Nível</SpecialText>...
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 3: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              Um projeto perde
              <SpecialText color="#FF0000"> Vida </SpecialText>
              quando não cumpre as horas semanais. É possível recuperar vida
              cumprindo as horas nas semanas posteriores... ;)
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 4: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              O<SpecialText color="#268604"> Progresso </SpecialText>é calculado
              pela data inicial e o tempo previsto para o final do projeto...
              O.O
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 5: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              O<SpecialText color="#3399FF"> Nível </SpecialText>
              mede o desempenho da equipe, contando as horas feitas e até o
              NPS...
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
      case 6: {
        return (
          <PageContainer background={StartBg} centralize>
            <Box buttonClick={handleStep}>
              Agora você está preparado para explorar os nossos projetos, apenas
              siga em frente e boa sorte :)
            </Box>
            <Skip/>
          </PageContainer>
        );
      }
    }
  }

  return (
      <StepSwitch/>
  );
}
