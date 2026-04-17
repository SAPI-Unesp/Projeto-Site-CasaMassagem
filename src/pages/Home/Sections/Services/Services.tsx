import { SectionContainer, SectionTitle } from "./Services.styles";
import { Button } from "../../../../components/Button/Button";
import { Carousel } from "../../../../components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { services, getServiceId } from "../../../Servicos/Filter/Services";

export function ServicesSection() {

    const navigate = useNavigate();
    const [activeServiceId, setActiveServiceId] = useState<string>(getServiceId(services[0]));

    const meusServicos = services.map(s => ({
        src: s.image,
        title: s.title,
        serviceId: getServiceId(s),
    }));

    function handleClick() {
        navigate("/servicos", { state: { openServiceId: activeServiceId } });
        window.scrollTo(0, 0);
    }

    return (
        <SectionContainer>
            <SectionTitle>Serviços</SectionTitle>
            <Carousel
                items={meusServicos}
                imageBorderRadius="60px"
                onActiveChange={setActiveServiceId}
            />
            <Button size="lg" onClick={handleClick}>Agendar Sessão</Button>
        </SectionContainer>
    );
}