import styled from "styled-components";

export const CardGrid = styled.div`

    width:100%;
    margin-top: 20px;
    height: auto;

    //Usando Flex
    /* display: flex;
    flex-wrap: wrap;   */

    //Usando Grid
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
export const ServiceContainer = styled.main`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  width: 100%;
  min-height: 100vh;
  background-color: rgba(225, 221, 212, 0.5);
`;