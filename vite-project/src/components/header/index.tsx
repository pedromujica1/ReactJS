import logo from '../../assets/logo.svg'
import { Container,Content } from './styles';

export function Header(){
    return (
        <Container>
            <Content>

                <div>
                    <p>Helllo world from React JS</p>
                    <h1>Pedidos</h1>
                    <h2>Acompanhamento de Pedidos</h2>
                    
                </div>
                <img src={logo} alt="Imagem Logo" />
            </Content>
        </Container>
        
    );
}