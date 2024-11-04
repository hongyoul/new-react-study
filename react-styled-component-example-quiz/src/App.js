import './App.css';
import styled from 'styled-components';

// 라우터 돔을 사용하려면 npm 명령어로 가져와야함(내장X)
import { Route, Routes, NavLink} from 'react-router-dom';
// 1. 사용자 동작에 따라 화면 전환
// → Route + Link 혹은 NavLink 사용
// 이전 조건문 + useState + a태그 또는 버튼

import Home from './component/Home';

import About from './component/About';

import Main from './component/Contact';

const IiTag = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 0 15px;
`;

const UlTag =styled.ul`
  background-color: #e9e9e9;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 about;
  list-style: none;
  justify-content: center;
`;

function App() {

  console.log('App..');

  return (
    <div className="App">
      <UlTag>
      {/* NavLink은 a태그 대신에 사용하는것으로 별도의 a태그를 만들 필요가 없음 */}
      <IiTag><NavLink to ='/'>Home</NavLink></IiTag>
      {/* to는 href와 같음 */}
      <IiTag><NavLink to='/about'>About</NavLink></IiTag>
      <IiTag><NavLink to='/contact'>Contact</NavLink></IiTag>
      </UlTag>

      {/* Routes는 주소에 따라 전환되는 부분 
          조건(path): URL주소, 
          리턴(element): 새로운 UI */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Main></Main>}></Route>
      </Routes>

    </div>
  );
}

export default App;
