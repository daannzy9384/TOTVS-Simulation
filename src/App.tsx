import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/login';
import Menu from './pages/menu';
import { Separacao } from './pages/separacao';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/separacao' element={<Separacao/>} />
      </Routes>
    </Router>
  );
};

export default App;