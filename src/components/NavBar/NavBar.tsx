import { Container, NavItems, NavLogo, Divider } from './NavBar.styles';
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
    const [scrolled, setScrolled] = useState(() => window.scrollY > 50);
    const [animate, setAnimate] = useState(() => !window.location.hash);
    const [activeSection, setActiveSection] = useState('');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!location.hash) {
            setAnimate(true);
            return;
        }

        setAnimate(false);

        const timeout = window.setTimeout(() => {
            setAnimate(true);
        }, 500);

        return () => window.clearTimeout(timeout);
    }, [location.hash]);

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
        <Container $scrolled={scrolled} $animate={animate}>
            <NavLogo $scrolled={scrolled} $animate={animate}>
                <img className="logoNav" src={logoNav} alt="Logo" />
                <img className="backNav" src={backNav} alt="Background" />
            </NavLogo>

            <NavItems $scrolled={scrolled} $animate={animate}>
                {items.map((item, index) => {
                    const hashIndex = item.href.indexOf('#');
                    const isSectionLink = hashIndex !== -1;
                    const sectionId = isSectionLink
                        ? item.href.slice(hashIndex + 1)
                        : '';
                    const linkPath = isSectionLink
                        ? item.href.slice(0, hashIndex) || location.pathname
                        : item.href;
                    const isActive =
                        isSectionLink
                            ? activeSection === sectionId
                            : location.pathname === item.href;

                    return (
                        <React.Fragment key={item.href}>
                            {isSectionLink ? (
                                <Link
                                    to={`${linkPath}#${sectionId}`}
                                    className={isActive ? 'active' : ''}
                                >
                                    {item.label}
                                </Link>
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
        </Container>
    );
}
