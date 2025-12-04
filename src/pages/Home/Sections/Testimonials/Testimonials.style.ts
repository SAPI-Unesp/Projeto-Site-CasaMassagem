import styled from "styled-components";

export const DepoimentosSection = styled.div`
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const SectionTitle = styled.h2`
  padding-left: 40px;
  width: 100%; 
  max-width: 1500;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.Title2};
  color: ${({ theme }) => theme.colors.marrom1};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const DepoimentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: start;
  gap: 25px; 
  justify-items: center;
  max-width: 1500px;
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
  font-size: 1.4em;
  color: black; 
  font-family: ${({theme}) => theme.fontsStyles.Cormorant};
  margin: 0;
  margin-top: 1rem;
  text-align: right;
`;