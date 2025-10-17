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