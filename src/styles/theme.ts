import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cormorant/400.css';
import '@fontsource/cormorant/700.css';

export const theme = {
    colors: {
        //adicionar as cores

        //Main Page
        verde: '#9CA86A',     //tema principal
        branco1: '#F2E4D4',   //fundo 'sobre nos'
        branco2: '#F4E3BD',   //letra 'servicos' na main
        marrom1: '#91654E',   //letras 'sobre nos', projeto,
                                //depoimentos, 'fale comigo'
        beje: '#C8B189',      //fundo depoimentos

        //Servicos
        verdeEscuro: '#707C47',  //fundo logo
        verdeClaro: '#98A371',   //fundo header
        marrom2: '#88583F',      //letra pop-up
        branco3: '#E1DDD5',      //fundo pop-up
    },
    fontSizes: {
        Title: '3.5rem',
        //...
        //adicionar tamanhos de fontes para paragrafos, titulos, subtitulos..
    },
    fontsStyles: {
        Cormorant: "'Cormorant', serif",
        Cinzel: "'Cinzel', 'Times New Roman', serif",
    },
    fontWeights: { 
        regular: 400,
        bold: 700,
    },
    spacing: {
        xxs: "0.125rem", // 2px
        xs: "0.25rem",   // 4px
        s: "0.5rem",     // 8px
        m: "1rem",       // 16px
        l: "1.5rem",     // 24px
        xl: "2rem",      // 32px
        xxl: "3rem",     // 48px
        xxxl: "4rem",    // 64px
  },
};
