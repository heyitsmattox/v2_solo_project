import React, { useState, createContext } from 'react';

export const BathroomsContext = createContext();

export const BathroomContextProvider = (props) => {
  const [bathrooms, setBathrooms] = useState([])

  const addBathrooms = (bathroom) => {
    setBathrooms([...bathrooms, bathroom]);
  }
  return (
    <BathroomsContext.Provider value={{bathrooms, setBathrooms, addBathrooms}}>
      {props.children}
    </BathroomsContext.Provider>
  )
}