import { 
    TopbarSection,
    TopbarBackground,
    TopbarLogo,
    TopbarTitleBackground,
    TopbarTitleText,
    TopbarTitle
} from "./topbar.styles";

import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import floral from "../../../assets/servicosfloral.png";


export function Topbar() {
    return (
        <TopbarSection>
            <TopbarBackground>
                <TopbarLogo src={logo2} width={60} />
                <TopbarTitle>
                    <TopbarTitleBackground src={floral} alt="Background floral" />
                    <TopbarTitleText> Nossos Serviços </TopbarTitleText>
                </TopbarTitle>


                <TopbarLogo src={logo3} width={40} />
                <TopbarTitle> 
                    <TopbarTitleBackground src={floral} alt="Background floral" />
                    <TopbarTitleText> Nossos Serviços </TopbarTitleText>
                </TopbarTitle>
            </TopbarBackground>
        </TopbarSection>
    );
}