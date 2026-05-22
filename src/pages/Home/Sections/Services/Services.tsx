import {
    MotionWrapper,
    SectionContainer,
    SectionTitle,
} from './Services.styles';
import { Button } from '../../../../components/Button/Button';
import { Carousel } from '../../../../components/Carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { services, getServiceId } from '../../../Servicos/Filter/Services';

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 48,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.68,
            ease: 'easeOut',
            delayChildren: 0.2,
            staggerChildren: 0.13,
        },
    },
};

const emergentVariants = {
    hidden: {
        opacity: 0,
        y: 38,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.52,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export function ServicesSection() {
    const navigate = useNavigate();
    const [activeServiceId, setActiveServiceId] = useState<string>(
        getServiceId(services[0]),
    );

    const meusServicos = services.map((s) => ({
        src: s.image,
        title: s.title,
        serviceId: getServiceId(s),
    }));

    function handleClick() {
        navigate('/servicos', { state: { openServiceId: activeServiceId } });
        window.scrollTo(0, 0);
    }

    return (
        <SectionContainer
            id="service"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <SectionTitle variants={emergentVariants}>Serviços</SectionTitle>
            <MotionWrapper variants={emergentVariants}>
                <Carousel
                    items={meusServicos}
                    imageBorderRadius="60px"
                    onActiveChange={setActiveServiceId}
                />
            </MotionWrapper>
            <MotionWrapper variants={emergentVariants}>
                <Button size="lg" onClick={handleClick}>
                    Agendar Sessão
                </Button>
            </MotionWrapper>
        </SectionContainer>
    );
}
