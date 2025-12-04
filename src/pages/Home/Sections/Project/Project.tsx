import {
  AboutUsSection,
  SectionTitle,
  ProjectImage,
  TextBox,
  Text,
  MoreInfoButton
} from './Project.style';

import { useNavigate } from "react-router-dom";

import BoxImage from "../../../../assets/foto-teste-social.png"


export function ProjectSection() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/projetosocial");
    window.scrollTo(0, 0);
  }

  return (
    <AboutUsSection>
      <SectionTitle>Projeto "Cuidar de <br></br> Quem Cuida"</SectionTitle>

      <ProjectImage 
        src={BoxImage} 
        alt="calma" 
      />

      <TextBox>
        <Text>
          O Hub Monique Ferraz acredita que o cuidado precisa alcançar
          quem dedica a vida a cuidar dos outros. Por isso, criamos o
          projeto “Cuidar de Quem Cuida”, uma ação que leva o toque da
          Quick Massage até professores e colaboradores das escolas de
          Itaporanga (SP).
        </Text>
        <MoreInfoButton onClick={handleClick}>
          Saiba Mais...
        </MoreInfoButton>
      </TextBox>
      
    </AboutUsSection>
  );
}