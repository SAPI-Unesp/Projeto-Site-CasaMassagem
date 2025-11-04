import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  /*background-color: var(--global-color-green);
  opacity: 0.77;*/
  background-color: var(--global-color-green);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6rem;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    z-index: 1;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 30' preserveAspectRatio='none'%3E%3Cpath d='M0,20 C300,5 700,25 1000,10' fill='none' stroke='%23FFFFFF' stroke-width='2'/%3E%3C/svg%3E");
    
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  flex: 1;
  z-index: 2;
`;

export const HeroLogo = styled.img`
  width: 500px;
  height: auto;
  margin-bottom: 1rem;
`;

export const HeroSlogan = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 6rem;
  font-family: 'Cormorant', serif;
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: #f1f1f1;
`;

export const ImageFrame = styled.div`
  width: 55%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: var(--global-bg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 80px 0 0 80px;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 2px solid white;
    border-right: none;
    box-sizing: border-box;
    border-radius: 80px 0 0 80px;
    z-index: 3;
  }

  &::before {
    inset: 1.5px 0 1.5px 1.5px; 
  }

  &::after {
    inset: 25px 0 25px 25px;
  }
`;

export const MassagistImage = styled.img`
  width: calc(100% - 25px);
  height: calc(100% - 50px);
  object-fit: cover;
  position: relative;
  border-radius: 80px 0 0 80px;
  margin-left: auto;
  margin-right: 0;

  z-index: 1;
`;



//Depoimentos
export const DepoimentosSection = styled.section`
  padding: 40px 20px;
  background-color: #fff4ee; 
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #6b4d3a; 
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left;
  padding-left: 20px; 
  
`;

export const DepoimentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  justify-content: center;
  gap: 25px; 
  justify-items: center;
  max-width: 1600px;
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
  font-size: 1.1em;
  color: #000000ff; 
  margin: 0;
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
`;