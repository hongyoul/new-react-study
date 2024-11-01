import { useParams } from 'react-router-dom';

// json파일에서 중복데이터를 가져온다
import data from './data.json';

function MoviesList() {
  let params = useParams();

  let findMovies = data.find((movies)=>{
    if(movies.id === Number(params.movies_id)) {
      return true;
    }
  });

  if(findMovies === undefined) {
    findMovies = {
      title: 'Sorry',
      description: 'Not found'
    }
  }
  return (
    <div>
      <h3>{findMovies.title}</h3>
      <a>{findMovies.description}</a>
      <img src={findMovies.poster}></img>

    </div>
  );

}

export default MoviesList;