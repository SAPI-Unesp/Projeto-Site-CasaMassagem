import styled from "styled-components";



export const FilterTitle = styled.h1`
    color: #805F46;
    font-weight: bold;
`;

export const FilterSection = styled.div`
    display: flex;
    width : 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
`;

export const FilterSectionAligner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-Content: center;
`

export const FilterCheckboxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const DividerColumn = styled.div`
    align-self: stretch;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 2px;
    margin-left: 50px;
    margin-right: 50px;
    background-color: #805F46;
`;


export const CheckboxAligner = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 160px;
`;

export const CheckboxFilter = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #805F46;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 10px;
    background-color: #FFFFFF;

    &:checked {
        background-color: #805F46;
    }
`;

export const CheckboxLabel = styled.label`
    color: #805F46;
    font-size: 15px;
    font-weight: bold;
`;
