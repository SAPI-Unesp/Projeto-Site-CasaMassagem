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

import video from '../../../assets/image.png';
import Image1 from '../../../assets/image.png';

export function Description() {
  return (
    <SectionContainer>
      <SectionTitle>
        “CUIDAR DE<br />QUEM CUIDA”
      </SectionTitle>

      <div style={{ width: "100%", marginBottom: "3rem" }}>
        <GreenFrameWrapper>
          <BeigeBorderFix>
              <BorderedImage
                src={video}
                alt="Detalhe da terapia"
                height="400px"
              />
            </BeigeBorderFix>
        </GreenFrameWrapper>
      </div>

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
                height="400px"
              />
            </BeigeBorderFix>
          <ImageCaption>“Parte mais marcante do texto acima escrita aqui [...]”</ImageCaption>
        
        </ImageCard>
        <ImageCard>
            <BeigeBorderFix>
              <BorderedImage
                src={Image1}
                alt="Detalhe da terapia"
                height="400px" 
              />
            </BeigeBorderFix>
          <ImageCaption>“[...] Outra parte marcante!”</ImageCaption>
        </ImageCard>
      </ImagesRow>

    </SectionContainer>
  );
}