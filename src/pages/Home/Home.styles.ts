import styled from 'styled-components';

export const AppContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;

export const Logo = styled.img`
    height: 12em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    border-radius: 30%;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 0.1rem;
    color: white;
`;