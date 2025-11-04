import { SectionContainer, Title, ContentContainer, ImageWrapper, TextWrapper } from "./AboutUs.style";
import MassageImage from "../../../../assets/imagem-sobrenos.png";
import { BorderedImage } from "../../../../components/BorderedImage/BorderedImage";

export function AboutUsSection() {
  return (
    <SectionContainer id="about">
      <Title>
        <h2>SOBRE NÓS</h2>
      </Title>

      <ContentContainer>
        <ImageWrapper>
          <BorderedImage
                    src={MassageImage}
                    alt="Local"
                    />
        </ImageWrapper>

        <TextWrapper>
          <p>
            O <strong>Hub Monique Ferraz</strong> nasceu do desejo de oferecer um cuidado real, que vai além da estética e alcança o bem-estar de verdade.
            Sou <strong>Monique Ferraz</strong>, massoterapeuta, e acredito que o toque certo tem o poder de transformar o dia, aliviar dores e trazer de volta a leveza que a rotina tira da gente.
          </p>
            No Hub, cada sessão é pensada com propósito — para relaxar, reduzir tensões e melhorar a qualidade de vida de quem passa por aqui. Mais do que um espaço de cuidados, o Hub é um ponto de pausa, um respiro no meio da correria.
        </TextWrapper>
      </ContentContainer>
    </SectionContainer>
  );
}
