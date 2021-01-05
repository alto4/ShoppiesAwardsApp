export default (state, action) => {
  switch(action.type) { 
    case "ADD_MOVIE_TO_NOMINATIONS":
      return {...state,
      nominations: [action.payload, ...state.nominations]};
    default: 
      return state;
  }
};