
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
  DepoimentoCard2,
  DepoimentoText,
  DepoimentoAuthor
} from './Home.styles';

import {ContactSection} from './Sections/Contact/Contact'

import logoImage from '../../assets/logo.png';
import massagistImage from '../../assets/image.png';
import { AboutUsSection } from './Sections/AboutUs/AboutUs';

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

            <AboutUsSection/>

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

                     <DepoimentoCard2>
                        <DepoimentoText>"A Monique tem mãos de fada! Saí de lá renovada."</DepoimentoText>
                        <DepoimentoAuthor>@ana_lais</DepoimentoAuthor>
                    </DepoimentoCard2>

                    <DepoimentoCard2>
                        <DepoimentoText>"Melhor massagem que já recebi. Recomendo muito!"</DepoimentoText>
                        <DepoimentoAuthor>@carlos_souza</DepoimentoAuthor>
                    </DepoimentoCard2>
                    
                    <DepoimentoCard2>
                        <DepoimentoText>"Ambiente super aconchegante e profissional excelente."</DepoimentoText>
                        <DepoimentoAuthor>@juliana_m</DepoimentoAuthor>
                    </DepoimentoCard2>
                </DepoimentosGrid>
            </DepoimentosSection>

            <ContactSection>

            </ContactSection>
        </>
    );
}