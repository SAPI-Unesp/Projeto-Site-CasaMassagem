import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #8f9c67;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
`;

export const NavLogo = styled.div`
    position: relative;

    .logoNav {
        position: relative;
        margin: 10px 0 10px 50px;
        z-index: 1;
    }

    .backNav {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
`;

export const NavItems = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin: 0 auto;

    a {
        font-family: 'Cinzel', serif;
        color: #f2e4d4;
        text-decoration: none;
        font-size: 32px;

        @media (max-width: 1240px) {
            font-size: 25px;
        }
        
        @media (max-width: 1150px) {
            font-size: 20px;
        }

        @media (max-width: 1050px) {
            font-size: 15px;
        }
    }

    @media (max-width: 850px) {
        display: none;
    }
`;

export const Divider = styled.div`
    width: 2px;
    height: 45px;
    background-color: #805f46;
    margin: 10px 0;
`;
