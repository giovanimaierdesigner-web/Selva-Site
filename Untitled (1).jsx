import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Explorar from './pages/Explorar';
import Perfil from './pages/Perfil';
import PedidoOrcamento from './pages/PedidoOrcamento';

function App() {
  const [tela, setTela] = useState('explorar');
  const [designerSelecionado, setDesignerSelecionado] = useState(null);

  return (
    <div className="app">
      <header className="cabecalho">
        <Logo />
        <nav className="navegacao">
          <button 
            className={tela === 'explorar' ? 'ativo' : ''}
            onClick={() => setTela('explorar')}
          >Explorar</button>
          <button 
            className={tela === 'solicitacoes' ? 'ativo' : ''}
            onClick={() => setTela('solicitacoes')}
          >Meus Pedidos</button>
        </nav>
      </header>

      <main className="conteudo">
        {tela === 'explorar' && (
          <Explorar aoSelecionar={(d) => { setDesignerSelecionado(d); setTela('perfil'); }} />
        )}
        {tela === 'perfil' && designerSelecionado && (
          <Perfil designer={designerSelecionado} aoPedirOrcamento={() => setTela('orcamento')} />
        )}
        {tela === 'orcamento' && designerSelecionado && (
          <PedidoOrcamento designer={designerSelecionado} aoEnviar={() => setTela('explorar')} />
        )}
      </main>
    </div>
  );
}

export default App;
