import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialSection = styled.div`
  width: 100%;
  padding: 80px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; 
`;

export const SectionTitle = styled.h2`
  width: 100%; 
  max-width: 1500px;
  text-align: left;
  font-size: clamp(2rem, 8vw, ${({ theme }) => theme.fontSizes?.Title2 || '4rem'}); 
  color: ${({ theme }) => theme.colors?.marrom1 || '#333'};
  margin-bottom: 40px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const CarroselContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: grab;
  margin-bottom: 20px;
  
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

    &:active {
      cursor: grabbing;
    }
`;

export const CarroselTrack = styled(motion.div)`
  display: flex;
  gap: 40px;
  padding: 25px;
  width: max-content;
`;

export const TestimonialCard = styled.div`
  background-color: #d1b897; 
  border-radius: 40px;
  padding: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); 
  text-align: left;
  flex-shrink: 0; 
  width: 350px; 
  min-height: 150px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #dbbd7a;
    transform: translateY(-5px); 
  } 

  @media screen and (max-width: 468px) {
    width: 250px; 
    border-radius: 25px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  font-style: italic;
  color: #5d4037;
  line-height: 1.5;
  margin: 0;
`;

export const TestimonialAuthor = styled.span`
  font-weight: bold;
  margin-top: 15px;
  color: #000;
`;
