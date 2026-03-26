import {
    GalleryContainer,
    GREEN,
    GalleryTitle,
    ImageCard,
    Image
} from './Gallery.styles';

import img1 from '../../../assets/gallery/1.png';
import img2 from '../../../assets/gallery/2.png';
import img3 from '../../../assets/gallery/3.png';
import img4 from '../../../assets/gallery/4.png';
import img5 from '../../../assets/gallery/5.png';
import img6 from '../../../assets/gallery/6.png';
import img7 from '../../../assets/gallery/7.png';

export function Gallery() {
    return (
        <GalleryContainer>
            <GalleryTitle> Fotos </GalleryTitle>
            <GREEN>
                <ImageCard colSpan={7} rowSpan={5}>
                    <Image src={img1} alt="Foto 1" />
                </ImageCard>
                <ImageCard colSpan={5} rowSpan={9}>
                    <Image src={img2} alt="Foto 2" />
                </ImageCard>
                <ImageCard colSpan={5} rowSpan={9}>
                    <Image src={img3} alt="Foto 3" />
                </ImageCard>
                <ImageCard colSpan={7} rowSpan={9}>
                    <Image src={img4} alt="Foto 4" />
                </ImageCard>
                <ImageCard colSpan={10} rowSpan={5}>
                    <Image src={img5} alt="Foto 5" />
                </ImageCard>
                <ImageCard colSpan={9} rowSpan={5}>
                    <Image src={img6} alt="Foto 6" />
                </ImageCard>
                <ImageCard colSpan={9} rowSpan={5}>
                    <Image src={img7} alt="Foto 7" />
                </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}>
                </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}> </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}> </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}> </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}> </ImageCard>
                <ImageCard colSpan={5} rowSpan={5}> </ImageCard>
            </GREEN>
        </GalleryContainer>
    );
}