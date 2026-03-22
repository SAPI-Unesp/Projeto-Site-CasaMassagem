import styled from 'styled-components';

export const GalleryContainer = styled.div`
    width: 80%;
    margin-bottom: 100px;
`;

export const GalleryTitle = styled.h1`
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.Title2}; 
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
    color: #A48774;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
`;

export const GREEN = styled.div`
    background-color: #7C8C61;
    width: 100%;
    height: 1000px;
`;