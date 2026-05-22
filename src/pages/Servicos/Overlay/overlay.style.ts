import styled from 'styled-components';

export const OverlayBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    cursor: pointer;
    z-index: 9;

`;

export const OverlayContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 20px 35px;
    background-color: #e1ddd5;
    width: 1000px;
    height: fit-content;
    border-radius: 50px;
`;

export const OverlayChildren = styled.div`
    display: flex;
    color: #805f46;
    flex-direction: column;
    gap: 20px;
`;

export const OverlayControls = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OverlayClose = styled.button`
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;

    &::after {
        display: inline-block;
        content: '\\00d7';
    }
`;

// MOBILE COMPONENTS

export const OverlayBackgroundMobile = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 150%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    cursor: pointer;
    scroll-behavior: initial;
    z-index: 9;

`;

export const OverlayContentMobile = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: #e1ddd5;
    align-self:center;
    width: 95%;
    height: fit-content;
    border-radius: 50px;
`;

export const OverlayChildrenMobile = styled.div`
    display: flex;
    color: #805f46;
    flex-direction: column;
    gap: 10px;
`;

export const OverlayControlsMobile = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const OverlayCloseMobile = styled.button`
    margin-right:30px;
    background-color: transparent;
    border: none;
    font-size: 40px;

    &::after {
        display: inline-block;
        content: '\\00d7';
    }
`;

