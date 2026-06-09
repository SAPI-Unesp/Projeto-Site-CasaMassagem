import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav<{ $scrolled: boolean; $animate: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #8f9c67;
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;

    height: ${({ $scrolled }) => ($scrolled ? "95px" : "150px")};

    transition: ${({ $animate }) => ($animate ? "all 0.4s ease" : "none")};

    @media (max-width: 990px) {
        transition: none;
        height: 80px;
    }
`;

export const NavLogo = styled.div<{ $scrolled: boolean; $animate: boolean }>`
    position: relative;

    .logoNav {
        width: ${({ $scrolled }) => ($scrolled ? "150px" : "215px")};
        transition: ${({ $animate }) => ($animate ? "all 0.4s ease" : "none")};
        position: relative;
        margin: ${({ $scrolled }) =>
            $scrolled ? "20px 0 20px 50px" : "13px 0 13px 50px"};
        z-index: 1;
        
        @media (max-width: 990px) {
            transition: none;
            width: 120px;
            margin: 28px 0 20px 20px;
        }
    }

    .backNav {
        width: ${({ $scrolled }) => ($scrolled ? "290px" : "390px")};
        height: ${({ $scrolled }) => ($scrolled ? "116px" : "165px")};
        transition: ${({ $animate }) => ($animate ? "all 0.4s ease" : "none")};
        position: absolute;
        top: ${({ $scrolled }) => ($scrolled ? "0" : "-8px")};
        left: 0;
        z-index: 0;

        @media (max-width: 990px) {
            transition: none;
            width: 200px;
            height: 116px;
            top: 0;
        }
    }

    
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
    text-decoration: none;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid #f2e4d4;
        outline-offset: -6px;
    }
`;

export const NavItems = styled.div<{ $scrolled: boolean; $animate: boolean }>`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    height: 100%;
    margin: 0 auto;

    a {
        display: flex;
        align-items: center;
        position: relative;
        font-size: ${({ $scrolled }) => ($scrolled ? "24px" : "35px")};
        line-height: 1;
        transition: ${({ $animate }) => ($animate ? "all 0.4s ease" : "none")};
        font-family: 'Cinzel', serif;
        color: #f2e4d4;
        text-decoration: none;
        padding: 0;

        @media (max-width: 1240px) {
            font-size: 25px;
        }
        
        @media (max-width: 1150px) {
            font-size: 20px;
        }

        @media (max-width: 1050px) {
            font-size: 15px;
        }

        @media (max-width: 990px) {
            display: none;
         }

        &::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -7px;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.3s ease;
            transform: translateX(-50%);
        }

        &:hover,
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
`;

export const BurgerMenu = styled.div<{ $open: boolean }>`
    @media (max-width: 990px) {
        width: 60px;
        height: 60px;
        position: relative;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 0;
        margin-right: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
            position: absolute;
            width: 44px;
            height: 4px;
            border-radius: 999px;
            background: #fff;

            transition:
                transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.25s ease,
                top 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        span:nth-child(1) {
            top: ${({ $open }) => ($open ? '28px' : '14px')};
            transform: ${({ $open }) =>
                $open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        span:nth-child(2) {
            opacity: ${({ $open }) => ($open ? 0 : 1)};
            transform: ${({ $open }) =>
                $open ? 'scaleX(0)' : 'scaleX(1)'};
        }

        span:nth-child(3) {
            top: ${({ $open }) => ($open ? '28px' : '42px')};
            transform: ${({ $open }) =>
                $open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const Divider = styled.div`
    width: 2px;
    height: 45px;
    background-color: #805f46;
    margin: 10px 0;

    @media (max-width: 990px) {
        display: none;
    }
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
    display: none;

    @media (max-width: 990px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        background-color: #8f9c67;
        z-index: 998;
        padding: 90px 30px 5px;
        gap: 8px;

        transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-100%)')};
        transition: transform 0.35s ease;

        a {
            font-family: 'Cinzel', serif;
            font-size: 18px;
            color: #f2e4d4;
            text-decoration: none;
            padding: 14px 0;
            border-bottom: 1px solid #e0e0e0;

            &:last-child {
                border-bottom: none;
            }

            &.active {
                color: #fff;
            }
        }
    }
`;
