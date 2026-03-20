import { SocialContainer } from "../Social/Social.styles";
import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import { useState } from "react";
import type { Service } from "./Filter/Services";

export function Servicos() {

    const [filteredServices, setFilteredServices] = useState<Service[]>([]);

    return (
        <SocialContainer>
            <Filter onFilterChange={setFilteredServices} />

            {filteredServices.map(service => (
                <Card
                    key={service.title + service.categoria}
                    title={service.title}
                    image={service.image}
                />
            ))}
        </SocialContainer>
    );
}