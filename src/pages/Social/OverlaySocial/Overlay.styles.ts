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
    z-index: 9000;
`;

export const OverlayContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9001;
    background-color: #8F9C67DD;
    width: 100%;
    height: fit-content;
    padding: 3rem;
`;

export const OverlayControls = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 9002;

    @media (max-width: 768px) {
        top: 16px;
        right: 16px;
    }
`;

export const OverlayClose = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(250, 235, 212, 0.94);
    border: 2px solid rgba(128, 95, 70, 0.35);
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 22px;
        height: 3px;
        border-radius: 999px;
        background-color: #805f46;
        transition: background-color 0.2s ease;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    &:hover,
    &:focus-visible {
        background-color: #805f46;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        outline: none;
    }

    &:hover::before,
    &:hover::after,
    &:focus-visible::before,
    &:focus-visible::after {
        background-color: #FAEBD4;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;

        &::before,
        &::after {
            width: 20px;
        }
    }
`;
