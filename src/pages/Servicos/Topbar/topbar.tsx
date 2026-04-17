import { 
    TopbarSection,
    TopbarBackground,
    TopbarLogo,
    TopbarTitleBackground,
    TopbarTitleText,
    TopbarTitle
} from "./topbar.styles";

import logo from '../../../assets/altLogo.png';
import floral from "../../../assets/servicosfloral.png";


export function Topbar() {
    return (
        <TopbarSection>
            <TopbarBackground>
                <TopbarLogo src={logo} width={40} />
                <TopbarTitle> 
                    <TopbarTitleBackground src={floral} alt="Background floral" />
                    <TopbarTitleText> Nossos Serviços </TopbarTitleText>
                </TopbarTitle>
            </TopbarBackground>
        </TopbarSection>
    );
}