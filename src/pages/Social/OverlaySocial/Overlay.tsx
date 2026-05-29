import {
    OverlayBackground,
    OverlayContent,
    OverlayControls,
    OverlayClose,
} from './Overlay.styles';

import { CarouselSingle } from '../../../components/SingleCarousel/SingleCarousel';

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
                <OverlayControls>
                    <OverlayClose
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar galeria"
                    />
                </OverlayControls>
                {children}
                <CarouselSingle
                    items={images}
                    initialIndex={selectedIndex}
                    imageBorderRadius="30px"
                />
            </OverlayContent>
        </>
    ) : null;
}
