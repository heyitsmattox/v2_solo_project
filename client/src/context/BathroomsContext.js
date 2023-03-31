import React, { useState, createContext } from 'react';

export const BathroomContext = createContext();

export const BathroomContextProvider = props => {
  const [bathrooms, setBathrooms] = useState([])


  return (
    <BathroomContext.Provider value={{bathrooms: bathrooms, setBathrooms}}>
      {props.children}
    </BathroomContext.Provider>
  )
}