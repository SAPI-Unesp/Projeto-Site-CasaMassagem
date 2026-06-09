import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { NavBar } from "../../components/NavBar/NavBar";
import { Card } from "./Cards/card";
import { Filter } from "./Filter/filter";
import type { Service } from "./Filter/Services";
import { getServiceId } from "./Filter/Services";
import { CardGrid, ServiceContainer } from "./Servicos.style";
import { Footer } from "../Home/Sections/Footer/Footer";

export function Servicos() {
  const location = useLocation();
  const navigate = useNavigate();

  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [openServiceId, setOpenServiceId] = useState<string | null>(
    () => location.state?.openServiceId ?? null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!openServiceId) return;

    const serviceWasRendered = filteredServices.some(
      (service) => getServiceId(service) === openServiceId
    );

    if (!serviceWasRendered) return;

    navigate(location.pathname, { replace: true, state: null });

    const timeout = window.setTimeout(() => {
      setOpenServiceId(null);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [filteredServices, location.pathname, navigate, openServiceId]);

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
      <ServiceContainer>
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
      </ServiceContainer>
      <Footer />
    </>
  );
}
