import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 라우트 import
import { BrowserRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

// useParams: 현재 URL 주소에서 파라미터를 꺼내오는 기능
function Home() {
  console.log('Home..'); 
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// ↓↓↓Topics메뉴를 데이터로 꺼내는 부분↓↓↓
// 데이터를 사용하여 컴포넌트를 자동으로 생성!
// topics 리스트 생성(table에 저장된 데이터 꺼내기 위해 사용)
let topics = [
  {id: 1, title: 'HTML', description:'HTML is ...'},
  {id: 2, title: 'JS', description:'JS is ...'},
  {id: 3, title: 'React', description:'React is ...'}
];

// Topic 상세 화면을 반환하는 컴포넌트
function Topic() {

  return (
    <div>
      <h3>Topic</h3>
      Topic....
    </div>
  );
}

//하위 메뉴 추가
function Topics() {

  // Link 목록을 저장할 배열
  let lis = [];

  // 데이터를 사용하여 Link를 동적으로 생성
  for(let t of topics) {

    lis.push(
    <li><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>
    );
  }

  // console.log(lis); 배열이 들어가는지 확인용

  return (
    <div>
      <h2>Topics</h2>
        <ul>
        {/* 배열확인후 꺼내오기 불러오기 */}
          {lis}
        </ul>

    {/*  Route를 하나로 통합 */}
    {/* URL에 포함된 파라미터로 처리 */}
    {/* 예: /toipc/1 =>(toipc_id = 1) */}
    <Routes>
      <Route path='/:toipc_id' element={<Topic></Topic>}></Route>
    </Routes>

    </div>
  );
}

function Contact() {
  console.log('Contact..'); 
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  console.log('App..'); 
  return (
    <div>
      <h1>Hello React Router DOM</h1>

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics/*' element={<Topics></Topics>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
