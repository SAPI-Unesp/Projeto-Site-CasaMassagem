import { CheckboxAligner, CheckboxFilter, CheckboxLabel, DividerColumn, 
    FilterCheckboxesContainer, FilterSection, FilterSectionAligner, FilterTitle } from "./filter.style";
import { useState, useEffect, useMemo } from "react";
import { services } from "./Services.ts";
import type { Service } from "./Services.ts";

type FilterProps = {
    onFilterChange: (filtered: Service[]) => void;
};

// Limita as chaves de filtro
type FilterKeys = "massagem" | "drenagem" | "estetica" | "corpo" | "rosto" | "pes";


export function Filter({ onFilterChange }: FilterProps) {

    // Inicializa o estado dos checkbox do filter
    const [filters, setFilters] = useState<Record<FilterKeys,boolean>>({
        massagem: false,    
        drenagem: false,
        estetica: false,
        corpo: false,
        rosto: false,
        pes: false
    });
    
    // Altera o estado caso a checkbox seja selecionada
    function handleChange(filterName: FilterKeys) { 
        setFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    }

    // Caso algum filtro seja selecionado ou desselecionado e filtra os cards de acordo
    useEffect(() => {
        const filtrosAtivos = Object.keys(filters).filter(
            key => filters[key as keyof typeof filters]
        );

        if (filtrosAtivos.length === 0) {
            onFilterChange(services);
            return;
        }

        const filtered = services.filter(service => {
            return filtrosAtivos.every(filtro => service.categoria.includes(filtro));
        });

        onFilterChange(filtered);
    }, [filters]);

    // Cria o estádo de cada checkbox
    const checkboxes: { key: FilterKeys; label: string }[] = [
        { key: "massagem", label: "Massagem" },
        { key: "drenagem", label: "Drenagem" },
        { key: "estetica", label: "Estética" },
        { key: "corpo", label: "Corpo" },
        { key: "rosto", label: "Rosto" },
        { key: "pes", label: "Pés" },
    ];
    
    // Atualiza o contador indicando quantos cards fazem parte dos filtros anteriomente selecionados
    const dynamicCounts = useMemo(() => {
        const filtrosAtivos = Object.keys(filters).filter(
            key => filters[key as keyof typeof filters]
        );

        const simularContagem = (categoriaChave: FilterKeys) => {
            const novosFiltrosSimulados = filtrosAtivos.includes(categoriaChave)
                ? filtrosAtivos
                : [...filtrosAtivos, categoriaChave];

            return services.filter(service => 
                novosFiltrosSimulados.every(filtro => service.categoria.includes(filtro))
            ).length;
        };

        return {
            massagem: simularContagem("massagem"),
            drenagem: simularContagem("drenagem"),
            estetica: simularContagem("estetica"),
            corpo: simularContagem("corpo"),
            rosto: simularContagem("rosto"),
            pes: simularContagem("pes"),
        };
    }, [filters]);

    
    return (
        <FilterSectionAligner>
            <FilterTitle>Filtros</FilterTitle>
            <FilterSection>
                <FilterCheckboxesContainer>
                    {checkboxes.slice(0, 3).map(({ key, label }) => (
                        <CheckboxAligner key={key}>
                            <CheckboxFilter
                                type="checkbox"
                                checked={filters[key as keyof typeof filters]}
                                onChange={() => handleChange(key)}
                            />
                            <CheckboxLabel>{label} ({dynamicCounts[key]})</CheckboxLabel>
                        </CheckboxAligner>
                    ))}
                </FilterCheckboxesContainer>

                <DividerColumn />

                <FilterCheckboxesContainer>
                    {checkboxes.slice(3).map(({ key, label }) => (
                        <CheckboxAligner key={key}>
                            <CheckboxFilter
                                type="checkbox"
                                checked={filters[key as keyof typeof filters]}
                                onChange={() => handleChange(key)}
                            />
                            <CheckboxLabel>{label} ({dynamicCounts[key]})</CheckboxLabel>
                        </CheckboxAligner>
                    ))}
                </FilterCheckboxesContainer>
            </FilterSection>
        </FilterSectionAligner>
    );
}