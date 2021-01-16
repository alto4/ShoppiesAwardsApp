import React, { useContext } from 'react';
import MovieItem from './MovieItem';

import { GlobalContext } from '../context/GlobalState';

const Nominations = () => {
  // Get nominations from app-level state
  const { nominations } = useContext(GlobalContext);

  // Render all nominated movie items if at least one movie has been nominated
  return (
    <div className="bg-green nominations">
      <h2 className="text-center">Nominations</h2>      
      {nominations.length > 0 ? (
        <div className="nominations-container">
          {nominations.map((movie) => (
            <div key={movie.imdbID}>
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        null
      )}
    </div>
  )
}

export default Nominations