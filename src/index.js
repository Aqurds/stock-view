import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/globalStore.jsx';
import StockList from './components/StockList';
import SingleStock from './components/SingleStock';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <StockList />,
    },
    {
      path: '/singlestock/:id',
      element: <SingleStock />,
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);