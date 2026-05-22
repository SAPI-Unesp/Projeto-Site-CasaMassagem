import styled from 'styled-components';

export const CardBackground = styled.div`
    width: 458px;
    height: 240px;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 300px;
        height:157px;
    }

`;

export const CardInfoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: transform 0.5s ease;
    pointer-events: none; 
`;

export const Temp = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    scale: 1.1;
    transition: 0.7s;
    position: absolute;
    bottom: 0;
    height: auto;
    margin-bottom: 20px;
`;

export const CardTitle = styled.h1`
    margin-bottom: 10px;
    white-space: pre-line;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    align-self: center;
    position: relative;
    text-align: center;
    transition: margin 1s, font-size 1s;
    justify-self: flex-end;

    @media (max-width:768px) {
        font-size: 13px;
        margin-bottom:0px;
    }
`;

export const CardImage = styled.img`
    border-radius: 40px;
    width: 100%;
    height: 100%;
    background-color: #8f9c67;
    padding: 8px;
    object-fit: cover;
    display: flex;
    flex-direction: row;
    transition: 0.3s;
    position: relative;

    @media (max-width:768px) {
        width: 300px;
        height: 180px;
    }
`;

export const CardBtn = styled.button`
    border: 2px solid #8f9c67;
    border-radius: 20px;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 30px;
    height: auto;
    width: auto;
    background-color: #8f9c67;
    color: white;
    padding: 5px 20px 5px 20px;
    font-size: 14px;
    align-self: flex-end;
    margin-right: 25px;
    font-family: Cinzel;
    font-weight: bold;
    transition:1s;
    pointer-events: auto;
    z-index: 3;

    overflow: hidden;          

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background-color: #a8b879;
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

    @media (max-width:768px) {
        scale:0.8;
    }
`;

export const OverlayContentBox = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    padding-bottom: 25px;

    img {
        width: 420px;
        height: 270px;
        object-fit: cover;
        border-radius: 50px;
        flex-shrink: 0;
    }

    div {
        display: flex;
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

    &:hover ${Temp} {
        transform: scale(1.5);
        z-index: 1;
    }

    &:hover ${CardTitle} {
        z-index: 1;
    }

    &:hover ${CardBtn} {
        transform : scale(1.3);
        z-index: 1;
    }

    &:hover ${CardImage} {
        transform: scale(1.15);
        z-index: 1;
        box-shadow: 10px 10px 10px #00000057;
        background-color: #a8b879;
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 157px;
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
`;

export const Contato = styled.div`
        position: absolute;
        right: 20px;
        top: 40%;
        transform: translateY(-50%);

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        h1 {
            font-family: Inter;
            color: #000;
            font-size: 22px;
        }
`;


// OVERLAY MOBILE CONTENTS
export const ImgOverlayMobile = styled.img`
    width: 230px;
    height: 230px;
    object-fit: cover;
    border-radius: 50px;
    flex-shrink: 0;
`;

export const OverlayContentBoxMobile = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 25px;

    img {
        width: 220px;
        height: 220px;
        object-fit: cover;
        border-radius: 50px;
        flex-shrink: 0;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h1 {
        font-size: 22px;
        color: #805f46;
        text-align: center;
        letter-spacing: 5%;
        line-height: 1.1;
    }

    h2 {
        font-size: 18px;
        color: #805f46;
        font-weight: normal;
        text-align: center;
        letter-spacing: 5%;
        line-height: 1.1;
    }
`;

export const TagMobile = styled.div`
        display: flex;
        position: relative;
        background-color: #8f9c67;
        border-radius: 50px;
        padding: 5% 5%;
        align-items: center;
        font-size: 6px;
        gap: 10px;

        img{
            width:20px;
            height:20px;
        }
`;

export const ContainerTagsMobile = styled.div`
        width:25%;
        display: flex;
        overflow: hidden;
        flex-direction:column;
        justify-content:center;
        gap: 14px;
        font-family: Cormorant Garamond;
        color: #fff;
`;

export const ContainerTagContatoMobile = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 80%;
`;

export const ContatoMobile = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-family: Inter;
            color: #000;
            font-size: 15px;
        }
`;

export const OverlayHeaderMobile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const DividerMobile = styled.div`
    align-self: center;
    width: 65%;
    height: 2px;
    background-color: #805f46;
    margin: 5px;
`;
