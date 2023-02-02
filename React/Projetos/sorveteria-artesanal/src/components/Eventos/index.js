import './Eventos.css';

function Eventos() {
  return (
    <div className="eventos">
      <div className='box-banner-eventos'>
        <img src='assets/eventos-image.jpg' alt='logo'/>
        <h2 id="eventos">NOSSOS EVENTOS</h2>
      </div>
      <div className='box-texto-eventos'>
        <span>Delicias com sorvete!</span>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os melhores
            sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
          </p>
      </div>
    </div>
  );
}

export default Eventos;
