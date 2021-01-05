import React, { useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

const Searchbar = () => {

  // State management
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  // searchMovies function - accepts search text, then requests corresponding results from OMDB
  const searchMovies = async text => {
    // Make get request
    const apiKey = '63b86109';
    const res = await axios.get(`https://www.omdbapi.com/?s=${text}&apikey=${apiKey}&type=movie`);
 
    setResults(res.data.Search);
  }

  // onChange function
  const onChange = (e) => {
    e.preventDefault();

    setText(e.target.value);
  };

  // onSubmit function 
  const onSubmit = (e) => {
    e.preventDefault();

    // Validate search input in case blank search is attempted
    if(text === '') {
      alert("Please enter a movie title.");
    } else {
      searchMovies(text);
      setText('');
    }    
  };


  return (
    <div className="container">
      <form onSubmit={onSubmit} className="mt-5">
        <div className="form-group row w-50 mx-auto">
          <input type="text" value={text} onChange={onChange} name="text" className="form-control w-75" placeholder="Search movies..." />
          <input type="submit" value="Search" className="btn btn-dark w-25" />
        </div>
      </form>

      {results && (
        <ul className="results">
          {results.map((movie) => (
            <div key={movie.imdbID}>
              <MovieItem movie={movie} />
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Searchbar
