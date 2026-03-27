import {
    OverlayBackground,
    OverlayContent,
    OverlayChildren,
    OverlayControls,
    OverlayClose,
} from './overlay.style';

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
                <OverlayControls>
                    <OverlayClose type="button" onClick={onClose} />
                </OverlayControls>

                <OverlayChildren>{children}</OverlayChildren>
            </OverlayContent>
        </>
    ) : null;
}
