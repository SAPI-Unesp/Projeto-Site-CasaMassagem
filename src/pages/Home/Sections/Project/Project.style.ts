import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  overflow: hidden; 
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

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 750px; /* Tamanho da imagem */
  border-radius: 45px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3); /* Sombra forte */
  z-index: 1;
`;

export const TextBox = styled.div`
  background-color: #f7eedd;
  border-radius: 30px; 
  padding: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 650px; 
  padding-left: 20px; 
  margin-right: 350px;

  margin-top: -80px; 
  position: relative; 
  z-index: 2; 

  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;


export const Text = styled.p`
  font-size: 1.1em;
  color: #835e4e; 
  line-height: 1.6;
  text-align: left;
  margin-bottom: 25px; 
  font-family: 'Times New Roman', serif;
`;

export const MoreInfoButton = styled.button`
  background-color: #8F9779; 
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 12px 25px;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  
  align-self: center; 

 
`;