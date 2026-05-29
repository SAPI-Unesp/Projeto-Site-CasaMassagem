import {
    SectionContainer,
    Title,
    ContentContainer,
    ImageWrapper,
    TextWrapper,
} from './AboutUs.style';
import MassageImage from '../../../../assets/imagem-sobrenos.png';
import { BorderedImage } from '../../../../components/BorderedImage/BorderedImage';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: -36,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

const textVariants = {
    hidden: {
        opacity: 0,
        x: 36,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

export function AboutUsSection() {
    return (
        <SectionContainer
            id="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <Title variants={fadeUpVariants}>
                <h2>SOBRE NÓS</h2>
            </Title>

            <ContentContainer>
                <ImageWrapper variants={imageVariants}>
                    <BorderedImage src={MassageImage} alt="Local" />
                </ImageWrapper>

                <TextWrapper variants={textVariants}>
                    <p>
                        O <strong>Hub Monique Ferraz</strong> nasceu do desejo
                        de oferecer um cuidado real, que vai além da estética e
                        alcança o bem-estar de verdade. Sou{' '}
                        <strong>Monique Ferraz</strong>, massoterapeuta, e
                        acredito que o toque certo tem o poder de transformar o
                        dia, aliviar dores e trazer de volta a leveza que a
                        rotina tira da gente.
                    </p>
                    No Hub, cada sessão é pensada com propósito — para relaxar,
                    reduzir tensões e melhorar a qualidade de vida de quem passa
                    por aqui. Mais do que um espaço de cuidados, o Hub é um
                    ponto de pausa, um respiro no meio da correria.
                </TextWrapper>
            </ContentContainer>
        </SectionContainer>
    );
}
