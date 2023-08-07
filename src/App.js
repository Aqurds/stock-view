import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import StockList from './components/StockList';
import SingleStock from './components/SingleStock';

function App() {
  return (
    <Routes>
      <Route path="/" exact Component={StockList} />
      <Route path="/single-stock" Component={SingleStock} />
    </Routes>
  );
}

export default App;
