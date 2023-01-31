import './Contatos.css';

function Contatos() {
  return (
    <div className="sobre">
      <div className='box-rodape'>
        <img src='assets/logo.png' alt='logo'/>
      </div>
      <div className='box-rodape'>
        <h2>ENDEREÇO</h2>
        <p>Av. Bernardino de Campos, 98 São Paulo,SP 12345-678</p>
      </div>
      <div className='box-rodape'>
        <h2>CONTATO</h2>
        <p>info@meusite.com Tel: (11) 3456-7890</p>
      </div>
      <div className='box-rodape'>
        <h2>HORÁRIOS</h2>
        <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
      </div>
    </div>
  );
}

export default Contatos;
