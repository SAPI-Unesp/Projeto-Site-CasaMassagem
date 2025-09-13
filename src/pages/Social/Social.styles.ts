import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gold;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 0.1rem;
    color: black;
`;