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
    width: 100%;
    height: 1000px;
    gap: 16px;
    padding: 32px;

    display: grid;
    grid-template-columns: repeat(50, 1fr);
    grid-auto-rows: calc((100vw - 64px - (99 * 16px)) / 100);

    background-color: #7c8c61;

    // Esconde a barra de rolagem, mas permite rolar
    overflow-y: scroll;

    // Chrome, Safari, Edge novo
    &::-webkit-scrollbar {
        display: none;
    }

    // Firefox
    scrollbar-width: none;

    // IE, Edge velho
    -ms-overflow-style: none;
`;

export const ImageCard = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    aspect-ratio: 1 / 1;
    background-color: #f0f0f0;
    border: 2px solid #9e4141;

    grid-column: span ${props => props.colSpan || 1};
    grid-row: span ${props => props.rowSpan || 1};
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;