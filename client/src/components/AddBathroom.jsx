import React, { useContext, useState } from "react";
import BathroomFinder from "../apis/BathroomFinder";
import { BathroomsContext } from "../context/BathroomsContext";

const AddBathroom = () => {
  const {addBathrooms} = useContext(BathroomsContext);
  const [bathroom_of, setBathroom_of] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
     const response = await BathroomFinder.post('/', {
        bathroom_of,
        city,
        description,
      });
      console.log('this is my response', response)
      addBathrooms(response.data.data.bathroom)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="wrapper">
      <h1>Add a Bathroom</h1>
      <form>
      <fieldset>
         <label>
           <p>Name of Location</p>
           <input value={bathroom_of} onChange={e => setBathroom_of(e.target.value)} type='text' name="bathroom of" placeholder="Name" />
           <p>City</p>
           <input value={city} onChange={e => setCity(e.target.value)} type='text' name="city" placeholder="City" />
           <p>Description</p>
           <input value={description} onChange={e => setDescription(e.target.value)} type='text' name="Description" placeholder="Description" />
         </label>
       </fieldset>
       <button onClick={handleSubmit} type="submit">Add Bathroom</button>
      </form>

    </div>
  )
}

export default AddBathroom;