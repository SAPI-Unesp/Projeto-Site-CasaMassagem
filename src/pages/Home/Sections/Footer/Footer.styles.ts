import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: #8F9C67;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 1.5rem 0;
  
  font-family: ${({theme}) => theme.fontsStyles.Cormorant};
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: 19px;
  
  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    height: auto;
    text-align: center;
    font-size: 14px;
  }
`;
