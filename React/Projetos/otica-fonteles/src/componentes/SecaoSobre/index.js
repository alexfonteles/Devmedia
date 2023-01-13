import './secaoSobre.css'

export default function secaoSobre() {
  return (
    <section id='sobre'>
      <div>
        <h3>QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
        <div className='sobre1'>
          <div className='fotoSobre1'>
            <img src='assets/imagens/loja.png' />
            </div>
            <div className='box-sobre-text'>
              <h4>Nossas Filiais</h4>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>

          </div>
        </div>
        <div className='sobre2'>        
            <div className='box-sobre-text'>
              <h4>Atendimento flexível</h4>
              <p>Nossa equipe possui é treinada para te atender</p>
            </div>
              <div className='fotoSobre2'>
                <img src='assets/imagens/atendimento.png' />
              </div>
            </div>  
        </div>
     
    </section>
  )
}