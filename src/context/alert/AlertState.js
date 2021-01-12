import React, { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

// Initial state 
const alertState = { message: '', type: '' };

// Create app-level alert context
export const AlertContext = createContext(alertState);

// Create provider
export const AlertProvider = (props) => {
  const [state, dispatch] = useReducer(AlertReducer, alertState);  

  // setAlert function
  const setAlert = (message, type) => {
    dispatch({ type: "SET_ALERT", payload: { message, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 5000);
  }

  return (
    <AlertContext.Provider 
      value={{ 
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
};

export default AlertProvider;