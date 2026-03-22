import { Hero } from "./Hero/Hero.tsx";
import { Description } from "./Description/Description.tsx";
import { Footer } from  '../Home/Sections/Footer/Footer';
import { SocialContainer } from "./Social.styles.ts";
import { Gallery } from "./Gallery/Gallery.tsx";

export function Social() {
    return (
        <SocialContainer>
            <Hero />
            <Description />
            <Gallery />
            <Footer/>
        </SocialContainer>
    );
}