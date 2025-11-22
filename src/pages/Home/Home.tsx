import {
  HomeContainer
} from './Home.styles';

import {HeroSection} from './Sections/Hero/Hero'
import {ContactSection} from './Sections/Contact/Contact'
import { AboutUsSection } from './Sections/AboutUs/AboutUs';
import { TestimonialsSection } from './Sections/Testimonials/Testimonials';
import { ProjectSection } from './Sections/Project/Project';
import { Footer } from  './Sections/Footer/Footer';

export function Home() {
    return (
        <HomeContainer>
            <HeroSection/>

            <AboutUsSection/>

            <ProjectSection/>
            <TestimonialsSection/>

            <ContactSection>

            </ContactSection>
            <Footer/>
        </HomeContainer>
    );
}