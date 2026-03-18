import { CardBackground, CardBtn, CardImage, CardInfoContainer, CardTitle } from "./card.styles";
import template from "../../../assets/template.jpg"


export function Card() {

    return (
            
        <div style={{ position: "relative" }}>
            <CardImage src={template} />

            <CardInfoContainer> 
                <CardTitle> Relaxante </CardTitle>
                <CardBtn> Saiba Mais</CardBtn>
            </CardInfoContainer>
        </div>
        
        
    );

}