import { Overlay } from '../Overlay/overlay';
import {
    CardBtn,
    CardImage,
    CardInfoContainer,
    CardTitle,
    OverlayContentBox,
    Divider,
    CardWrapper,
} from './card.styles';
import { useState } from 'react';
import imgOverlay from '../../../assets/imgOverlay.png';

type CardProps = {
    title: string;
    image: string;
};

export function Card({ title, image }: CardProps) {
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

    return (
        <CardWrapper>

            <CardImage src={image}/>

            <CardInfoContainer>
                <CardTitle> {title} </CardTitle>
                <CardBtn onClick={() => setIsOverlayOpen(true)}>
                    <span> Saiba Mais </span>
                </CardBtn>
            </CardInfoContainer>
            

            <Overlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
            >
                <OverlayContentBox>
                    <img
                        src={imgOverlay}
                        width={320}
                        height={270}
                        alt="foto do spa"
                    />
                    <div>
                        <h1>Spa dos Pés e Reflexologia Podal</h1>
                        <Divider />
                        <h2>
                            Tratamento profundo que remove calosidades e
                            asperezas, deixando os pés lisos, macios e com
                            aparência saudável.
                        </h2>
                    </div>
                </OverlayContentBox>
            </Overlay>
        </CardWrapper>
    );
}
