import { SocialContainer } from "../Social/Social.styles";
import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import { useState } from "react";
import { services } from "./Filter/Services";

export function Servicos() {
   
    const [filters, setFilters] = useState({
        massagem: false,
        drenagem: false,
        estetica: false,
        corpo: false,
        rosto: false,
        pes: false
    });

    const filteredServices = services.filter(service => {

        const nenhumSelecionado =
            !filters.massagem &&
            !filters.drenagem &&
            !filters.estetica &&
            !filters.corpo &&
            !filters.rosto &&
            !filters.pes;

        if (nenhumSelecionado) return true;

        if (filters.massagem && service.categoria == "massagem") return true;
        if (filters.drenagem && service.categoria == "drenagem") return true;
        if (filters.estetica && service.categoria == "estetica") return true;
        if (filters.corpo && service.categoria == "corpo") return true;
        if (filters.rosto && service.categoria == "rosto") return true;
        if (filters.pes && service.categoria == "pes") return true;

        return false;
    });
    return (

        // Temporário
        <SocialContainer>


            <Filter filters={filters} setFilters={setFilters}>
        

            </Filter>
            {/*gerados a partir do array de serviços */}
            {filteredServices.map(service => (
                <Card
                    title={service.title}
                    image={service.image}
                />
            ))}
        </SocialContainer>

    );

}