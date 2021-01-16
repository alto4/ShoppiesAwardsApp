import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state - attempts to get nominations from local storage if any are set, otherwise initializes empty array
const initialState = {
  nominations: localStorage.getItem('nominations') ? JSON.parse(localStorage.getItem('nominations')) : [],
  results: []
};

// Create app-level context
export const GlobalContext = createContext(initialState);

// Create provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);  

  // Write changes in state of nominations to local storage
  useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(state.nominations));
  });
  
  // Add to nomination list
  const addMovieToNominations = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: movie });
    window.scrollBy({
      top: (0 - window.scrollY),
      behavior: 'smooth'
    });
  };

  // Remove from nomination list
  const removeMovieFromNominations = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_NOMINATIONS", payload: imdbID});
    window.scrollBy({
      top: (0 - window.scrollY),
      behavior: 'smooth'
    });
  };

  return (
    <GlobalContext.Provider 
      value={{ 
        nominations: state.nominations, 
        results: state.results, 
        addMovieToNominations,
        removeMovieFromNominations
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;