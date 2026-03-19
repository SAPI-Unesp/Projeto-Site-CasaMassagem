import { 
    TopbarSection,
    TopbarBackground,
    TopbarLogo,
    TopbarTitleBackground,
    TopbarTitleText,
    TopbarTitle
} from "./topbar.styles";

import logoImage from '../../../assets/logo.png';
import floral from "../../../assets/servicosfloral.png";


export function Topbar() {
    return (
        <TopbarSection>
            <TopbarBackground>
                <TopbarLogo src={logoImage} alt="Logo" />
                <TopbarTitle> 
                    <TopbarTitleBackground src={floral} alt="Background floral" />
                    <TopbarTitleText> Nossos Serviços </TopbarTitleText>
                </TopbarTitle>
            </TopbarBackground>
        </TopbarSection>
    );
}