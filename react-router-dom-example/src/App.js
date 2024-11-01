import logo from './logo.svg';
import './App.css';
// 라우트 import
import { Route, Routes, NavLink} from 'react-router-dom';

// Home import(꺼내오기)
import Home from './component/Home';

// Contact import하여 불러오기(꺼내오기)
import Contact from './component/Contact';

// Topics 
import Topics from './component/Topics';


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

export default App;
