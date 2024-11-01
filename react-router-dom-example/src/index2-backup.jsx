import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// 라우트 import
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';


function Home() {
  console.log('Home..'); 
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// Topics메뉴를 데이터로 꺼내는 부분
// 데이터를 사용하여 컴포넌트를 자동으로 생성!
// topics 리스트 생성(table에 저장된 데이터 꺼내기 위해 사용)
let topics = [
  {id: 1, title: 'HTML', description:'HTML is ...'},
  {id: 2, title: 'JS', description:'JS is ...'},
  {id: 3, title: 'React', description:'React is ...'}
];


//하위 메뉴 추가
function Topics() {

  return (
    <div>
      <h2>Topics</h2>
        <ul>
          <li><NavLink to="/topics/1">HTML</NavLink></li>
          <li><NavLink to="/topics/2">JS</NavLink></li>
          <li><NavLink to="/topics/3">React</NavLink></li>
        </ul>

    {/* 하위 라우터 추가 
          - 자식 라우터는 부모의 URL(경로)을 자동으로 포함
    */}
    <Routes>
      <Route path='/1' element={'HTML is ...(화면에 띄우고 싶은 내용을 작성하는 부분)'}></Route> {/* /topics/1 */}
      <Route path='/2' element={'JS is ...(간단한 내용을 작성하여 출력함)'}></Route> {/* /topics/2 */}
      <Route path='/3' element={'React is ...'}></Route> {/* /topics/3 */}
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
        {/* /*는 하위 경로도 포함한다는 의미 */}
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
