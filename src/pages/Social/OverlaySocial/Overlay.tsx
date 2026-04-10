import {
    OverlayBackground,
    OverlayContent,
} from './Overlay.styles';

import { Carousel } from '../../../components/Carousel/Carousel';

type OverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    images: {
        src: string;
        alt?: string;
    }[];
    selectedIndex: number;
    children?: React.ReactNode;
};

export function Overlay({
    isOpen,
    onClose,
    images,
    selectedIndex,
    children,
}: OverlayProps) {
    return isOpen ? (
        <>
            <OverlayBackground onClick={onClose} />

            <OverlayContent>
                {children}
                <Carousel
                    items={images}
                    initialIndex={selectedIndex}
                    imageBorderRadius='40px'
                    slideBorderRadius='40px'
                    slideWidth='900px'
                    slideHeight='500px'
                    imageFit='cover'
                />
            </OverlayContent>
        </>
    ) : null;
}