import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state 
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

  // Actions 
  // Add to nomination list
  const addMovieToNominations = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: movie });
  };

  // Remove from nomination list
  const removeMovieFromNominations = (imdbID) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_NOMINATIONS", payload: imdbID});
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