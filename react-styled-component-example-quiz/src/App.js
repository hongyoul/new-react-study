import './App.css';
import styled from 'styled-components';
import { Route, Routes, NavLink} from 'react-router-dom';

import Home from './Home';

import About from './About';

import Contact from './Contact';

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
  return (
    <div className="App">
      <UlTag>
      <IiTag><NavLink to ='/'> Home </NavLink></IiTag>
      <IiTag><NavLink to='/about'> About </NavLink></IiTag>
      <IiTag><NavLink to='/contact'> Contact </NavLink></IiTag>
      </UlTag>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>

    </div>
  );
}

export default App;
