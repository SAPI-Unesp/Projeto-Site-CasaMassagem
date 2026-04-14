import template from "../../../assets/template.jpg"

export type Service = {
    title: string,
    categoria: string,
    image: string,
    text: string,
}

export const services = [
    {
        title: "Relaxante",
        categoria: "massagem",
        image: template,
        text: "reduz o estresse e as tensões do dia a dia, proporcionando sensação de leveza e bem-estar."
    },
    {
        title: "Drenagem Pós-Cirurgica",
        categoria: "drenagem",
        image: template,
        text: "realizada com técnica adequada para auxiliar na recuperação e conforto durante o pós-operatório."
    },
    {
        title: "Terapêutica",
        categoria: "drenagem",
        image: template,
        text: "Indicada para alívio de dores musculares e recuperação da mobilidade, com foco em regiões específicas."
    },
    {
        title: "Modeladora",
        categoria: "drenagem",
        image: template,
        text: "ativa a circulação, melhora o contorno corporal e ajuda na retenção de líquidos."
    },
    {
        title: "Drenagem Linfática",
        categoria: "estetica",
        image: template,
        text: "estimula o sistema linfático, reduz inchaços e melhora a circulação."
    },
    {
        title: "Facial",
        categoria: "estetica",
        image: template,
        text: "relaxa, melhora a oxigenação da pele e traz frescor e luminosidade ao rosto."
    },
    {
        title: "Plástica dos Pés",
        categoria: "estetica",
        image: template,
        text: "Tratamento profundo para renovação da pele dos pés. Remove calosidades e asperezas, deixando a pele lisa, macia e bem cuidada. Ideal para quem busca conforto, higiene e aparência saudável nos pés."
    },
    {
        title: "Limpeza de Pele\nPesonalizada",
        categoria: "estetica",
        image: template,
        text: "A limpeza de pele no Hub Monique Ferraz é feita de forma personalizada, de acordo com o tipo e a necessidade da pele. Remove impurezas, controla a oleosidade e devolve o viço natural, com protocolos suaves e resultados visíveis."
    },
    {
        title: "Design de\nSombrancelhas\n(com ou sem Henna)",
        categoria: "estetica",
        image: template,
        text: "O design é feito com técnica precisa para valorizar o formato natural do rosto. Com ou sem henna, o resultado é sempre harmônico, realçando a beleza e a expressão de cada pessoa."
    },
    {
        title: "Depilação\nFeminina e Masculina",
        categoria: "estetica",
        image: template,
        text: "A depilação é realizada com técnica cuidadosa, priorizando o conforto e o cuidado com a pele. Utilizamos produtos de qualidade e atenção aos detalhes para garantir uma experiência segura e agradável — tanto para o público feminino quanto masculino."
    },
    {
        title: "Hidratação Labial",
        categoria: "estetica",
        image: template,
        text: "O protocolo de Hidratação Labial do Hub Monique Ferraz foi desenvolvido para restaurar a saúde e a beleza dos lábios, devolvendo maciez, cor e vitalidade. O resultado são lábios naturalmente rosados, com aparência mais volumosa, toque macio e sensação de conforto prolongada."
    }

];

