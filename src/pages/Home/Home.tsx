import sapilogo from '../../assets/logo-SAPI.png';
// Importe os novos componentes estilizados
import { AppContainer, Logo, Title, DepoimentosSection, SectionTitle, DepoimentosGrid, DepoimentoCard, DepoimentoText, DepoimentoAuthor } from './Home.styles';

// Dados dos depoimentos
const DepoimentosData = [
  {
    id: 1,
    text: "Monique, sessões amáveis de relaxamento!",
    author: "@ana_lais"
  },
  {
    id: 2,
    text: "Simplesmente maravilhoso! Me sinto renovada após cada sessão.",
    author: "@ana_lais"
  },
  {
    id: 3,
    text: "Um refúgio de paz no meio da correria. Recomendo demais!",
    author: "@ana_lais"
  },
  {
    id: 4,
    text: "Excelente profissional e ambiente acolhedor. Nota 10!",
    author: "@ana_lais"
  },
  {
    id: 5,
    text: "Melhor massagem da vida! Saio flutuando.",
    author: "@ana_lais"
  },
  {
    id: 6,
    text: "Perfeição em forma de terapia. Voltarei sempre!",
    author: "@ana_lais"
  },
];

export function Home() {
  return (
    <AppContainer>
      <Logo src={sapilogo} alt="SAPI" />
      <Title>SAPI</Title>

      {/* Seção de Depoimentos */}
      <DepoimentosSection>
        <SectionTitle>DEPOIMENTOS</SectionTitle>
        <DepoimentosGrid>
          {DepoimentosData.map((Depoimento) => (
            <DepoimentoCard key={Depoimento.id}>
              <DepoimentoText>"{Depoimento.text}"</DepoimentoText>
              <DepoimentoAuthor>{Depoimento.author}</DepoimentoAuthor>
            </DepoimentoCard>
          ))}
        </DepoimentosGrid>
      </DepoimentosSection>
    </AppContainer>
  );
}