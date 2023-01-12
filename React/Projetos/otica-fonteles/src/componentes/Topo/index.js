import './topo.css'

function Header() {
  return (
          <div className="header-topo">
        <div className="header-logo">
          <img src='assets/imagens/logo.png'/>
        </div>
        <div className="header-links">
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>   
        </div>     
      </div>
  );
}

export default Header;