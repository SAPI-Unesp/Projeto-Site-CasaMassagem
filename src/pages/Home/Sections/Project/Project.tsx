import {
    AboutUsSection,
    ButtonWrapper,
    SectionTitle,
    ContentContainer,
    ImageWrapper,
    TextWrapper,
} from './Project.style';

import { useNavigate } from 'react-router-dom';

import BoxImage from '../../../../assets/foto-teste-social.png';
import { BorderedImage } from '../../../../components/BorderedImage/BorderedImage';
import { Button } from '../../../../components/Button/Button';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const riseVariants = {
    hidden: {
        opacity: 0,
        y: 42,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.62,
            ease: 'easeOut',
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: 48,
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

const textVariants = {
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

export function ProjectSection() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/projetosocial');
        window.scrollTo(0, 0);
    }

    return (
        <AboutUsSection 
        id="social"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <SectionTitle variants={riseVariants}>
                Projeto "Cuidar de <br /> Quem Cuida"
            </SectionTitle>

            <ContentContainer>
                <ImageWrapper variants={imageVariants}>
                    <BorderedImage src={BoxImage} alt="projeto-social-image" />
                </ImageWrapper>
                <TextWrapper variants={textVariants}>
                    <p>
                        O Hub Monique Ferraz acredita que o cuidado precisa
                        alcançar quem dedica a vida a cuidar dos outros. Por
                        isso, criamos o projeto “Cuidar de Quem Cuida”, uma ação
                        que leva o toque da Quick Massage até professores e
                        colaboradores das escolas de Itaporanga (SP).
                    </p>
                </TextWrapper>

                <ButtonWrapper variants={riseVariants}>
                    <Button size="md" onClick={handleClick}>
                        Saiba mais
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
        </AboutUsSection>
    );
}
