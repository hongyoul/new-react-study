import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/Home';
import Register from './features/Register';
import Login from './features/Login';
import BoardModify from './features/BoardModify';
import BoardDetail from './features/BoardDetail';
import BoardList from './features/BoardList';
import BoardRegister from './features/BoardRegister';

function App() {

  // Router로 URL 경로에 따라 컴포넌트 설정
  // 예 : / -> Home 컴포넌트
  //      /board/list -> BoardList 컴포넌트

  return (
    <div>
      <Routes>
        {/* path(= URL) = "/" 경로로 이동하면 Home 텍스트가 출력됨 */}

        {/* 중첩 라우트 설정 
            /를 최상위 경로로 설정 */}
        <Route path = "/" element = { <Layout></Layout>}>
          {/* 중첩 라우트는 부모와 자식 컴포넌트가 함께 렌더링되는 구조 */}
          {/* 예:  */}
          <Route path = "/" element = { <Home/> }></Route>
          <Route path = "/register" element = { <Register/> }></Route>
          <Route path = "/login" element = { <Login/> }></Route>
          <Route path='/board/list' element={<BoardList></BoardList>}></Route>
          <Route path='/board/register' element={<BoardRegister></BoardRegister>}></Route>
          <Route path='/board/read/:no' element={<BoardDetail></BoardDetail>}></Route>
          <Route path='/board/modify/:no' element={<BoardModify></BoardModify>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
