import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutUsSection = styled(motion.section)`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sectionGap} 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.spacing.xxxl} 16px;
    }

    @media (max-width: 480px) {
        padding: ${({ theme }) => theme.spacing.xxl} 12px;
    }
`;

export const SectionTitle = styled(motion.h2)`
    font-size: ${({ theme }) => theme.fontSizes.Title1};
    color: ${({ theme }) => theme.colors.marrom1}; /* Cor exata da sua imagem */
    text-transform: uppercase;
    margin-bottom: 40px;
    text-align: center;
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    font-weight: ${({ theme }) => theme.fontWeights.regular};

    @media (max-width: 768px) {
        font-size: clamp(2.5rem, 11vw, ${({ theme }) => theme.fontSizes.Title1});
        margin-bottom: 28px;
    }

    @media (max-width: 480px) {
        font-size: clamp(2.1rem, 11vw, 3rem);
    }
`;

export const ContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    width: 100%;
`;

export const ImageWrapper = styled(motion.div)`
    position: relative;
    background: #f2e4d4;
    border-radius: 63px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 900px;
    margin-left: 290px;
    height: 433px;
    z-index: 1;

    @media (max-width: 1116px) {
        width: min(100%, 760px);
        margin-left: 0;
        height: clamp(250px, 54vw, 410px);
    }

    @media (max-width: 480px) {
        border-radius: 36px;
        height: clamp(210px, 62vw, 300px);
    }
`;
export const TextWrapper = styled(motion.div)`
    background: #f2e4d4;
    border-radius: 63px;

    padding: 50px 50px 50px 50px;

    box-shadow:
        0 6px 15px rgba(0, 0, 0, 0.1),
        inset 0 0 0 9px rgba(255, 255, 255, 0.4);

    font-family: ${({ theme }) => theme.fontsStyles.Cormorant};
    font-size: calc(${({ theme }) => theme.fontSizes.Paragrafo} + 0.08rem);
    color: ${({ theme }) => theme.colors.marrom1};
    line-height: 1.7;
    text-align: justify;
    position: relative;
    z-index: 1;

    max-width: 850px;
    width: 100%;
    box-sizing: border-box;

    margin-top: -60px;
    margin-right: 290px;

    p + p {
        margin-top: 20px;
    }

    @media (max-width: 1116px) {
        width: min(100%, 720px);
        margin-top: -36px;
        margin-right: 0;
        font-size: clamp(1.12rem, 1.85vw, calc(${({ theme }) => theme.fontSizes.Paragrafo} + 0.08rem));
        padding: clamp(32px, 4vw, 50px);
    }

    @media (max-width: 768px) {
        width: calc(100% - 24px);
        margin-top: -28px;
        text-align: left;
    }

    @media (max-width: 480px) {
        width: calc(100% - 12px);
        border-radius: 36px;
        padding: 28px 24px;
        line-height: 1.55;
    }
`;

export const ButtonWrapper = styled(motion.div)`
    margin-top: -20px;
    margin-left: 250px;
    z-index: 2;

    @media (max-width: 1116px) {
        width: min(100%, 720px);
        display: flex;
        justify-content: flex-end;
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 768px) {
        width: auto;
        display: block;
        align-self: flex-end;
        margin-right: 32px;
    }

    @media (max-width: 480px) {
        margin-top: -12px;
        margin-right: 12px;
    }
`;
