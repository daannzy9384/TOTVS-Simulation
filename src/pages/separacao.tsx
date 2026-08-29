import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SeparacaoScreen() {
  const navigate = useNavigate();
  const [confEnd, setConfEnd] = useState('');
  const [enderecoAtual, setEnderecoAtual] = useState('01.002.3.1.2');

  const handleNext = () => {
   
    if (enderecoAtual === '01.002.3.1.2') {
      setEnderecoAtual('01.002.54.1.1');
      setConfEnd('');
    }
  };

  const handlePrev = () => {
   
    if (enderecoAtual === '01.002.54.1.1') {
      setEnderecoAtual('01.002.3.1.2');
      setConfEnd('');
    }
  };

  return (
    <>
      <div className="wms-header-dark">Separacao</div>

      <div className="wms-content">
        <div className="wms-row">
          <span className="wms-label">Endereço</span>
          <div className="wms-readonly">{enderecoAtual}</div>
        </div>

        <div className="wms-row">
          <span className="wms-label">Conf. End.</span>
          <input
            type="text"
            className="wms-input"
            value={confEnd}
            onChange={(e) => setConfEnd(e.target.value)}
            autoFocus
          />
        </div>

        <div className="wms-status-red">Não Separado</div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button className="wms-btn wms-btn-cyan" onClick={handleNext}>
            Próximo Endereço
          </button>
          <button className="wms-btn wms-btn-gray" onClick={handlePrev}>
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