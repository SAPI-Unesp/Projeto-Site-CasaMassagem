import {
  AboutUsSection,
  SectionTitle,
  ProjectImage,
  TextBox,
  Text,
  MoreInfoButton
} from './Project.style';

// Você precisará substituir isso pelo caminho real da sua imagem
const massagemImage = "https://placehold.co/600x400/e8c1a0/7a5c4a?text=Vou por dps";

export function ProjectSection() {
  return (
    <AboutUsSection>
      <SectionTitle>Projeto "Cuidar de Quem Cuida"</SectionTitle>

      <ProjectImage 
        src={massagemImage} 
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
        <MoreInfoButton>
          Saiba Mais...
        </MoreInfoButton>
      </TextBox>
      
    </AboutUsSection>
  );
}