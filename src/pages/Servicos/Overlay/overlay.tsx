import { useEffect, useState } from 'react';
import {
    OverlayBackground,
    OverlayContent,
    OverlayChildren,
    OverlayControls,
    OverlayClose,
    OverlayBackgroundMobile,
    OverlayContentMobile,
    OverlayControlsMobile,
    OverlayCloseMobile,
    OverlayChildrenMobile,
} from './overlay.style';

type OverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Overlay({ isOpen, onClose, children }: OverlayProps) {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Função para atualizar o estado
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Executa uma vez ao montar o componente
        handleResize();

        // Adiciona um listener para atualizar o estado caso a tela mude de tamanho
        window.addEventListener('resize', handleResize);

        // Limpa o listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isOpen ? (
        <>
            {
                isMobile ?

                <>
                    <OverlayBackgroundMobile onClick={onClose} />

                    <OverlayContentMobile>
                        <OverlayControlsMobile>
                            <OverlayCloseMobile type="button" onClick={onClose} />
                        </OverlayControlsMobile>

                        <OverlayChildrenMobile>{children}</OverlayChildrenMobile>                        
                    </OverlayContentMobile>
                </>

                :
                
                <>
                    <OverlayBackground onClick={onClose} />
                    <OverlayContent>
            
                        <OverlayControls>
                            <OverlayClose type="button" onClick={onClose} />
                        </OverlayControls>

                        <OverlayChildren>{children}</OverlayChildren>
                    </OverlayContent>
                </>
                
            }
        </>
    ) : null;
}
