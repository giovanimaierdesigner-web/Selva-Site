import { useState } from 'react';

export default function PedidoOrcamento({ designer, aoEnviar }) {
  const [form, setForm] = useState({ tipoProjeto: '', descricao: '', prazo: '', faixaValor: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setEnviado(true); setTimeout(aoEnviar, 2000); };

  if (enviado) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h2>Pedido enviado!</h2>
        <p style={{ color: '#AAA', marginTop: '0.5rem' }}>{designer.nome} receberá sua solicitação e responderá em breve.</p>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2 className="titulo-secao">Pedir Orçamento — {designer.nome}</h2>
      <form onSubmit={handleSubmit}>
        <input className="campo-form" placeholder="Tipo de projeto (ex: Logotipo, Site...)" value={form.tipoProjeto} onChange={(e) => setForm({...form, tipoProjeto: e.target.value})} required />
        <textarea className="campo-form" placeholder="Descreva o que você precisa..." rows="4" value={form.descricao} onChange={(e) => setForm({...form, descricao: e.target.value})} required />
        <input className="campo-form" placeholder="Prazo desejado" value={form.prazo} onChange={(e) => setForm({...form, prazo: e.target.value})} />
        <input className="campo-form" placeholder="Faixa de valor pretendida" value={form.faixaValor} onChange={(e) => setForm({...form, faixaValor: e.target.value})} />
        <button type="submit" className="botao-principal">ENVIAR PEDIDO DE ORÇAMENTO</button>
      </form>
    </section>
  );
}
