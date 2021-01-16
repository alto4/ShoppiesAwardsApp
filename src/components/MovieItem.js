import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieItem = ({ movie }) => {
  const { Title, Poster, Year, imdbID,  } = movie;

  const { addMovieToNominations, removeMovieFromNominations, nominations } = useContext(GlobalContext);

  // Check for status of movie as already nominated 
  const nominatedMovie = nominations.find(nomination => nomination.imdbID === movie.imdbID );
  const renderRemoveButton = nominatedMovie ? true : false;

  // Disable nominate buttons once 5 nominations have been made
  const nominationsFull = nominations.length >= 5 ? true : false;
  
  return (
    <div className="card">
      <img src={Poster} alt={Title} className="img-fluid mx-auto p-3 poster" />
      <h4 className="mx-3">{Title}<span className="h6"> ({Year})</span></h4>

      <div>
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" className="button btn btn-success my-3 mx-2 px-4">Details</a>
        {
          renderRemoveButton ? (
            <button onClick={() => removeMovieFromNominations(movie.imdbID) } className="btn btn-danger my-3 px-3 mx-2">Withdraw</button>    
          ) : 
          (
            <button onClick={() => addMovieToNominations(movie) } disabled={nominationsFull} className="btn btn-success my-3 px-3 mx-2">Nominate</button>
          )
        }
        
      </div>
    </div>
  )  
}

export default MovieItem