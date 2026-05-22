import React from 'react';
import {
    SectionContainer,
    Title,
    CardsContainer,
    Card,
    IconText,
    Info,
} from './Contact.styles';
import {
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import LocationImage from '../../../../assets/testeLocation.jpg';
import { BorderedImage } from '../../../../components/BorderedImage/BorderedImage';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

const titleVariants = {
    hidden: {
        opacity: 0,
        x: -48,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.68,
            ease: 'easeOut',
        },
    },
};

const cardsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 42,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.58,
            ease: 'easeOut',
        },
    },
};

export function ContactSection() {
    const contactInfo = {
        image: LocationImage,
        address: 'Rua Pedro Alcântara de Moraes, 991 - Itaporanga/SP',
        phone: '(15) 99680-0015',
        instagram: '@monicaferraz',
        email: 'moniqueferrarzi@gmail.com',
    };

    const mapSrc =
        'https://www.google.com/maps?q=Rua+Pedro+Alcantara+de+Moraes,+991,+Itaporanga+SP&output=embed';

    return (
        <SectionContainer 
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <Title variants={titleVariants}>
                <h2>
                    Alguma dúvida? <br /> Entre em contato
                </h2>
            </Title>

            <CardsContainer variants={cardsContainerVariants}>
                <Card variants={cardVariants}>
                    <BorderedImage
                        src={contactInfo.image}
                        alt="Local"
                        height="300px"
                        borderRadius="30px 30px 0 0"
                    />
                    <Info>
                        <IconText>
                            <FaMapMarkerAlt /> {contactInfo.address}
                        </IconText>
                        <IconText>
                            <FaWhatsapp /> {contactInfo.phone}
                        </IconText>
                        <IconText>
                            <FaInstagram /> {contactInfo.instagram}
                        </IconText>
                        <IconText>
                            <FaEnvelope /> {contactInfo.email}
                        </IconText>
                    </Info>
                </Card>

                <Card variants={cardVariants}>
                    <iframe
                        src={mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '12px' }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Card>
            </CardsContainer>
        </SectionContainer>
    );
}
