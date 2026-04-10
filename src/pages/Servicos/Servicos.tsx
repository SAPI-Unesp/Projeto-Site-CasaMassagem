import { SocialContainer } from "../Social/Social.styles";
import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import { Topbar } from "./Topbar/topbar";
import { useState } from "react";
import type { Service } from "./Filter/Services";
import { CardGrid } from "./Servicos.style";

export function Servicos() {

    const [filteredServices, setFilteredServices] = useState<Service[]>([]);

    return (
        <SocialContainer>
            <Topbar></Topbar>
            <Filter onFilterChange={setFilteredServices} />
            <CardGrid>
                {filteredServices.map(service => (
                    <Card
                        key={service.title + service.categoria}
                        title={service.title}
                        image={service.image}
                        text={service.text}
                    />
                ))}
            </CardGrid>    
        </SocialContainer>
    );
}