import { Container, NavItems, NavLogo, Divider } from './NavBar.styles';
import logoNav from '../../assets/logoNav.png';
import backNav from '../../assets/backNav.png';
import { useEffect, useState } from 'react';

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
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-80px 0px -40% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <Container $scrolled={scrolled}>
            <NavLogo $scrolled={scrolled}>
                <img className="logoNav" src={logoNav} alt="Logo" />
                <img className="backNav" src={backNav} alt="Background" />
            </NavLogo>

            <NavItems $scrolled={scrolled}>
                {items.map((item, index) => {
                    const sectionId = item.href.replace('#', '');

                    return (
                        <>
                            <a
                                href={item.href}
                                className={
                                    activeSection === sectionId
                                        ? 'active'
                                        : ''
                                }
                            >
                                {item.label}
                            </a>

                            {index < items.length - 1 && <Divider />}
                        </>
                    );
                })}
            </NavItems>
        </Container>
    );
}