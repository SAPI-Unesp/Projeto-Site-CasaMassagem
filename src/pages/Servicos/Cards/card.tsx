import { Overlay } from '../Overlay/overlay';
import {
    CardBtn,
    CardImage,
    CardInfoContainer,
    CardTitle,
    OverlayContentBox,
    Divider,
    CardWrapper,
    Tag,
    ContainerTags,
    ContainerTagContato,
    Contato,
    Temp,
} from './card.styles';

import { useState } from 'react';
import imgWhats from '../../../assets/imgWhats.png';
import tagType from '../../../assets/tagType.png';
import tagArea from '../../../assets/tagArea.png';
import tagTime from '../../../assets/tagTime.png';

type CardProps = {
    title: string;
    image: string;
    text: string;
};

export function Card({ title, image, text }: CardProps) {
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

    return (
        <CardWrapper>

            <CardImage src={image}/>

            <CardInfoContainer>
                <CardBtn onClick={() => setIsOverlayOpen(true)}>
                    <span> Saiba Mais </span>
                </CardBtn>
                <Temp>
                    <CardTitle> {title} </CardTitle>
                </Temp>
            </CardInfoContainer>
            

            <Overlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
            >
                <OverlayContentBox>
                    <img
                        src={image} alt="foto do spa"
                    />
                    <div>
                        <h1>{title}</h1>
                        <Divider />
                        <h2>{text}</h2>
                    </div>
                </OverlayContentBox>
                <ContainerTagContato>
                    <ContainerTags>
                        <Tag>
                            <img src={tagType} width={30} height={30} alt="Tipo" />
                            <h1>Tipo</h1>
                        </Tag>
                        <Tag>
                            <img src={tagArea} width={30} height={30} alt="Área" />
                            <h1>Área</h1>
                        </Tag>
                        <Tag>
                            <img src={tagTime} width={30} height={30} alt="Tempo" />
                            <h1>Tempo</h1>
                        </Tag>
                    </ContainerTags>
                    <Contato>
                        <h1>Contate-nos</h1>
                        <a
                            href="https://wa.me/5515996800015"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={imgWhats}
                                width={60}
                                height={60}
                                alt="WhatsApp"
                            />
                        </a>
                    </Contato>
                </ContainerTagContato>
            </Overlay>
        </CardWrapper>
    );
}
