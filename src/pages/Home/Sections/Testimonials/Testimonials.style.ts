import styled, { keyframes } from 'styled-components';

// --- ANIMAÇÃO ---

const scrollAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;
// --------------------------------

export const TestimonialSection = styled.div`
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
  max-width: 1500px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes?.Title2 || '2rem'};
  color: ${({ theme }) => theme.colors?.marrom1 || '#333'};
  margin-bottom: 40px;
`;

export const CarroselContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  overflow: hidden; 
  margin: 0 auto;
  padding: 5px;

  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

  &:hover > div {
    animation-play-state: paused;
  }
`;
export const CarroselTrack = styled.div`
  display: flex;
  gap: 40px;
  padding: 25px; 
  width: max-content;
  

  animation: ${scrollAnimation} 20s linear infinite; 
`;


export const TestimonialCard = styled.div`
  background-color: #d1b897; 
  border-radius: 40px;
  padding: 25px;
  box-shadow: 5px 5px 10px  rgba(0, 0, 0, 0.2); 
  text-align: left;
  
  flex-shrink: 0; 
  width: 350px; 
  min-height: 110px; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; 
  border: 3px solid transparent; 

  &:hover {
    transform: scale(1.18); 
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.3); 
    background-color: #dbbd7a;
    border-color: ${({ theme }) => theme.colors?.marrom1
  }
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  font-style: italic;
`;

export const TestimonialAuthor = styled.span`
  font-weight: bold;
  margin-top: 15px;
`;