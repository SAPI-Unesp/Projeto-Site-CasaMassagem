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
  text-align: left;
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
`;

export const CarroselTrack = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px; /* Importante ser igual ao gap para o loop funfar */
  width: max-content;
  animation: ${scrollAnimation} 20s linear infinite;
  
`;


export const TestimonialCard = styled.div`
  background-color: #d1b897; 
  border-radius: 40px;
  padding: 25px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2); 
  text-align: left;
  
  flex-shrink: 0; 
  width: 350px; 
  min-height: 110px; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  font-style: italic;
`;

export const TestimonialAuthor = styled.span`
  font-weight: bold;
  margin-top: 15px;
`;