import React from 'react'
// Add Title 'To Do List'
// Add a label with 'Tasks'
// Create an input so user can add task to do
// Create a submit button

function List() {
  return (
    <div className='list-container'>
     <div className='list-input'>
      <h1>To Do List</h1>
      <label>Tasks: </label>
      <input></input>
      <button>Submit</button>
     </div>
     <div className='list'>
     
     </div>
    </div>
  )
}

export default List
