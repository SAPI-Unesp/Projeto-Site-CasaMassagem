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
    top: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    margin: auto;
    z-index: 10;
    padding: 20px;
    background-color: #e1ddd5;
    width: fit-content;
    height: fit-content;
`;

export const OverlayChildren = styled.div`
    display: flex;
    color: #805f46;
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
