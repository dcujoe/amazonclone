import React, { createContext, useContext, useReducer } from 'react';

// prepares the data layer
export const StateContext = createContext();


// wrap application and provide data layer 
export const StateProvider = ({ reducer, initialState, children }) => {
    <StateProvider.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateProvider.Provider>
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);