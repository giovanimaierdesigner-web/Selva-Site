export default function Perfil({ designer, aoPedirOrcamento }) {
  return (
    <section style={{ maxWidth: '600px', margin: '0 auto' }}>
      <button 
        onClick={() => window.history.back()}
        style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginBottom: '1rem' }}
      >← Voltar</button>
      <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
        <div style={{ 
          width: '90px', height: '90px', borderRadius: '45px',
          background: 'linear-gradient(135deg, #E44217, #ff7043)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2.2rem', fontWeight: 700, margin: '0 auto 1rem'
        }}>{designer.nome.charAt(0)}</div>
        <h2 style={{ fontSize: '1.6rem' }}>{designer.nome}</h2>
        <p style={{ color: '#E44217', margin: '0.5rem 0 1rem' }}>{designer.especialidade}</p>
        <p style={{ color: '#AAA' }}>⭐ {designer.avaliacao} • Trabalhos concluídos: 42</p>
        <p style={{ marginTop: '1.2rem', lineHeight: '1.6', color: '#CCC' }}>
          Designer experiente, focado em soluções criativas e alinhadas ao seu projeto.
        </p>
        <button className="botao-principal" onClick={aoPedirOrcamento}>💰 PEDIR ORÇAMENTO</button>
      </div>
    </section>
  );
}
