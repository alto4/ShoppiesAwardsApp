import React, { useState, useContext, Fragment } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';
import NominationListItem from './NominationListItem';
import { GlobalContext } from '../context/GlobalState';
import { AlertContext } from '../context/alert/AlertState';
const Search = () => {

  // State management
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  
  const { nominations } = useContext(GlobalContext);
  const { setAlert } = useContext(AlertContext);
  
  // searchMovies function - accepts search text, then requests corresponding results from OMDB
  const searchMovies = async text => {
    // Make get request
    const apiKey = '63b86109';
    const res = await axios.get(`https://www.omdbapi.com/?s=${text}&apikey=${apiKey}&type=movie`);
 
    setResults(res.data.Search);
  }

  // onChange function
  const onChange = (e) => {
    setText(e.target.value);
  };

  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate search input in case blank search is attempted
    if(text === '') {
      setAlert('Please enter something', 'danger');
      
    } else {
      searchMovies(text);
    }    
  }

  return (
    <Fragment>
      <div className="container header-container">
        <div className="header-container-left">
          <h1>Nominate Your Top <br/>5 Picks</h1>
            <form onSubmit={onSubmit} className="mt-5">
            <div className="form-group row w-75">
              <input type="text" value={text} onChange={onChange} name="text" className="form-control w-75" placeholder="Search movies..." />
              <input type="submit" value="Search" className="btn btn-dark w-25 mb-5" />
            </div>
          </form>
        </div>
        <div className="header-container-right">
          <h4>Current Nominations</h4>
          {nominations.length > 0 ? (
          <ul className="nominations-list">
            {nominations.map((movie) => (
                <NominationListItem movie={movie} />
            ))}
          </ul>
            ) : (
              <h4 className="text-danger">You haven't nominated any movies yet.</h4>
            )}
        </div> 
      </div>
      {results && (                
        <div className="bg-green">

          <h2 className="text-center">Results</h2>
          <div className="results-container">
            {results.map((movie) => (
              <div key={movie.imdbID}>
                <MovieItem movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}      
    </Fragment>
  )
}

export default Search
