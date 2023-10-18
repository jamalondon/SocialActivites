import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  //create the context variable
  const Context = React.createContext();

  const Provider = ({ children }) => {
    //declare the reducer that will modify our state
    const [state, dispatch] = useReducer(reducer, initialState);

    //create a array to store all the helper functions for the reducer
    const boundActions = {};

    //loop through all of the helper functions and dispatch them so theyre known to all the context's being made
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    //return the context variable with the initial state values, as well as the helper functions
    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
