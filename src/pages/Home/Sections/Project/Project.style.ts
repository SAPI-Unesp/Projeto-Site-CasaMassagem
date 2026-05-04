import styled from "styled-components";
import { theme } from "../../../../styles/theme";


export const AboutUsSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.Title1};
  color: ${({ theme }) => theme.colors.marrom1}; /* Cor exata da sua imagem */
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: center;
  font-family: ${({theme}) => theme.fontsStyles.Cinzel};
  font-weight: ${({theme}) => theme.fontWeights.regular};
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  

  & > button{
    margin-top: -20px;
    margin-left: 250px;
    z-index: 2;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  background: #F2E4D4;
  border-radius: 63px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1;
  width: 100%; 
  max-width: 900px; 
  margin: 0 auto; 
  height: auto;
  aspect-ratio: 900 / 433; 
`;
export const TextWrapper = styled.div`
  background: #F2E4D4;
  border-radius: 63px;

  padding: 50px 50px 50px 50px;

  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 
              inset 0 0 0 9px rgba(255, 255, 255, 0.4);

  font-family: ${({ theme }) => theme.fontsStyles.Cormorant};
  font-size: ${({ theme }) => theme.fontSizes.Paragrafo};
  color: ${({ theme }) => theme.colors.marrom1};
  line-height: 1.7;
  text-align: justify;
  position: relative;
  z-index: 1;

  max-width: 850px;
  width: 100%;
  
  margin-top: -60px;
  margin-right: 290px;
  
  p + p {
    margin-top: 20px;
  }
`;


