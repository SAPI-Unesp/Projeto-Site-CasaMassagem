import { CheckboxAligner, 
    CheckboxFilter, 
    CheckboxLabel, 
    DividerColumn, 
    FilterCheckboxesContainer, 
    FilterSection, 
    FilterSectionAligner, 
    FilterTitle } from "./filter.style";
import { useState } from "react";
import { services } from "./Services";

type FilterProps = {
    filters: any;
    setFilters: React.Dispatch<React.SetStateAction<any>>;
};


export function Filter({ filters, setFilters }: FilterProps) {


    function handleChange(filterName: string) {
        setFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    }

    const TEMP_TEST = 10;

    return (
        <>
            <FilterSectionAligner>
                <FilterTitle> Filtros </FilterTitle>
                <FilterSection>

                    <FilterCheckboxesContainer>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.massagem}
                                onChange={() => handleChange("massagem")}/>  <CheckboxLabel> Massagem ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.drenagem}
                                onChange={() => handleChange("drenagem")}/>  <CheckboxLabel> Drenagem ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>
                        
                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.estetica}
                                onChange={() => handleChange("estetica")}/>  <CheckboxLabel> Estética ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                    </FilterCheckboxesContainer>

                    <DividerColumn></DividerColumn>
                    
                    <FilterCheckboxesContainer>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.corpo}
                                onChange={() => handleChange("corpo")}/>  <CheckboxLabel> Corpo ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.rosto}
                                onChange={() => handleChange("rosto")}/>  <CheckboxLabel> Rosto ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>
                        
                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox" checked={filters.pes}
                                onChange={() => handleChange("pes")}/>  <CheckboxLabel> Pés ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                    </FilterCheckboxesContainer>

                </FilterSection>
            </FilterSectionAligner>
        </>

    );
}