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
  const addMovieToNominations = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: movie });
  };

  return (
    <GlobalContext.Provider value={{ nominations: state.nominations, results: state.results, addMovieToNominations }}>
      {props.children}
    </GlobalContext.Provider>
  )
};

export default GlobalProvider;