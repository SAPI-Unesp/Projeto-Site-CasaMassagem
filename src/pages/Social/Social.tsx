import { useEffect } from "react";

import { Description } from "./Description/Description.tsx";
import { Footer } from "../Home/Sections/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { SocialContainer } from "./Social.styles.ts";
import { Gallery } from "./Gallery/Gallery.tsx";

export function Social() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar
                items={[
                    { label: "Sobre Nós", href: "/#about" },
                    { label: "Projeto Social", href: "/projetosocial" },
                    { label: "Serviços", href: "/servicos" },
                    { label: "Contato", href: "/#contact" },
                ]}
            />
            <SocialContainer id="social">
            <Description />
            <Gallery />
            <Footer />
            </SocialContainer>
        </>
    );
}
