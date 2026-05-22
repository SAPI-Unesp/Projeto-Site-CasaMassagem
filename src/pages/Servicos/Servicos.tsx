import { SocialContainer } from "../Social/Social.styles";
import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import { Topbar } from "./Topbar/topbar";
import { useState } from "react";
import type { Service } from "./Filter/Services";
import { getServiceId } from "./Filter/Services";
import { CardGrid } from "./Servicos.style";
import { useLocation } from "react-router-dom";

export function Servicos() {
    const location = useLocation();
    const openServiceId = location.state?.openServiceId;

    const [filteredServices, setFilteredServices] = useState<Service[]>([]);

    return (
        <SocialContainer>
            <Topbar />

            <Filter onFilterChange={setFilteredServices} />

            <CardGrid>
                {filteredServices.map((service) => {
                    const shouldOpen =
                        getServiceId(service) === openServiceId;

                    return (
                        <Card
                            key={getServiceId(service)}
                            title={service.title}
                            image={service.image}
                            text={service.text}
                            defaultOpen={shouldOpen}
                        />
                    );
                })}
            </CardGrid>
        </SocialContainer>
    );
}
