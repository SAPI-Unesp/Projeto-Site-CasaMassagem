import { Container, NavItems, NavLogo, BurgerMenu, Divider, MobileMenu } from './NavBar.styles';
import logoNav from '../../assets/logoNav.png';
import backNav from '../../assets/backNav.png';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItem = {
    label: string;
    href: string;
};

type NavBarProps = {
    items: NavItem[];
};

export function NavBar({ items }: NavBarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id === 'hero') {
                            setActiveSection('');
                        } else {
                            setActiveSection(entry.target.id);
                        }
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Container $scrolled={scrolled}>
                <NavLogo $scrolled={scrolled}>
                    <a href="/">
                        <img className="logoNav" src={logoNav} alt="Logo"/>
                    </a>
                    <img className="backNav" src={backNav} alt="Background" />
                </NavLogo>

                <NavItems $scrolled={scrolled}>
                    {items.map((item, index) => {
                        const isSectionLink = item.href.startsWith('#');
                        const sectionId = isSectionLink
                            ? item.href.replace('#', '')
                            : '';
                        const isActive =
                            isSectionLink
                                ? activeSection === sectionId
                                : location.pathname === item.href;

                        return (
                            <React.Fragment key={item.href}>
                                {isSectionLink ? (
                                    <a
                                        href={item.href}
                                        className={isActive ? 'active' : ''}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className={isActive ? 'active' : ''}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {index < items.length - 1 && <Divider />}
                            </React.Fragment>
                        );
                    })}
                </NavItems>
                
                <BurgerMenu $open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                        <span />
                        <span />
                        <span />
                </BurgerMenu>

            </Container>

            <MobileMenu $open={menuOpen}>
                {items.map((item) => {
                    const isSectionLink = item.href.startsWith('#');
                    const sectionId = isSectionLink ? item.href.replace('#', '') : '';
                    const isActive = isSectionLink
                        ? activeSection === sectionId
                        : location.pathname === item.href;

                    return isSectionLink ? (
                        <a
                            key={item.href}
                            href={item.href}
                            className={isActive ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={isActive ? 'active' : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </MobileMenu>
        
        </>
    );
}
