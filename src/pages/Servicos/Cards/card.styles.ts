import styled from 'styled-components';

export const CardBackground = styled.div`
    width: 458px;
    height: 240px;
    border-radius: 20px;
`;

export const CardImage = styled.img`
    border-radius: 40px;
    height: 240px;
    width: 420px;
    background-color: #8f9c67;
    padding: 8px;
    display: flex;
    flex-direction: row;
`;

export const CardInfoContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardTitle = styled.h1`
    font-size: 30px;
    font-weght: bold;
    color: #ffffff;
    align-self: flex-start;
`;

export const CardBtn = styled.button`
    border: 2px solid #8f9c67;
    border-radius: 20px;
    heigth: auto;
    width: auto;
    background-color: transparent;
    color: #8f9c67;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 2px;
    font-size: 14px;
    align-self: flex-end;
    margin-right: 25px;
    font-family: Cinzel;
`;

export const OverlayContentBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    img {
        object-fit: cover;
    }

    div {
        flex-direction: column;
        gap: 10px;
    }

    h1 {
        font-size: 35px;
        color: #805f46;
        text-align: center;
        letter-spacing: 1px;
        line-height: 1.1;
    }

    h2 {
        font-size: 25px;
        color: #805f46;
        font-weight: normal;
        text-align: center;
        letter-spacing: 0.05em;
        line-height: 1.1;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #805f46;
    margin: 10px 0;
`;
