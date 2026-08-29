import { Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';

export const Login: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: '1.5rem' }}>Coleto de dados <p>V:26.01.016 - CONSINCO@CONSINCO</p> </h1>
      <h2 className="">Codigo</h2>
      <input type="text" placeholder="" className="login-input" />
      <Link to="/menu"><button className="login-button">Entrar</button></Link>
      <Link to="/"><button className="login-button">Retornar</button></Link>
    </div>
  );
}

export default Login;
