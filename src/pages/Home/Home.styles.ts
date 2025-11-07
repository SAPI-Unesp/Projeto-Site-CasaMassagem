import styled from 'styled-components';


export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  width: 100%;
  min-height: 100vh;
  background-color: #fff4ee; 
`;

//Depoimentos
export const DepoimentosSection = styled.section`
  padding: 40px 20px;
  background-color: #fff4ee; 
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #6b4d3a; 
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left;
  padding-left: 20px; 
  
`;

export const DepoimentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  gap: 25px; 
  justify-items: center;
  max-width: 1600px;
  margin: 0 auto;
`;

export const DepoimentoCard = styled.div`
  background-color: #d1b897; 
  border-radius: 40px;
  padding: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 110px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DepoimentoCard2 = styled.div`
  background-color: #d1b897; 
  border-radius: 40px;
  padding: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 110px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DepoimentoText = styled.p`
  font-size: 1.4em;
  color: #835e4eff; 
  margin: 0;
  font-family: 'Times New Roman', serif;
  font-weight: bold;
`;

export const DepoimentoAuthor = styled.p`
  font-size: 1.1em;
  color: #000000ff; 
  margin: 0;
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
`;