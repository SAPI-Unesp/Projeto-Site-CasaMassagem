import styled from 'styled-components';

export const AppContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;

export const Logo = styled.img`
    height: 12em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    border-radius: 30%;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 0.1rem;
    color: white;
`;

// Estilos para a seção de depoimentos
export const DepoimentosSection = styled.section`
  padding: 40px 20px;
  background-color: #fff4eeff; 
  text-align: center; /* Centraliza o título */
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #6b4d3a; 
  margin-bottom: 50px;
  text-align: left; /* Alinha o título "DEPOIMENTOS" a esquerda */
  padding-left: 20px; 
`;

export const DepoimentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Colunas responsivas */
  gap: 15px; 
  justify-items: center; /* Centraliza os itens na grade */
  max-width: 1600px; /
  margin: 0 auto; /* Centraliza a grade na página */
`;

export const DepoimentoCard = styled.div`
  background-color: #d1b897; 
  border-radius: 50px; /* Cantos arredondados */
  padding: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 350px;
  max-height: 110px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Para empurrar o @ana_lais para baixo */

 
`;

export const DepoimentoText = styled.p`
  font-size: 1.2em;
  color: #5a402d; 
  margin-top: -1px;
  font-family: 'Times New Roman', serif;
  font-style: italic;
`;

export const DepoimentoAuthor = styled.p`
  font-size: 1em;
  color: #7a604c; 
  margin-bottom: -10px;
  text-align: right;
  font-weight: bold;
`;