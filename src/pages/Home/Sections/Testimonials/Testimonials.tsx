import React, { useEffect } from 'react';
import { useAnimationControls } from 'framer-motion';
import {
  TestimonialSection,
  SectionTitle,
  CarroselContainer,
  CarroselTrack,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
} from './Testimonials.style';

const testimonialsLine1 = [
  { texto: "A Monique tem mãos de fada! Saí de lá renovada.", autor: "@ana_lais" },
  { texto: "Melhor massagem que já recebi. Recomendo muito!", autor: "@carlos_souza" },
  { texto: "Ambiente super aconchegante e profissional excelente.", autor: "@juliana_m" },
  { texto: "Experiência única, recomendo a todos!", autor: "@marina_silva" },
  { texto: "A Monique tem mãos de fada! Saí de lá renovada.", autor: "@ana_lais" },
  { texto: "Melhor massagem que já recebi. Recomendo muito!", autor: "@carlos_souza" },
  { texto: "Ambiente super aconchegante e profissional excelente.", autor: "@juliana_m" },
  { texto: "Experiência única, recomendo a todos!", autor: "@marina_silva" },
  
];

export function TestimonialsSection() {
  const controlsLine1 = useAnimationControls();
  const controlsLine2 = useAnimationControls();

  const startLine1 = () => {
    controlsLine1.start({
      x: "-50%",
      transition: { duration: 25, ease: "linear", repeat: Infinity }
    });
  };

  const startLine2 = () => {
    controlsLine2.start({
      x: "-50%",
      transition: { duration: 40, ease: "linear", repeat: Infinity } // Mais lenta
    });
  };

  useEffect(() => {
    startLine1();
    startLine2();
  }, []);

  const renderList = (list, prefix) => (
    <>
      {list.map((item, index) => (
        <TestimonialCard key={`${prefix}-${index}`}>
          <TestimonialText>"{item.texto}"</TestimonialText>
          <TestimonialAuthor>{item.autor}</TestimonialAuthor>
        </TestimonialCard>
      ))}
    </>
  );

  return (
    <TestimonialSection>
      <SectionTitle>Depoimentos</SectionTitle>

      {/* Linha 1 - Velocidade 25s */}
      <CarroselContainer>
        <CarroselTrack
          animate={controlsLine1}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          onDragEnd={startLine1}
        >
          {renderList(testimonialsLine1, "l1-orig")}
          {renderList(testimonialsLine1, "l1-dup")}
        </CarroselTrack>
      </CarroselContainer>

      {/* Linha 2 - Velocidade 40s */}
      <CarroselContainer style={{ marginTop: '20px' }}>
        <CarroselTrack
          animate={controlsLine2}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          onDragEnd={startLine2}
        >
          {renderList(testimonialsLine1, "l2-orig")}
          {renderList(testimonialsLine1, "l2-dup")}
        </CarroselTrack>
      </CarroselContainer>
    </TestimonialSection>
  );
}