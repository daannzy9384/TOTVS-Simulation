import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/login';
import Menu from './pages/menu';
import Separacao from './pages/separacao';

import './App.css'; 
import Tarefa from './pages/tarefa';

const App = () => {
  return (
    <Router>
      <div className="wms-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/separacao' element={<Separacao />} />
          <Route path='/tarefa' element={<Tarefa />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;