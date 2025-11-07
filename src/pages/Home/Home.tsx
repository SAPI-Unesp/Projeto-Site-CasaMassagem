import {
  DepoimentosSection,
  SectionTitle,
  DepoimentosGrid,
  DepoimentoCard,
  DepoimentoCard2,
  DepoimentoText,
  DepoimentoAuthor
} from './Home.styles';

import {HeroSection} from './Sections/Hero/Hero'
import {ContactSection} from './Sections/Contact/Contact'
import { AboutUsSection } from './Sections/AboutUs/AboutUs';

export function Home() {
    return (
        <>
            <HeroSection/>

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