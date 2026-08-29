import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Menu: React.FC = () => {
  return (
    <div>
        <Navbar />
      <h1>Menu</h1>
      <h1>Usuário: CARONE DANIEL OLIVEIRA</h1>
      <Link to="/separacao"><button className="login-button">Buscar Tarefa</button></Link>
      <Link to="/"><button className="login-button">Consulta</button></Link>
      
    </div>
  );
}

export default Menu;
