
import { useNavigate } from 'react-router-dom';

export default function Tarefa() {
  const navigate = useNavigate();

  return (
    <>
      <div className="wms-header-dark">Separação</div>

      <div className="wms-content">
        
        
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="wms-label" style={{ width: '45px', textAlign: 'right' }}>Carga</span>
          <div className="wms-readonly" style={{ flex: 1.5 }}>960264</div>
          <span className="wms-label" style={{ width: '35px', textAlign: 'right' }}>Dep.</span>
          <div className="wms-readonly" style={{ flex: 1 }}>01</div>
        </div>

        

        
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="wms-label" style={{ width: '45px', textAlign: 'right' }}>Box</span>
          <div className="wms-readonly" style={{ flex: 1 }}>12</div>
          <span className="wms-label" style={{ width: '35px', textAlign: 'right' }}>Lote</span>
          <div className="wms-readonly" style={{ flex: 1 }}>1</div>
          <span className="wms-label" style={{ width: '30px', textAlign: 'right' }}>Pal.</span>
          <div className="wms-readonly" style={{ flex: 1 }}>1</div>
        </div>

        
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="wms-label" style={{ width: '65px', textAlign: 'right' }}>Linha Sep.</span>
          <div className="wms-readonly" style={{ flex: 1 }}>LAVANDERIA</div>
        </div>

       
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
          <span className="wms-label" style={{ width: '65px', textAlign: 'right', marginTop: '4px' }}>Destino</span>
          <div className="wms-readonly" style={{ flex: 1, minHeight: '40px' }}>029-STMT</div>
        </div>

       
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="wms-label" style={{ width: '50px', textAlign: 'right' }}>Peso</span>
          <div className="wms-readonly" style={{ flex: 1.5 }}>720,896</div>
          <span className="wms-label" style={{ width: '35px', textAlign: 'right' }}>Itens</span>
          <div className="wms-readonly" style={{ flex: 1 }}>26</div>
        </div>

      
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px', alignItems: 'center' }}>
          <span className="wms-label" style={{ width: '65px', textAlign: 'right' }}>Met. Cúb.</span>
          <div className="wms-readonly" style={{ flex: 1.5 }}>1,428</div>
          <span className="wms-label" style={{ width: '30px', textAlign: 'right' }}>Vol.</span>
          <div className="wms-readonly" style={{ flex: 1 }}>58</div>
        </div>

        
        <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button className="wms-btn wms-btn-cyan" style={{ margin: 0 }}>Finalizar Sep.</button>
          <button className="wms-btn wms-btn-cyan" style={{ margin: 0 }}>Situação Sep.</button>
          <button className="wms-btn wms-btn-darkblue" style={{ margin: 0 }} onClick={() => navigate('/menu')}>Retornar</button>
          
          
          <button className="wms-btn wms-btn-cyan" style={{ margin: 0 }} onClick={() => navigate('/separacao')}>Iniciar Sep.</button>
        </div>

      </div>
    </>
  );
}