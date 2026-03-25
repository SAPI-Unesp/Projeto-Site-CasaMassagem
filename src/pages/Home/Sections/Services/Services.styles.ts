import styled from "styled-components";

export const SectionContainer = styled.section`
width: 100%;
padding: 100px 20px;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
position: relative;   

background: linear-gradient(
    360deg,
    rgba(143, 156, 103, 0.01) 5%, 
    rgba(143, 156, 103, 0.35) 35%,  
    rgba(143, 156, 103, 0.65) 64%,  
    rgba(143, 156, 103, 1.00) 100%  
);

&::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: 0;
    border-radius: 88px 88px 0 0;
    padding: 8px;
    
    background: linear-gradient(
    180deg, 
    rgba(255, 255, 255, 0.76) 0%, 
    rgba(153, 153, 153, 0) 100%
    );

    -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    
    pointer-events: none;
  }

  border-radius: 88px 88px 0 0;

  & > button{
    margin-top: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.Title1};
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  color: ${({ theme }) => theme.colors.branco2};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;