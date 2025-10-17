import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #97A767;
  opacity: 0.77;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6rem;
  overflow: hidden;
  position: relative; /*adicionado para o slogan*/
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
`;

export const HeroLogo = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 1rem;
`;

export const HeroTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1.1;
`;

export const HeroSubtitle = styled.h2`
  font-family: 'Cormorant', serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;
  margin: 0;
  text-transform: uppercase;
`;

export const HeroSlogan = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 6rem;
  font-family: 'Cormorant', serif;
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: #f1f1f1;
`;

export const ImageFrame = styled.div`
  width: 50%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 2px solid white;
    border-radius: 40px; 
  }

  &::before {
    inset: 15px;
  }

  &::after {
    inset: 25px;
  }
`;

export const MassagistImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
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
  margin-bottom: 50px;
  text-align: left;
  padding-left: 20px; 
`;

export const DepoimentosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px; 
  justify-items: center;
  max-width: 1600px;
  margin: 0 auto;
`;

export const DepoimentoCard = styled.div`
  background-color: #d1b897; 
  border-radius: 50px;
  padding: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 350px;
  min-height: 110px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DepoimentoText = styled.p`
  font-size: 1.2em;
  color: #5a402d; 
  margin: 0;
  font-family: 'Times New Roman', serif;
  font-style: italic;
`;

export const DepoimentoAuthor = styled.p`
  font-size: 1em;
  color: #7a604c; 
  margin: 0;
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
`;