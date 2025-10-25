
import {
  HeroContainer,
  TextContainer,
  HeroLogo,
  HeroSlogan,
  ImageFrame,
  MassagistImage,
} from './Home.styles';

import {
  DepoimentosSection,
  SectionTitle,
  DepoimentosGrid,
  DepoimentoCard,
  DepoimentoText,
  DepoimentoAuthor
} from './Home.styles';

import logoImage from '../../assets/logo.png';
import massagistImage from '../../assets/image.png';

export function Home() {
    return (
        <>
            {/*Hero*/}
            <HeroContainer>
                <TextContainer>
                    <HeroLogo src={logoImage} alt="Logo Monique Ferraz" />
                </TextContainer>
                <ImageFrame>
                    <MassagistImage src={massagistImage} alt="Massoterapeuta Monique Ferraz" />
                </ImageFrame>
                <HeroSlogan>ALIVIO, EQUILIBRIO E CUIDADO EM CADA SESSÃO</HeroSlogan>
            </HeroContainer>

            {/*Depoimentos*/}
            <DepoimentosSection>
                <SectionTitle>DEPOIMENTOS</SectionTitle>
                <DepoimentosGrid>
                    <DepoimentoCard>
                        <DepoimentoText>"A Monique tem mãos de fada! Saí de lá renovada."</DepoimentoText>
                        <DepoimentoAuthor>@ana_lais</DepoimentoAuthor>
                    </DepoimentoCard>

                    <DepoimentoCard>
                        <DepoimentoText>"Melhor massagem que já recebi. Recomendo muito!"</DepoimentoText>
                        <DepoimentoAuthor>@carlos_souza</DepoimentoAuthor>
                    </DepoimentoCard>
                    
                    <DepoimentoCard>
                        <DepoimentoText>"Ambiente super aconchegante e profissional excelente."</DepoimentoText>
                        <DepoimentoAuthor>@juliana_m</DepoimentoAuthor>
                    </DepoimentoCard>

                     <DepoimentoCard>
                        <DepoimentoText>"A Monique tem mãos de fada! Saí de lá renovada."</DepoimentoText>
                        <DepoimentoAuthor>@ana_lais</DepoimentoAuthor>
                    </DepoimentoCard>

                    <DepoimentoCard>
                        <DepoimentoText>"Melhor massagem que já recebi. Recomendo muito!"</DepoimentoText>
                        <DepoimentoAuthor>@carlos_souza</DepoimentoAuthor>
                    </DepoimentoCard>
                    
                    <DepoimentoCard>
                        <DepoimentoText>"Ambiente super aconchegante e profissional excelente."</DepoimentoText>
                        <DepoimentoAuthor>@juliana_m</DepoimentoAuthor>
                    </DepoimentoCard>
                </DepoimentosGrid>
            </DepoimentosSection>
        </>
    );
}