import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled(motion.section)`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sectionGap} 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

export const Title = styled(motion.div)`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    h2 {
        font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        font-size: ${({ theme }) => theme.fontSizes.Title1};
        color: ${({ theme }) => theme.colors.marrom1};
        margin-top: 10px;
    }
`;

export const ContentContainer = styled(motion.div)`
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

export const ImageWrapper = styled(motion.div)`
    position: relative;
    background: #f2e4d4;
    border-radius: 63px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 2;
    
    @media (max-width: 900px) {
        width: 100%; 
        max-width: 500px;
        margin: 0 auto;
    }
`;

export const TextWrapper = styled(motion.div)`
    background: #f2e4d4;
    border-radius: 63px;
    
    margin-left: -100px;
    padding: 50px 50px 50px 150px;
    
    box-shadow:
        0 6px 15px rgba(0, 0, 0, 0.1),
        inset 0 0 0 9px rgba(255, 255, 255, 0.4);

    font-family: ${({ theme }) => theme.fontsStyles.Cormorant};
    font-size: calc(${({ theme }) => theme.fontSizes.Paragrafo} + 0.08rem);
    color: ${({ theme }) => theme.colors.marrom1};
    line-height: 1.7;
    text-align: justify;
    position: relative;
    z-index: 3;

    p + p {
        margin-top: 20px;
    }

    @media (max-width: 900px) {
        margin-left: 0;
        margin-top: -40px;
        padding: 40px;
        font-size: 1.1rem;
        
        @media (max-width: 480px) {
            padding: 30px 20px;
            border-radius: 40px;
            font-size: 1.2rem;
            line-height: 1.5;
        }
    }
`;