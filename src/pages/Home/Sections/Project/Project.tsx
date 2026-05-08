import {
  AboutUsSection,
  SectionTitle,
  ContentContainer,
  ImageWrapper,
  TextWrapper
} from './Project.style';

import { useNavigate } from "react-router-dom";

import BoxImage from "../../../../assets/foto-teste-social.png"
import { BorderedImage } from "../../../../components/BorderedImage/BorderedImage";
import { Button } from '../../../../components/Button/Button';


export function ProjectSection() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/projetosocial");
    window.scrollTo(0, 0);
  }

  return (
    <AboutUsSection id="social">
      <SectionTitle>Projeto "Cuidar de <br/> Quem Cuida"</SectionTitle>

      <ContentContainer>
        <ImageWrapper>
        <BorderedImage
                  src={BoxImage}
                  alt="projeto-social-image"
        />
        </ImageWrapper>
        <TextWrapper>
          <p>
           O Hub Monique Ferraz acredita que o cuidado precisa alcançar quem dedica a vida a cuidar dos outros. Por isso, criamos o projeto “Cuidar de Quem Cuida”, uma ação que leva o toque da Quick Massage até professores e colaboradores das escolas de Itaporanga (SP).
          </p>
        </TextWrapper>

        <Button size='md' onClick={handleClick}>Saiba mais</Button>
      </ContentContainer>

      
      
    </AboutUsSection>
  );
}