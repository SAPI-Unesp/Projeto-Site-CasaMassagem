import styled from 'styled-components';

export const Container = styled.nav<{ $scrolled: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #8f9c67;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    height: ${({ $scrolled }) => ($scrolled ? "95px" : "165px")};

    transition: all 0.4s ease;
`;

export const NavLogo = styled.div<{ $scrolled: boolean }>`
    position: relative;

    .logoNav {
        width: ${({ $scrolled }) => ($scrolled ? "150px" : "236px")};
        transition: all 0.4s ease;
        position: relative;
        margin: 20px 0 20px 50px;
        z-index: 1;
    }

    .backNav {
        width: ${({ $scrolled }) => ($scrolled ? "290px" : "422px")};
        height: ${({ $scrolled }) => ($scrolled ? "116px" : "177px")};
        transition: all 0.4s ease;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
`;

export const NavItems = styled.div<{ $scrolled: boolean }>`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin: 0 auto;

    a {
        position: relative;
        font-size: ${({ $scrolled }) => ($scrolled ? "24px" : "35px")};
        transition: all 0.4s ease;
        font-family: 'Cinzel', serif;
        color: #f2e4d4;
        text-decoration: none;
        padding-bottom: 5px;

        @media (max-width: 1240px) {
            font-size: 25px;
        }
        
        @media (max-width: 1150px) {
            font-size: 20px;
        }

        @media (max-width: 1050px) {
            font-size: 15px;
        }

        &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.3s ease;
            transform: translateX(-50%);
        }

        &:hover {
            color: #fff;
        }
        &.active {
            color: #fff;
        }

        &:hover::after {
            width: 100%;
        }
        &.active::after {
            width: 100%;
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
