import { SectionContainer, SectionTitle } from "./Services.styles";
import { Button } from "../../../../components/Button/Button";
import { Carousel } from "../../../../components/Carousel/Carousel";
import TesteImg from "../../../../assets/template.jpg"
import { useNavigate } from "react-router-dom";


export function ServicesSection(){

    const navigate = useNavigate();

    function handleClick() {
        navigate("/servicos");
        window.scrollTo(0, 0);
    }

    const meusServicos = [
        { src: TesteImg, title: "Massagem\nTerapêutica" },
        { src: TesteImg, title: "Drenagem\nLinfática" },
        { src: TesteImg, title: "Massagem\nRelaxante" },
        { src: TesteImg, title: "Massagem\nTerapêutica" },
        { src: TesteImg, title: "Drenagem\nLinfática" },
        { src: TesteImg, title: "Massagem\nRelaxante" },
        { src: TesteImg, title: "Massagem\nTerapêutica" },
        { src: TesteImg, title: "Drenagem\nLinfática" },
        { src: TesteImg, title: "Massagem\nRelaxante" },
        { src: TesteImg, title: "Drenagem\nLinfática" },
        { src: TesteImg, title: "Massagem\nRelaxante" },
        { src: TesteImg, title: "Massagem\nTerapêutica" },
        { src: TesteImg, title: "Drenagem\nLinfática" },
        { src: TesteImg, title: "Massagem\nRelaxante" },
    ];



    return (
        <SectionContainer>
            <SectionTitle>Serviços</SectionTitle>
            <Carousel items={meusServicos} borderRadius="60px" />
            <Button size="lg" onClick={handleClick}>Agendar Sessão</Button>
        </SectionContainer>
    );
}