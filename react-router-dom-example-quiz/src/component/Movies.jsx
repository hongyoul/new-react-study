import { Route, Routes, NavLink } from 'react-router-dom';
import MoviesList from './MoviesList';
import data from './data.json';

function Movies(){

  let lis =[];

  for(let t of data) {

    lis.push(
      <li key={t.id}><NavLink to = {'/movies' + t.id}>{t.title}</NavLink></li>
    );
  }

  return (
    <div>
      <h2>Movies List</h2>
        <ul>
          {lis}
        </ul>
    <Routes>
      <Route path='/:movies_id' element={<MoviesList></MoviesList>}></Route>
    </Routes>

    </div>
  );
}

export default Movies;