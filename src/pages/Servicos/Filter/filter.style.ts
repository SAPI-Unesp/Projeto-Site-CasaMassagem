import styled from "styled-components";

const colors = {
    brownText: "#7A5538",
    brownBorder: "#886345",
    beigeBackground: "#EBE6D9"
};

export const FilterSectionAligner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
`;

export const FilterTitle = styled.h2`
    color: ${colors.brownText};
    font-size: ${({ theme }) => theme.fontSizes.Title1};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 25px;

    @media(max-width: 768px){
        font-size: 1.5rem;
    }
`;

export const FilterSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    height: auto;
    gap: 40px;

    @media(max-width: 768px){
        gap: 30px;
        max-width: 280px;
    }
`;

export const FilterCheckboxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    width: 150px;

    @media(max-width: 768px){
        width: 100%;
        flex: 1;
    }
`;

export const DividerColumn = styled.div`
    width: 1.5px;
    height: 110px;
    margin-left: 6%;
    background-color: ${colors.brownBorder};
    flex-shrink: 0;

    @media(max-width: 768px){
        height: 100px;
    }
`;

export const CheckboxAligner = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

`;

export const CheckboxFilter = styled.input`
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    min-width: 18px;
    border: 2px solid ${colors.brownBorder};
    
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    &:checked {
        background-color: ${colors.brownBorder};
    }

    &:checked::after {
        content: '';
        position: absolute;
        top: 1px;
        left: 5px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export const CheckboxLabel = styled.label`
    color: ${colors.brownText};
    font-size: 1.1rem;
    font-weight: 600;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes.Paragrafo};

    @media(max-width: 768px){
        font-size: 0.9rem;
    }
`;