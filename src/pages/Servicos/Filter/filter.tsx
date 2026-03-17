import { CheckboxAligner, CheckboxFilter, CheckboxLabel, DividerColumn, FilterCheckboxesContainer, FilterSection, FilterSectionAligner, FilterTitle } from "./filter.style";


export function Filter() {

    const TEMP_TEST = 10;

    return (
        <>
            <FilterSectionAligner>
                <FilterTitle> Filtros </FilterTitle>
                <FilterSection>

                    <FilterCheckboxesContainer>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Massagem ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Drenagem ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>
                        
                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Estética ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                    </FilterCheckboxesContainer>

                    <DividerColumn></DividerColumn>
                    
                    <FilterCheckboxesContainer>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Corpo ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Rosto ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>
                        
                        <CheckboxAligner>
                            <CheckboxFilter type="checkbox"/>  <CheckboxLabel> Pés ({TEMP_TEST})</CheckboxLabel> 
                        </CheckboxAligner>

                    </FilterCheckboxesContainer>

                </FilterSection>
            </FilterSectionAligner>
        </>

    );


}