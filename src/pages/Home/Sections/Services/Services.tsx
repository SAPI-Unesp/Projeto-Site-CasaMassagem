import { SectionContainer, SectionTitle } from "./Services.styles";
import { Button } from "../../../../components/Button/Button";
import { Carousel } from "../../../../components/Carousel/Carousel";
import TesteImg from "../../../../assets/template.jpg"

export function ServicesSection(){

    const meusServicos = [
        { src: TesteImg, title: "Massagem Terapêutica" },
        { src: TesteImg, title: "Drenagem Linfática" },
        { src: TesteImg, title: "Massagem Relaxante" },
        { src: TesteImg, title: "Massagem Terapêutica" },
        { src: TesteImg, title: "Drenagem Linfática" },
        { src: TesteImg, title: "Massagem Relaxante" },
        { src: TesteImg, title: "Massagem Terapêutica" },
        { src: TesteImg, title: "Drenagem Linfática" },
        { src: TesteImg, title: "Massagem Relaxante" },
    ];



    return (
        <SectionContainer>
            <SectionTitle>Serviços</SectionTitle>
            <Carousel items={meusServicos} borderRadius="60px" />
            <Button>Agendar Sessão</Button>
        </SectionContainer>
    );
}