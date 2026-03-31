import {
    OverlayBackground,
    OverlayContent,
} from './Overlay.styles';

type OverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Overlay({ isOpen, onClose, children }: OverlayProps) {
    return isOpen ? (
        <>
            <OverlayBackground onClick={onClose} />

            <OverlayContent>
                {children}
            </OverlayContent>
        </>
    ) : null;
}
