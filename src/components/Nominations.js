import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieItem from './MovieItem';

const Nominations = () => {
  // Get nominations 
  const { nominations } = useContext(GlobalContext);
  
  return (
    <div className="bg-green">
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
        <h4 className="text-danger">You haven't nominated any movies yet.</h4>
      )}
    </div>
  )
}

export default Nominations