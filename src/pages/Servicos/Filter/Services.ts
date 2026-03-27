import template from "../../../assets/template.jpg"

export type Service = {
    title: string,
    categoria: string,
    image: string
}

export const services = [
    {
        title: "Relaxante",
        categoria: "massagem",
        image: template
    },
    {
        title: "Drenagem Linfática",
        categoria: "drenagem",
        image: template
    },
    {
        title: "Limpeza de Pele",
        categoria: "estetica",
        image: template
    }
];

