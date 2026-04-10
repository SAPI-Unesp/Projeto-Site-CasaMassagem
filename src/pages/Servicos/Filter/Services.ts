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
        text: "Tratamento profundo que remove calosidades e asperezas, deixando os pés lisos, macios e com aparência saudável."
    },
    {
        title: "Drenagem Linfática",
        categoria: "drenagem",
        image: template,
        text: "Tratamento profundo que remove calosidades e asperezas, deixando os pés lisos, macios e com aparência saudável."
    },
    {
        title: "Limpeza de Pele",
        categoria: "estetica",
        image: template,
        text: "Tratamento profundo que remove calosidades e asperezas, deixando os pés lisos, macios e com aparência saudável."
    }
];

