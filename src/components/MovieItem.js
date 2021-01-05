import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = (props) => {
  const { Title, Poster, Year, Director, imdbID } = props.movie;
 
  return (
    <div className="card text-center d-flex justify-content-center bg-dark text-white m-4 pb-4" style={{width: '280px'}}>
      <img src={Poster} alt={Title} className="img-fluid mx-auto p-3" />
      <h3 className="mx-3">{Title} <span className="small">({Year})</span></h3>
      <div>
        <Link to={`/movie/${imdbID}`} className="btn btn-success my-3 mx-2 px-4">Details</Link>
        <a className="btn btn-success my-3 mx-2 px-4">Nominate</a>
      </div>
    </div>
  )  
}

export default MovieItem