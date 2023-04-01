import React, { useContext, useEffect } from 'react'
import BathroomFinder from '../apis/BathroomFinder'
import { BathroomsContext } from '../context/BathroomsContext'


const BathroomCard = (props) => {
// set up a function to hold our props of each piece of data from our db
  const { bathrooms, setBathrooms } = useContext(BathroomsContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BathroomFinder.get('/');
        setBathrooms(response.data.data.bathrooms);
        console.log(response);
      } catch (err) {
      }
    }
   fetchData();
  }, [setBathrooms]) // passing the dependency array useEffect will only run when the component mounts.i.e just once

// const { 
// name, city, description
// } 
  return (
   <article>
    <div className='bathCard'>
      <div>
        <h2 className='bathName'>{}</h2>
      </div>
    </div>
    <div>
      { bathrooms && bathrooms.map(bathrooms => {
        return (
          <ul key ={bathrooms.id}>
          <ol>Name: {bathrooms.bathroom_of}</ol>
          <ol>City: {bathrooms.city}</ol>
          <ol>Description: {bathrooms.description}</ol>
          <ol>
            <button type="button" className="bathUpdateDetailsButton primaryButton">Update Bathroom</button>
          </ol>
          <ol>
            <button type="button" className="bathDeleteButton secondaryButton"> Delete Bathroom</button>
          </ol>
        </ul>
        )
      })}    
          </div>
   </article>
  )
}


export default BathroomCard;
