import React, { useEffect } from 'react'


const BathroomCard = () => {
// set up a function to hold our props of each piece of data from our db
  useEffect(() => {

  }, [])

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
    <ul className='bathDetailsList'>
      <li className='bathDetail'>{}</li>
      <li className='bathDetail'>{}</li>
      <li className='bathDetail'>{}</li>
    </ul>
    <div className='bathBtnOptions'>
    <button
              type="button"
              className="bathUpdateDetailsButton primaryButton"
              // onClick={() => {(); }}
            >
              Update Bathroom
            </button>
            <button type="button" className="bathDeleteButton secondaryButton">
            Delete Bathroom
          </button>
    </div>
   </article>
  )
}

export default BathroomCard;
