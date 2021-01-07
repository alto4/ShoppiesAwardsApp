import React, { useEffect, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom';

const Movie = ({ match }) => {  

  const { Title, Year, Genre, Director, Writer, Actors, Plot, Poster } = moviesContext.movie;

    return (
      <Fragment>
        <div className="my-3 p-3">
          <Link to='/' className="btn btn-dark my-4">Back to Search</Link>
          
          <div className="row">
            <img src={Poster} />
            <div className="details col-md-8">
              <h2>{Title}</h2>
              <hr className="bg-dark" />
              <ul className="list-unstyled">
                <li className="h4">Year: {Year}</li>
                <li className="h4">Genre: {Genre}</li>
                <li className="h4">Director: {Director}</li>
                <li className="h4">Actors: {Actors}</li>
              </ul>
              <hr className="bg-dark" />
              <p className="h4">Summary: {Plot}</p>
            </div>          
          </div>  
        </div>
      </Fragment>
    )
  
}

export default Movie
