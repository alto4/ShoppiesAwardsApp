import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const MovieItem = ({ movie }) => {
  const { Title, Poster, Year, Director, imdbID } = movie;

  const { addMovieToNominations, nominations } = useContext(GlobalContext);

  // Check for status of movie as already nominated 
  let nominatedMovie = nominations.find(movie =>  movie.imdbID );
  const nominateDisabled = nominatedMovie ? true : false;

  return (
    <div className="card text-center d-flex justify-content-center bg-dark text-white m-4 pb-4" style={{width: '280px'}}>
      <img src={Poster} alt={Title} className="img-fluid mx-auto p-3" />
      <h3 className="mx-3">{Title} <span className="small">({Year})</span></h3>
      <div>
        <Link to={`/movie/${imdbID}`} className="btn btn-success my-3 mx-2 px-4">Details</Link>
        <button onClick={() => addMovieToNominations(movie) } disabled={nominateDisabled} className="btn btn-success my-3 mx-2 px-4">Nominate</button>
      </div>
    </div>
  )  
}

export default MovieItem