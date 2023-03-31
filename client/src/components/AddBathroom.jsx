import React from "react";

const AddBathroom = () => {
  return (
    <div className="wrapper">
      <h1>Add a Bathroom</h1>
      <form>
      <fieldset>
         <label>
           <p>Name of Location</p>
           <input type='text' name="bathroom of" placeholder="Name" />
           <p>City</p>
           <input type='text' name="city" placeholder="City" />
           <p>Description</p>
           <input type='text' name="Description" placeholder="Description" />
         </label>
       </fieldset>
       <button type="submit">Add Bathroom</button>
      </form>

    </div>
  )
}

export default AddBathroom;