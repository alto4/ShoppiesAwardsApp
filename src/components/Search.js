import React, { useState, useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import NominationListItem from './NominationListItem';
import { GlobalContext } from '../context/GlobalState';

const Search = () => {

  // State management
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  
  const { nominations } = useContext(GlobalContext);
  
  // searchMovies function - accepts search text, then requests corresponding results from OMDB
  const searchMovies = async text => {
    // Make get request
    const apiKey = '63b86109';
    const res = await axios.get(`https://www.omdbapi.com/?s=${text}&apikey=${apiKey}&type=movie`);
 
    setResults(res.data.Search);

    // Scroll down to display results in any are returned from the search
    if(results) {
      window.scrollBy({
        top: (580 - window.scrollY),
        behavior: 'smooth'
      });
      
    }
  }

  // onChange function
  const onChange = (e) => {   

    setText(e.target.value);
    searchMovies(e.target.value);
  };


  return (
    <Fragment>
      <div className="container header-container">
        <div className="header-container-left">
          <h1>Nominate Your Top <br/>5 Picks</h1>
            <div className="mt-5">
            <div className="form-group row w-75">
              <input type="text" value={text} onChange={onChange} name="text" className="form-control w-100" placeholder="Search movies..." />
            </div>
          </div>
        </div>
        <div className="header-container-right">
          <h4>Current Nominations</h4>
          {nominations.length >= 5 ? (
            
          <div class="alert alert-success">Nominations Fulfilled!</div>
          
          ) : (
            ''
          )}
          {nominations.length > 0 ? (
            <ul className="nominations-list">
              {nominations.map((movie) => (
                  <NominationListItem movie={movie} />
              ))}
            </ul>
            ) : (
              null
            )}
        </div> 
      </div>
      <div className="bg-green">
        <h2 className="text-center">Results</h2>        
        {results && results.length > 0 ? (
          <div className="results-container">
            {results.map((movie) => (
              <div key={movie.imdbID}>
                <MovieItem movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          null
        )}
      </div>           
    </Fragment>
  )
}

export default Search
