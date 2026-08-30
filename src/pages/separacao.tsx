import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SeparacaoScreen() {
  const navigate = useNavigate();
  const [confEnd, setConfEnd] = useState('');
  const [enderecoAtual, setEnderecoAtual] = useState('01.002.3.1.2');
  const [produtoAtual, setProdutoAtual] = useState({
    
    marca: 'Ypê',
    produto: 'Detergente 500ml',
    quantidade: 3,
  });

  const handleNext = () => {
    if (enderecoAtual === '01.002.3.1.2') {
      setEnderecoAtual('01.002.54.1.1');

      setProdutoAtual({
        marca: 'Veja',
        produto: 'Água Sanitária 1L',
        quantidade: 2,
      });

      setConfEnd('');
    }
  };

  const handlePrev = () => {
    if (enderecoAtual === '01.002.54.1.1') {
      setEnderecoAtual('01.002.3.1.2');

      setProdutoAtual({
        marca: 'Ypê',
        produto: 'Detergente 500ml',
        quantidade: 3,
      });

      setConfEnd('');
    }
  };

  const primeiroEndereco = enderecoAtual === '01.002.3.1.2';
  const ultimoEndereco = enderecoAtual === '01.002.54.1.1';

  return (
    <>
      <div className="wms-header-dark">
        Separacao
      </div>

      <div className="wms-content">

        <div className="wms-row">
          <span className="wms-label">
            Endereço
          </span>

          <div className="wms-readonly">
            {enderecoAtual}
          </div>
        </div>

        <div className="wms-row">
          <span className="wms-label">
            Produto
          </span>

          <div className="wms-readonly">
            {produtoAtual.marca} — {produtoAtual.produto}
            <br />
            Quantidade: {produtoAtual.quantidade} CX
          </div>
        </div>

        <div className="wms-row">
          <span className="wms-label">
            Conf. End.
          </span>

          <input
            type="text"
            className="wms-input"
            value={confEnd}
            onChange={(e) => setConfEnd(e.target.value)}
            autoFocus
          />
        </div>

        <div className="wms-status-red">
          Não Separado
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button
            className={`wms-btn ${
              ultimoEndereco
                ? 'wms-btn-gray'
                : 'wms-btn-cyan'
            }`}
            onClick={handleNext}
            disabled={ultimoEndereco}
          >
            Próximo Endereço
          </button>

          <button
            className={`wms-btn ${
              primeiroEndereco
                ? 'wms-btn-gray'
                : 'wms-btn-cyan'
            }`}
            onClick={handlePrev}
            disabled={primeiroEndereco}
          >
            Endereço Anterior
          </button>

          <button className="wms-btn wms-btn-cyan">
            Verificar Reposição
          </button>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button
            className="wms-btn wms-btn-darkblue"
            onClick={() => navigate('/tarefa')}
          >
            Retornar
          </button>
        </div>

      </div>
    </>
  );
}