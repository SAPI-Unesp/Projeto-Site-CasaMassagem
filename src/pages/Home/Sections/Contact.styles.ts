import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  background-color: #fff4ee;
  padding: 80px 20px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  padding-left: 20px; 
  text-align: left;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 35px;
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  font-weight: bold;

  span {
    color: #835e4e; 
    font-weight: 700;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    letter-spacing: 1px;
    font-weight: normal;
  }

  h2 {
    font-size: 2.5rem;
    color: #6b4d3a;
    font-weight: 900;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
      text-align: center;
    }
    span {
      display: block;
      text-align: center;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: white;
  border-radius: 30px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 580px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height:300px;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;

export const Info = styled.div`
  background: linear-gradient(
    to bottom, 
    rgba(143, 156, 103, 0.85), 
    rgba(132, 150, 79, 0.87)
  );
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: #2b1d12;
  font-size: 1rem;

  border-radius: 0 0 30px 30px;
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  font-size: 1.12rem;
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  font-weight: 700;

  svg {
    color: white;
    font-size: 1.5rem;
  }
`;
