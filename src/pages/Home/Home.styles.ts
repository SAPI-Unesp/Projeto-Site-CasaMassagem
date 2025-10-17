import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: #a7a98c; /* Cor de fundo principal */
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif; /* Use a fonte que preferir */
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
  padding-right: 2rem;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 0.5rem 0 0 0;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 30px 80px / 80px 30px;
  padding: 1.5rem;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.15);
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px 60px / 60px 20px;
  object-fit: cover;
`;

export const Slogan = styled.p`
  color: white;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 2rem;
  text-align: center;
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