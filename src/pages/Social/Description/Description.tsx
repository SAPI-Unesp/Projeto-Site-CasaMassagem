import React from "react";
import { BorderedImage } from "../../../components/BorderedImage/BorderedImage";
import {
  SectionContainer,
  ImageSideWrapper,
  ContentSideWrapper,
  SectionTitle,
  MotivationBox,
  MotivationText,
  ImagesRow,
  ImageCard,
  ImageCaption,
} from "./Description.styles";

export function Description() {
  return (
    <SectionContainer>
      <ImageSideWrapper>
        <img
          src="../../../assets/image.png"
          alt=""
          className="main-image"
        />
      </ImageSideWrapper>
      <ContentSideWrapper>
        <SectionTitle>“Cuidar de quem cuida”</SectionTitle>
        <h2 className="subtitle">MINHA MOTIVAÇÃO</h2>

        <MotivationBox>
          <MotivationText>
            O Hub Monique Ferraz acredita que o cuidado precisa alcançar quem
            dedica a vida a cuidar dos outros. Por isso, criamos o projeto
            “Cuidar de Quem Cuida”, uma ação que leva toques de Quiropraxia e
            Massagem para profissionais colaboradores das escolas de Itapecerica
            (SP).
            <br />
            <br />
            As sessões acontecem dentro das escolas e têm o objetivo de aliviar o
            estresse, promover bem-estar e recordar o poder que a massagem tem na
            vida. É uma forma de agradecimento e reconhecimento a quem ensina,
            forma e inspira tantas pessoas.
          </MotivationText>
        </MotivationBox>

        <ImagesRow>
          <ImageCard>
            <BorderedImage src="../../../assets/image.png" alt="" />
            <ImageCaption>Toque que acolhe</ImageCaption>
          </ImageCard>

          <ImageCard>
            <BorderedImage src="../../../assets/image.png" alt="" />
            <ImageCaption>Bem-estar na escola</ImageCaption>
          </ImageCard>
        </ImagesRow>
      </ContentSideWrapper>

    </SectionContainer>
  );
}