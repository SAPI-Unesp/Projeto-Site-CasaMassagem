import {
    GalleryContainer,
    GREEN,
    GalleryTitle,
    ImageCard,
    Image
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

export function Gallery() {
    return (
        <GalleryContainer>
            <GalleryTitle> Acompanhe Nossas Visitas </GalleryTitle>
            <GREEN>
                {/* Imagens dispostas em grid de largura 50 unidades */}
                {/* cada imagem e disposta sobre colSpan unidades de largura*/}
                {/* e rowSpan unidades de altura, gap automaticamente adicionado*/}
                {/* tentar fazer cada linha somar 50 em colSpan */}

                <ImageCard colSpan={22} rowSpan={14}>
                    <Image src={img1} alt="Foto 1" />
                </ImageCard>
                <ImageCard colSpan={14} rowSpan={25}>
                    <Image src={img2} alt="Foto 2" />
                </ImageCard>
                <ImageCard colSpan={14} rowSpan={25}>
                    <Image src={img3} alt="Foto 3" />
                </ImageCard>

                <ImageCard colSpan={22} rowSpan={28}>
                    <Image src={img4} alt="Foto 4" />
                </ImageCard>
                <ImageCard colSpan={28} rowSpan={17}>
                    <Image src={img5} alt="Foto 5" />
                </ImageCard>

                <ImageCard colSpan={25} rowSpan={17}>
                    <Image src={img6} alt="Foto 6" />
                </ImageCard>
                <ImageCard colSpan={25} rowSpan={17}>
                    <Image src={img7} alt="Foto 7" />
                </ImageCard>

                <ImageCard colSpan={22} rowSpan={14}>
                    <Image src={img8} alt="Foto 8" />
                </ImageCard>
                <ImageCard colSpan={14} rowSpan={25}>
                    <Image src={img9} alt="Foto 9" />
                </ImageCard>
                <ImageCard colSpan={14} rowSpan={25}>
                    <Image src={img10} alt="Foto 10" />
                </ImageCard>
            </GREEN>
        </GalleryContainer>
    );
}