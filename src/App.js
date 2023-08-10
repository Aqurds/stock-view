import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import StockList from './components/StockList.jsx';
import SingleStock from './components/SingleStock.jsx';

function App() {
  return (
    <Routes>
      {/* <Route path="/" exact Component={StockList} /> */}
      {/* <Route path="/single-stock/:id" Component={SingleStock} /> */}
      <Route index element={<StockList />} />
      <Route path='singlestock/:id' element={<SingleStock />} />
    </Routes>
  );
}

export default App;
