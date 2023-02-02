import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre1">
      <div className='banner-sobre'>
        <img src='assets/banner-sabores.jpg' alt='logo'/>      
        <h3 id="galeteria">A GELATERIA</h3>
      </div>
      <div className='texto-sobre'>
        <h3>Sobre Nós</h3>
        <h4>Nós simplesmente amamos sorvete!</h4>
        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
              sorvete produzido. Fazemos o melhor sorvete para os nossos
              clientes e gostamos de receber elogios. Estamos operando desde
              2009 com as melhores matérias-primas para a produção final do
              sorvete. Vendemos tanto para varejo como para atacado.</p>
        <p>Nossos clientes podem comprar os nossos sorvetes e degustar na
              nossa loja ou levar para sua residência e aproveitar junto com a
              família. Também vendemos para estabelecimentos e criamos eventos
              como festa de aniversário, formaturas e eventos empresariais. Para
              contratar os nossos serviços, basta entrar em contato conosco.
              Iremos proporcionar o melhor atendimento e os melhores produtos
              para você fazer a sua festa mais saborosa, com o melhor sorvete da
              cidade.</p>
      <div className='img-sobre-double'>
        <img src='assets/sobre-image.jpg' alt='logo'/>    
        <img src='assets/sorveteria.jpg' alt='logo'/>    
      </div>
      </div>
    </div>
  );
}

export default Sobre;
