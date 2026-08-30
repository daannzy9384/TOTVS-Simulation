import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // <-- Mude para HashRouter
import Home from './pages/login';
import Menu from './pages/menu';
import Tarefa from './pages/tarefa';
import Separacao from './pages/separacao';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="wms-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tarefa" element={<Tarefa />} />
          <Route path="/separacao" element={<Separacao />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;