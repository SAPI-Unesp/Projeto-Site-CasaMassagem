import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import { Topbar } from "./Topbar/topbar";
import type { Service } from "./Filter/Services";
import { getServiceId } from "./Filter/Services";
import { CardGrid, ServicesContainer } from "./Servicos.style";
import { Footer } from "../Home/Sections/Footer/Footer";

export function Servicos() {
  const location = useLocation();
  const openServiceId = location.state?.openServiceId;

  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  return (
    <>
      <ServicesContainer>
        <Topbar />
        <Filter onFilterChange={setFilteredServices} />
        <CardGrid>
          {filteredServices.map((service) => {
            const serviceId = getServiceId(service);
            const shouldOpen = serviceId === openServiceId;

            return (
              <Card
                key={serviceId}
                title={service.title}
                image={service.image}
                text={service.text}
                defaultOpen={shouldOpen}
              />
            );
          })}
        </CardGrid>
      </ServicesContainer>
      <Footer />
    </>
  );
}
