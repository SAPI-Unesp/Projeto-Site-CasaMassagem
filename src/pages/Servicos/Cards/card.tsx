import { CardBtn, CardImage, CardInfoContainer, CardTitle } from "./card.styles";

type CardProps = {
    title: string;
    image: string;
};

export function Card({ title, image }: CardProps) {

    return (
            
        <div style={{ position: "relative" }}>
            <CardImage src={image} />

            <CardInfoContainer> 
                <CardTitle> {title} </CardTitle>
                <CardBtn> Saiba Mais</CardBtn>
            </CardInfoContainer>
        </div>
        
        
    );

}