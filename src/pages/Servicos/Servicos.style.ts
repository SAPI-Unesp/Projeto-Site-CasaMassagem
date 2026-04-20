import styled from "styled-components";

export const CardGrid = styled.div`

    width:100%;
    margin-top: 40px;
    margin-bottom: 40px;
    height: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, 600px);

    gap : 2rem ; 
    justify-content: center;
    justify-items : center;
    align-items: center;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }

`;
