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
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
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
    border-radius: 10px;
    background-color: #f0f0f0;

    aspect-ratio: 1 / 1;

    grid-column: span ${props => props.colSpan || 1};
    grid-row: span ${props => props.rowSpan || 1};

    cursor: pointer;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.4s ease;

`;

export const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;  
    background-color: rgba(124, 140, 97, 0.75);
    opacity: 0;
    transition: opacity 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    padding: 1rem;

    ${ImageCard}:hover & {
        opacity: 1;
    }
`;

export const HoverDate = styled.span`
    color: white;
    font-size: 0.85rem;
    font-family: ${({ theme }) => theme.fontsStyles?.Cinzel || 'serif'};
    letter-spacing: 1px;
`;

export const HoverTitle = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fontsStyles?.Cinzel || 'serif'};
    font-style: italic;
    line-height: 1.4;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
    align-self: center;
    align-content: center;
`;

