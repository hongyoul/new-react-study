import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 라우트 import
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';


// home 영역의 UI를 반환하는 함수
function Home() {
  console.log('Home..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics() {
  console.log('Topics..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact() {
  console.log('Contact..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  console.log('App..'); // 어떤 컴포넌트가 렌더링되는지 확인
  return (
    <div>
      <h1>Hello React Router DOM</h1>

      {/* Home, Topics, Contact로 이동하는 링크 */}

      {/* a 태그 -> Link 컴포넌트로 변경 */}
      {/* Link -> NavLink로 변경 */}
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      {/* a태그: 파일을 다시 로드하면서 request(='file를 다시가져온다')가 발생됨 */}
      {/* Link컴포넌트: 기존 index.html에 필요한 컴포넌트만 다시 생성함. request 발생안됨 */}

      {/* Link컴포넌트를 사용하면 페이지ㅣ 전환 속도가 빨라진다 */}

      {/* 각 라우터는 PATH 속성을 가지고 있고 */}
      {/* PATH가 일치하는 컴포넌트가 렌더링됨 */}

      {/* url경로와 컴포넌트 설정 */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* 사용자가 존재하지 않는 페이지로 접근하면 'Not Found' 출력 */}
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>

    </div>
  );
}

// <React.StrictMode>: 개발 중에 발생할 수 있는 문제를 미리 표시해주는 부분
// 최상위 컴포넌트를 <BrowserRouter> 로 감싸서 라우터 기능 활성화
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// reactrouter 가이드
// https://reactrouter.com/en/main/start/tutorial

// router에 대한 설명
// https://reactrouter.com/en/main/route/route