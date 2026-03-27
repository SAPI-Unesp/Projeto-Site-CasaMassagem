import {
    GalleryContainer,
    GREEN,
    GalleryTitle,
    ImageCard,
    Image,
    HoverOverlay,
    HoverTitle
} from './Gallery.styles';

import img1  from '../../../assets/gallery/1.png';
import img2  from '../../../assets/gallery/2.png';
import img3  from '../../../assets/gallery/3.png';
import img4  from '../../../assets/gallery/4.png';
import img5  from '../../../assets/gallery/5.png';
import img6  from '../../../assets/gallery/6.png';
import img7  from '../../../assets/gallery/7.png';
import img8  from '../../../assets/gallery/8.png';
import img9  from '../../../assets/gallery/9.png';
import img10 from '../../../assets/gallery/10.png';
import img11 from '../../../assets/gallery/11.png';

const images = [
    { src: img1, alt: "Foto 1", colSpan: 22, rowSpan: 14, hover: "Prazer de estar aqui" },
    { src: img2, alt: "Foto 2", colSpan: 14, rowSpan: 25, hover: "Prazer de estar aqui" },
    { src: img3, alt: "Foto 3", colSpan: 14, rowSpan: 25, hover: "Prazer de estar aqui" },
    { src: img4, alt: "Foto 4", colSpan: 22, rowSpan: 28, hover: "Prazer de estar aqui" },
    { src: img5, alt: "Foto 5", colSpan: 28, rowSpan: 17, hover: "Prazer de estar aqui" },
    { src: img6, alt: "Foto 6", colSpan: 25, rowSpan: 17, hover: "Prazer de estar aqui" },
    { src: img7, alt: "Foto 7", colSpan: 25, rowSpan: 17, hover: "Prazer de estar aqui" },
    { src: img8, alt: "Foto 8", colSpan: 22, rowSpan: 14, hover: "Prazer de estar aqui" },
    { src: img9, alt: "Foto 9", colSpan: 14, rowSpan: 25, hover: "Prazer de estar aqui" },
    { src: img10, alt: "Foto 10", colSpan: 14, rowSpan: 25, hover: "Prazer de estar aqui" },
    { src: img11, alt: "Foto 11", colSpan: 22, rowSpan: 32, hover: "Prazer de estar aqui" },
];

export function Gallery() {
    return (
        <GalleryContainer>
            <GalleryTitle> Acompanhe Nossas Visitas </GalleryTitle>
            <GREEN>
                {/* Imagens dispostas em grid de largura 50 unidades */}
                {/* cada imagem e disposta sobre colSpan unidades de largura*/}
                {/* e rowSpan unidades de altura, gap automaticamente adicionado*/}
                {/* tentar fazer cada linha somar 50 em colSpan */}

                {images.map((image) => (
                    <ImageCard colSpan={image.colSpan} rowSpan={image.rowSpan}>
                        <Image src={image.src} alt={image.alt} />
                        <HoverOverlay>
                            <HoverTitle>"{image.hover}"</HoverTitle>
                        </HoverOverlay>
                    </ImageCard>
                ))}

            </GREEN>
        </GalleryContainer>
    );
}