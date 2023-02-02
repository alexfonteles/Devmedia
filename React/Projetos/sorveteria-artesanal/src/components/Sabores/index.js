import './Sabores.css';

function Sabores() {
  return (
  <div className="Sabores">
        <h2>SABORES DE SORVETE</h2>
      <div className='cj-box-sabores'>
        <div className='box-sabores1'>
          <div className='box-sabores'>
              <img src='assets/sabor-oreo.png' alt='oreo'/>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className='box-sabores'>
              <img src='assets/sabor-pistache.png' alt='logo'/>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className='box-sabores'>
              <img src='assets/sabor-cookies-avela.png' alt='logo'/>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vaiadorar o sabor.</p>
            </div>          
        </div>
        <div className='box-sabores1'>
          <div className='box-sabores'>
            <img src='assets/sorbet-kiwi.png' alt='logo'/>
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div className='box-sabores'>
            <img src='assets/sorbet-morango.png' alt='logo'/>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className='box-sabores'>
            <img src='assets/sorbet-limao.png' alt='logo'/>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrível sorvete gourmet de limão siciliano vai te encontar.</p>
          </div>
        </div>
      </div>
  </div> 
  );
}

export default Sabores;
