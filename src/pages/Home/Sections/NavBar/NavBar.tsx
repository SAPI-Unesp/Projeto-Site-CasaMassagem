import{
    Container,
    NavItems,
} from './NavBar.styles';

export function NavBar() {
    return (
        <Container>
            <NavItems>
                <a href="#">Home</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
            </NavItems>
        </Container>
    );
}
