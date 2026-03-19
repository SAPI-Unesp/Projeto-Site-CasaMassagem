import styled from "styled-components";


export const TopbarSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
`;

export const TopbarBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #8F9C67;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TopbarLogo = styled.img`
    width: 300px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
`;

export const TopbarTitleBackground = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const TopbarTitleText = styled.h1`
    color: #F1F1F1;
    font-family: 'Cinzel', serif;
    font-size: 3.5rem;
    letter-spacing: 2px;
    position: absolute;

    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.9);
`;

export const TopbarTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
`;