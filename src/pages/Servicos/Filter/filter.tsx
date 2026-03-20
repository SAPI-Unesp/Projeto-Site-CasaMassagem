import { CheckboxAligner, CheckboxFilter, CheckboxLabel, DividerColumn, 
    FilterCheckboxesContainer, FilterSection, FilterSectionAligner, FilterTitle } from "./filter.style";
import { useState, useEffect } from "react";
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
        const nenhumSelecionado = Object.values(filters).every(v => !v);

        const filtered = services.filter(service => {
            if (nenhumSelecionado) return true;
            return filters[service.categoria as keyof typeof filters];
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

    // Conta quantos cards tem de cada categoria ( pra colocar no label do lado o texto da checkbox )
    const count = (categoria: string) => services.filter(s => s.categoria === categoria).length;

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
                            <CheckboxLabel>{label} ({count(key)})</CheckboxLabel>
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
                            <CheckboxLabel>{label} ({count(key)})</CheckboxLabel>
                        </CheckboxAligner>
                    ))}
                </FilterCheckboxesContainer>
            </FilterSection>
        </FilterSectionAligner>
    );
}