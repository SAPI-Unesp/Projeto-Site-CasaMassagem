import styled from 'styled-components';

export const CardBackground = styled.div`
    width: 458px;
    height: 240px;
    border-radius: 20px;
`;

export const CardInfoContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50%;transform-origin: right center;
    transition: transform 0.5s ease, margin 0.5s ease;
    display: flex;
    margin-bottom:5px;
    flex-direction: column;
    align-items: center;
    gap:1rem;
    justify-content: center;
`;

export const CardTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    align-self: center;
    margin-right:20px;
    white-space:nowrap;
    position: relative;
    transition: margin 1s, font-size 1s;
`;


export const CardImage = styled.img`
    border-radius: 40px;
    width: 600px;
    height: 320px;
    background-color: #8f9c67;
    padding: 8px;
    display: flex;
    flex-direction: row;
    transition: 0.3s;
`;

export const CardBtn = styled.button`
    border: 2px solid #8f9c67;
    border-radius: 20px;
    height: auto;
    width: auto;
    background-color: transparent;
    color: #8f9c67;
    padding: 5px 20px 5px 20px;
    font-size: 14px;
    align-self: flex-end;
    margin-right: 25px;
    font-family: Cinzel;
    font-weight: bold;
    transition:1s;

    overflow: hidden;          

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background-color: #8f9c67;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
        z-index: 0;
    }

    &:hover::before {
        width: 300px;
        height: 300px;
    }

    &:hover{
        cursor: pointer;
        color: white;
        transition : 0.5s ease-out;
    }

    span {
        position: relative;
        z-index: 1;
    }
`;

export const OverlayContentBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    img {
        object-fit: cover;
        border-radius: 50px;
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

export const CardWrapper = styled.div`
    position: relative;
    width: 600px;      
    height: 320px;   

    &:hover ${CardTitle} {
        font-size: 50px;
        width: 100%;
        text-align: center;
        margin:0px;
    }

    &:hover ${CardBtn} {
        transform : scale(1.1);
    }
    
    &:hover ${CardImage} {
        transform: scale(1.05);
        box-shadow: 10px 10px 10px #00000057;
        background-color: #a8b879;
    }
`;

export const Tag = styled.div`
        display: flex;
        background-color: #8f9c67;
        border-radius: 50px;
        padding: 10px 20px;
        align-items: center;
        font-size: 8px;
        gap: 15px;
`;

export const ContainerTags = styled.div`
        align-items: center;
        display: flex;
        gap: 30px;
        font-family: Cormorant Garamond;
        color: #fff;
`;

export const ContainerTagContato = styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 60px;
`;

export const Contato = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        align-self: flex-end;
        padding-right: 20px;

        h1 {
            font-family: Inter;
            color: #000;
            font-size: 22px;
        }
`;