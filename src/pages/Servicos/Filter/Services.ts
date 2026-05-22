import img_massagem_relaxante from "../../../assets/services_img/serrvices_massagem_relaxante.jpg"
import img_drenagem_pos_cirurgica from "../../../assets/services_img/services_drenagem_pos_cirurgica.jpg"
import img_massagem_terapeutica from "../../../assets/services_img/services_massagem_terapeutica.jpg"
import img_massagem_modeladora from "../../../assets/services_img/services_massagem_modeladora.jpeg"
import img_drenagem_linfatica from "../../../assets/services_img/services_drenagem_linfatica.webp"
import img_massagem_facial from "../../../assets/services_img/services_massagem_facial.jpg"
import img_plastica_dos_pes from "../../../assets/services_img/services_plastica_dos_pes.webp"
import img_limpeza_de_pele from "../../../assets/services_img/services_limpeza_de_pele.jpg"
import img_design_de_sobrancelhas from "../../../assets/services_img/services_design_sobrancelhas.jpg"
import img_depilacao from "../../../assets/services_img/services_depilacao.jpg"
import img_hidratacao_labial from "../../../assets/services_img/services_hidratacao_labial.jpeg"

export type Service = {
    title: string,
    categoria: string,
    image: string,
    text: string,
}

export const services = [
    {
        title: "Massagem Relaxante",
        categoria: "massagem",
        image: img_massagem_relaxante,
        text: "reduz o estresse e as tensões do dia a dia, proporcionando sensação de leveza e bem-estar."
    },
    {
        title: "Drenagem Pós-Cirurgica",
        categoria: "drenagem",
        image: img_drenagem_pos_cirurgica,
        text: "realizada com técnica adequada para auxiliar na recuperação e conforto durante o pós-operatório."
    },
    {
        title: "Massagem Terapêutica",
        categoria: "drenagem",
        image: img_massagem_terapeutica,
        text: "Indicada para alívio de dores musculares e recuperação da mobilidade, com foco em regiões específicas."
    },
    {
        title: "Massagem Modeladora",
        categoria: "drenagem",
        image: img_massagem_modeladora,
        text: "ativa a circulação, melhora o contorno corporal e ajuda na retenção de líquidos."
    },
    {
        title: "Drenagem Linfática",
        categoria: "estetica",
        image: img_drenagem_linfatica,
        text: "estimula o sistema linfático, reduz inchaços e melhora a circulação."
    },
    {
        title: "Massagem Facial",
        categoria: "estetica",
        image: img_massagem_facial,
        text: "relaxa, melhora a oxigenação da pele e traz frescor e luminosidade ao rosto."
    },
    {
        title: "Plástica dos Pés",
        categoria: "estetica",
        image: img_plastica_dos_pes,
        text: "Tratamento profundo para renovação da pele dos pés. Remove calosidades e asperezas, deixando a pele lisa, macia e bem cuidada. Ideal para quem busca conforto, higiene e aparência saudável nos pés."
    },
    {
        title: "Limpeza de Pele\nPesonalizada",
        categoria: "estetica",
        image: img_limpeza_de_pele,
        text: "A limpeza de pele no Hub Monique Ferraz é feita de forma personalizada, de acordo com o tipo e a necessidade da pele. Remove impurezas, controla a oleosidade e devolve o viço natural, com protocolos suaves e resultados visíveis."
    },
    {
        title: "Design de\nSombrancelhas\n(com ou sem Henna)",
        categoria: "estetica",
        image: img_design_de_sobrancelhas   ,
        text: "O design é feito com técnica precisa para valorizar o formato natural do rosto. Com ou sem henna, o resultado é sempre harmônico, realçando a beleza e a expressão de cada pessoa."
    },
    {
        title: "Depilação\nFeminina e Masculina",
        categoria: "estetica",
        image: img_depilacao,
        text: "A depilação é realizada com técnica cuidadosa, priorizando o conforto e o cuidado com a pele. Utilizamos produtos de qualidade e atenção aos detalhes para garantir uma experiência segura e agradável — tanto para o público feminino quanto masculino."
    },
    {
        title: "Hidratação Labial",
        categoria: "estetica",
        image: img_hidratacao_labial,
        text: "O protocolo de Hidratação Labial do Hub Monique Ferraz foi desenvolvido para restaurar a saúde e a beleza dos lábios, devolvendo maciez, cor e vitalidade. O resultado são lábios naturalmente rosados, com aparência mais volumosa, toque macio e sensação de conforto prolongada."
    }

];

export function getServiceId(service: Service) {
    return `${service.categoria}-${service.title}`
        .toLowerCase()
        .normalize("NFD")                        
        .replace(/[\u0300-\u036f]/g, "")         
        .replace(/\s+/g, "-")                    
        .replace(/[^a-z0-9-]/g, "");             
}

