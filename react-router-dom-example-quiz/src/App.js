import logo from './logo.svg';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Movies from './component/Movies';


function App() {
  console.log('App..'); 
  return (
    <div>
      <h1>Quiz1</h1>

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/movies'>Movies</NavLink></li>
      </ul>
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies/*' element={<Movies></Movies>}></Route>
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>

    </div>
  );
}


export default App;
