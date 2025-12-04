import { Hero } from "./Hero/Hero.tsx";
import { Description } from "./Description/Description.tsx";
import { Footer } from  '../Home/Sections/Footer/Footer';
import { SocialContainer } from "./Social.styles.ts";

export function Social() {
    return (
        <SocialContainer>
            <Hero />
            <Description />
            <Footer/>
        </SocialContainer>
    );
}