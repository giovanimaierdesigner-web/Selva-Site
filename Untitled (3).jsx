import { useState } from 'react';

const designersMock = [
  { id: 1, nome: 'Mariana Costa', especialidade: 'Identidade Visual', avaliacao: 4.9 },
  { id: 2, nome: 'Pedro Rocha', especialidade: 'Design de Interface UI/UX', avaliacao: 4.7 },
  { id: 3, nome: 'Luiza Mendes', especialidade: 'Ilustração e Motion', avaliacao: 5.0 },
  { id: 4, nome: 'Rafael Silva', especialidade: 'Design para Web e Impressos', avaliacao: 4.6 },
];

export default function Explorar({ aoSelecionar }) {
  const [busca, setBusca] = useState('');
  const filtrados = designersMock.filter(d => 
    d.especialidade.toLowerCase().includes(busca.toLowerCase()) ||
    d.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <section>
      <h2 className="titulo-secao">Encontre o designer ideal</h2>
      <input
        className="barra-busca"
        placeholder="Buscar por nome ou especialidade..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="grid-designers">
        {filtrados.map(designer => (
          <div key={designer.id} className="card-designer" onClick={() => aoSelecionar(designer)}>
            <div style={{ 
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #E44217, #ff7043)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', fontWeight: 700
            }}>{designer.nome.charAt(0)}</div>
            <h3>{designer.nome}</h3>
            <p className="especialidade">{designer.especialidade}</p>
            <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.3rem' }}>⭐ {designer.avaliacao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
