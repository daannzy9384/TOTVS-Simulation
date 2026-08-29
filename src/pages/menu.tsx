import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wms-header-dark">
        TOTVS Varejo Supermercados - WMS
      </div>
      <div className="wms-header-cyan">Menu</div>
      <div className="wms-header-gray">Usuário: CARONE DANIEL O</div>

      <div className="wms-content">
        <button 
          className="wms-btn wms-btn-cyan" 
          onClick={() => navigate('/tarefa')}
        >
          Buscar Tarefa
        </button>
        
        <button 
          className="wms-btn wms-btn-cyan" 
          onClick={() => navigate('')}
        >
          Consulta
        </button>
        
        <div style={{ marginTop: 'auto' }}>
          <button 
            className="wms-btn wms-btn-darkblue" 
            onClick={() => navigate('/')}
          >
            Sair
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;