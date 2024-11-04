import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 라우트 import
import { BrowserRouter } from 'react-router-dom';
// BrowserRouter가 없으면 리액트 사용이 안됨
import App from './App';

// 최상위 ui 컴포넌트에 Routes로 감싸기 → 라우터 기능 사용가능
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


