import React from "react";
import { BorderedImage } from "../../../components/BorderedImage/BorderedImage";
import {
  SectionContainer,
  SectionTitle,
  Subtitle,
  MotivationBox,
  MotivationText,
  GreenFrameWrapper,
  BeigeBorderFix,
  ImagesRow,
  ImageCard,
  ImageCaption,
} from "./Description.styles";

import Image1 from '../../../assets/foto-teste-social.png';

export function Description() {
  return (
    <SectionContainer>
      <SectionTitle>
        “CUIDAR DE<br />QUEM CUIDA”
      </SectionTitle>

      <GreenFrameWrapper>
          <iframe 
            width="100%" 
            height="400px"
            src={"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0"} 
            title="Projeto social" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            style={{ borderRadius: 35 }} 
          />
      </GreenFrameWrapper>

      <Subtitle>MINHA MOTIVAÇÃO</Subtitle>

      <MotivationBox>
        <MotivationText>
          O Hub Monique Ferraz acredita que o cuidado precisa alcançar quem
          dedica a vida a cuidar dos outros. Por isso, criamos o projeto
          “Cuidar de Quem Cuida”, uma ação que leva toques de Quiropraxia e
          Massagem para profissionais colaboradores das escolas.
        </MotivationText>
        <MotivationText>
          As sessões acontecem dentro das escolas e têm o objetivo de aliviar o
          estresse, promover bem-estar e recordar o poder que a massagem tem na
          vida. É uma forma de agradecimento a quem ensina.
        </MotivationText>
      </MotivationBox>

      <ImagesRow>
        <ImageCard>
            <BeigeBorderFix>
              <BorderedImage
                src={Image1}
                alt="Massagem facial"
                height="auto"
                borderWidth="1vw"
              />
            </BeigeBorderFix>
          <ImageCaption>“Parte mais marcante do texto acima escrita aqui [...]”</ImageCaption>
        
        </ImageCard>
        <ImageCard>
            <BeigeBorderFix>
              <BorderedImage
                src={Image1}
                alt="Detalhe da terapia"
                height="auto"
                borderWidth="1vw"
              />
            </BeigeBorderFix>
          <ImageCaption>“[...] Outra parte marcante!”</ImageCaption>
        </ImageCard>
      </ImagesRow>

    </SectionContainer>
  );
}