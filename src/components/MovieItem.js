import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieItem = ({ movie }) => {
  const { Title, Poster, Year, imdbID  } = movie;

  // Get nominations data and state functions from global context
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
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" className="button btn btn-success">Details</a>
        {
          // If movie is already nominated render the remove button, otherwise render nominate button
          renderRemoveButton ? (
            <button onClick={() => removeMovieFromNominations(movie.imdbID) } className="btn btn-danger">Withdraw</button>    
          ) : 
          (
            <button onClick={() => addMovieToNominations(movie) } disabled={nominationsFull} className="btn btn-success">Nominate</button>
          )
        }
      </div>
    </div>
  )  
}

export default MovieItem