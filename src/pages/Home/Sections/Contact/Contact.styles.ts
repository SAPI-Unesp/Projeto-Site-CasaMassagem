import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled(motion.section)`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sectionGap} 20px;
    box-sizing: border-box;
`;

export const Title = styled(motion.div)`
    padding-left: 40px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    font-weight: bold;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.Title2};
        color: ${({ theme }) => theme.colors.marrom1};
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

export const CardsContainer = styled(motion.div)`
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

export const Card = styled(motion.div)`
    background: white;
    border-radius: 30px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    clip-path: inset(0 round 30px);
    width: 100%;
    max-width: 580px;
    min-height: 420px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
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
        rgba(132, 145, 96, 0.85),
        rgba(132, 150, 79, 0.87)
    );
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: #2b1d12;
    font-size: 1rem;
`;

export const IconText = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.colors.bege2};
    text-shadow: 0px 6px 5px rgba(0, 0, 0, 0.25);
    font-size: 1.12rem;
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    font-weight: 700;

    svg {
        color: white;
        font-size: 1.5rem;
    }
`;
