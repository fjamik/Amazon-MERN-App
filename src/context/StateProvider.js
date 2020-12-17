import React, { createContext, useReducer, useContext } from 'react'

// Need Context API
// 1. To track basket
// 2. To Track user

// Prepares the Data layer
export const StateContext = createContext()

// wrap our app and provide the DataLayer
// create Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Pull information from the DataLayer
export const useStateValue = () => useContext(StateContext)
