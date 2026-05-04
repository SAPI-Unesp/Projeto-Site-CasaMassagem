import {
    TestimonialSection,
    SectionTitle,
    CarroselContainer,
    CarroselTrack,
    TestimonialCard,
    TestimonialText,
    TestimonialAuthor,
} from './Testimonials.style';

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
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

const testimonialsLine1 = [
    {
        texto: 'A Monique tem mãos de fada! Saí de lá renovada.',
        autor: '@ana_lais',
    },
    {
        texto: 'Melhor massagem que já recebi. Recomendo muito!',
        autor: '@carlos_souza',
    },
    {
        texto: 'Ambiente super aconchegante e profissional excelente.',
        autor: '@juliana_m',
    },
    {
        texto: 'Ambiente super aconchegante e profissional excelente.',
        autor: '@juliana_m',
    },
];

const testimonialsLine2 = [
    { texto: 'Um atendimento impecável do início ao fim!', autor: '@pedro_h' },
    {
        texto: 'Minha dor nas costas sumiu na primeira sessão.',
        autor: '@carol_dias',
    },
    { texto: 'Não troco a Monique por nada, maravilhosa!', autor: '@marcos_v' },
];

export function TestimonialsSection() {
    return (
        <TestimonialSection
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
        >
            <SectionTitle variants={riseVariants}>Depoimentos</SectionTitle>

            {/* Primeira linha de depoimentos */}
            <CarroselContainer variants={riseVariants}>
                <CarroselTrack>
                    {testimonialsLine1.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
                <CarroselTrack>
                    {testimonialsLine1.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
                <CarroselTrack aria-hidden="true">
                    {testimonialsLine1.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
            </CarroselContainer>

            {/* Segunda linha de depoimentos */}
            <CarroselContainer variants={riseVariants}>
                <CarroselTrack>
                    {testimonialsLine2.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
                <CarroselTrack>
                    {testimonialsLine2.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
                <CarroselTrack aria-hidden="true">
                    {testimonialsLine2.map((testimonial, index) => (
                        <TestimonialCard key={index}>
                            <TestimonialText>
                                {testimonial.texto}
                            </TestimonialText>
                            <TestimonialAuthor>
                                {testimonial.autor}
                            </TestimonialAuthor>
                        </TestimonialCard>
                    ))}
                </CarroselTrack>
            </CarroselContainer>
        </TestimonialSection>
    );
}
