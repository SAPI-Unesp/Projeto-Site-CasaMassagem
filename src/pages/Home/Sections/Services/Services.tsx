import { SectionContainer, SectionTitle } from "./Services.styles";
import { Button } from "../../../../components/Button/Button";

export function ServicesSection(){
    return (
        <SectionContainer>
            <SectionTitle>Serviços</SectionTitle>

            <Button>Agendar Sessão</Button>
        </SectionContainer>
    );
}