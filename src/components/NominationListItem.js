import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const NominationListItem = ({ movie }) => {
  const { Title, Poster, Year, Director, imdbID } = movie;

  const { addMovieToNominations, removeMovieFromNominations, nominations } = useContext(GlobalContext);

  // Check for status of movie as already nominated 
  const nominatedMovie = nominations.find(nomination => nomination.imdbID === movie.imdbID );
  const renderRemoveButton = nominatedMovie ? true : false;

  // Disable nominate buttons once 5 nominations have been made
  const nominationsFull = nominations.length >= 5 ? true : false;
  
  return (
    <li className="nomination-list-item">
      <img src={Poster} alt={Title} className="poster-sm" />
      <div className="d-block">
        <h5>{Title}</h5>

        <div className="controls-container">
          <Link to={`/movie/${imdbID}`} className="button btn btn-success"><i className="fa fa-plus"></i></Link>
          {
            renderRemoveButton ? (
              <button onClick={() => removeMovieFromNominations(movie.imdbID) } className="btn btn-danger my-3 px-3 mx-2"><i className="fa fa-trash"></i></button>    
            ) : 
            (
              <button onClick={() => addMovieToNominations(movie) } disabled={nominationsFull} className="btn btn-success my-3 px-3 mx-2">Nominate</button>
            )
          }
          
        </div>
      </div>
    </li>
  )  
}

export default NominationListItem;