import {
  HomeContainer,
  ContentWrapper,
  TextSection,
  Logo,
  Title,
  Subtitle,
  Slogan,
  ImageSection,
  MainImage,
} from './Home.styles';

// Importe suas imagens
import logoImage from '../../assets/logo.png';
import mainImage from '../../assets/image.png';

export function Home() {
  return (
    <HomeContainer>
      <ContentWrapper>
        <TextSection>
          <Logo src={logoImage} alt="Logo Monique Ferraz" />
          <Title>Monique Ferraz</Title>
          <Subtitle>MASSOTERAPEUTA</Subtitle>
        </TextSection>

        <ImageSection>
          <MainImage src={mainImage} alt="Massoterapeuta Monique Ferraz" />
        </ImageSection>

      </ContentWrapper>
      <Slogan>ALÍVIO, EQUILÍBRIO E CUIDADO EM CADA SESSÃO</Slogan>
    </HomeContainer>
  );
}
