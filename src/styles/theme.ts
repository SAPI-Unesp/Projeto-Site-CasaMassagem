import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cormorant/400.css';
import '@fontsource/cormorant/700.css';

export const theme = {
    colors: {
        //adicionar as cores
    },
    fontSizes: {
        Title: '3.5rem',
        //adicionar tamanhos de fontespara paragrafos, titulos, subtitulos..
    },
    fontsStyles: {
        Cormorant: "'Cormorant', serif",
        Cinzel: "'Cinzel', 'Times New Roman', serif",
    },
    fontWeights: { 
        regular: 400,
        bold: 700,
    },
    spacing: (factor: number) => `${factor * 0.25}rem`,
};
