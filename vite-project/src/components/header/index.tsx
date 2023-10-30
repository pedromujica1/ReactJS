import logo from '../../assets/logo.svg'

export function Header(){
    return (
        <div>
            <p>Helllo world from React JS</p>
            <h1>Pedidos</h1>
            <h2>Acompanhamento de Pedidos</h2>
            <img src={logo} alt="Imagem Logo" />
        </div>
        
    );
}