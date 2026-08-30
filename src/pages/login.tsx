import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/footer.tsx"

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <div className="wms-header-dark">
        TOTVS Varejo Supermercados - WMS
      </div>
      <div className="wms-header-cyan">
        Coletor de Dados<br />
        v: 26.01.016 - CONSINCO@CONSINCO
      </div>

      <div className="wms-content">
        <div className="wms-row" style={{ marginTop: '20px' }}>
          <span className="wms-label">Código</span>
          <input type="text" className="wms-input" autoFocus />
        </div>

        
        <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
          <button 
            className="wms-btn wms-btn-gray" 
            onClick={() => navigate('/')}
          >
            Retornar
          </button>
          <button 
            className="wms-btn wms-btn-cyan" 
            onClick={() => navigate('/menu')}
          >
            Entrar
          </button>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Login;