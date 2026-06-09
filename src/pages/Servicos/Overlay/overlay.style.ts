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
    padding: 20px 35px;
    background-color: #e1ddd5;
    width: 1000px;
    height: fit-content;
    border-radius: 40px;
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
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: #8f9c67;
    border: 2px solid #8f9c67;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 18px;
        height: 3px;
        border-radius: 999px;
        background-color: #fff;
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
        background-color: #fff;
        border-color: #8f9c67;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        outline: none;
    }

    &:hover::before,
    &:hover::after,
    &:focus-visible::before,
    &:focus-visible::after {
        background-color: #8f9c67;
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
    z-index: 9000;
`;

export const OverlayContentMobile = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9001;
    background-color: #e1ddd5;
    align-self:center;
    width: 95%;
    height: fit-content;
    border-radius: 40px;
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
    padding: 14px 16px 0;
`;

export const OverlayCloseMobile = styled.button`
    width: 36px;
    height: 36px;
    margin-right: 0;
    border-radius: 50%;
    background-color: #8f9c67;
    border: 2px solid #8f9c67;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        border-radius: 999px;
        background-color: #fff;
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
        background-color: #fff;
        border-color: #8f9c67;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
        outline: none;
    }

    &:hover::before,
    &:hover::after,
    &:focus-visible::before,
    &:focus-visible::after {
        background-color: #8f9c67;
    }
`;
