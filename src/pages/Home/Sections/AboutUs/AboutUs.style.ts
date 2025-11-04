import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  background: #fff4ee;

  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  h2 {
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.Title};
    color: #5e4633;
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  background: #F2E4D4;
  border-radius: 63px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  background: #F2E4D4;
  border-radius: 63px;

  //melhorar abordagem para responsividade
  margin-left: -100px;
  padding: 50px 50px 50px 150px;
  
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1), 
              inset 0 0 0 9px rgba(255, 255, 255, 0.4);

  font-family: ${({ theme }) => theme.fontsStyles.Cormorant};
  font-size: 1.4rem;
  color: #6b4f3b;
  line-height: 1.7;
  text-align: justify;
  position: relative;
  z-index: 1;

  p + p {
    margin-top: 20px;
  }
`;

