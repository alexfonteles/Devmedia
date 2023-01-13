import './secaoContatos.css'

function secaoContatos() {
    return (
      <div className="secaoContatos">
        
          <h3>FALE CONOSCO</h3>
           <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>      
        <div className='box-contatos'>  
           <div className='box-contatos1'>
              <h4>Contato</h4>
                <div className='card-contato'>
                  <img src="assets/imagens/local.png" title="Ícone local" alt="Pino de localização"/>
                  <span>Nova Iguaçu, RJ</span>
                </div>  
                <div className='card-contato'>
                  <img src="assets/imagens/telefone.png" title="Ícone telefone" alt="Ícone de um telefone"/>
                  <span>(21) 9999-9999</span>                  
                </div>  
                <div className='card-contato'>            
                  <img src="assets/imagens/email.png" title="Ícone email" alt="Ícone de uma carta"/>
                  <span>contato@oticavida.com</span>
                </div>
            </div>
            <div className='box-contatos2'>
              <h4>Nossas Redes Sociais</h4>
                <div className='card-contato'>
                  <img src="assets/imagens/fb.png" title="Ícone facebook" alt="logo do facebook"/>
                  <span>/OticaVida</span>
                </div>
                <div className='card-contato'>            
                  <img src="assets/imagens/ig.png" title="Ícone instagram" alt="logo do instagram"/>
                  <span>@oticavidarj</span>
                </div>
                <div className='card-contato'>
                  <img src="assets/imagens/tt.png" title="Ícone twitter" alt="logo do twitter"/>
                  <span>@oticavidarj</span>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default secaoContatos;