import './conteudo.css'

import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContatos from "../SecaoContatos";

function Conteudo() {
  return (
    <div className="Conteudo">
        <SecaoCapa />
        <div className="corpo">
        <SecaoProdutos />
        <SecaoSobre />
        <SecaoContatos />
        </div>
    </div>
  );
}

export default Conteudo;