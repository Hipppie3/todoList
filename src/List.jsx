import {useState, React} from 'react'
import './List.css'

function List() {
 // 1. State to store the list tasks
 const [tasks, setTasks] = useState([]);//start with empty array since there is no tasks initially

 // 2. State to store the current value of the input field
 const [inputValue, setInputValue] = useState("");//start with empty string since input is empty

 // 3. Handle input changes by updating inputValue as the user types
 const handleInput = (e) => {
  setInputValue(e.target.value); // Update the inputValue with what the user is typing
 };

 // 4. Handle form submission to add the current inputValue to the tasks list
 const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the page from reloading when the form is submitted
  if (inputValue !== "") {// Make sure the input is not empty
   setTasks([...tasks, inputValue]); //Add the current inputValue to the tasks list
   setInputValue(""); // Clear the input field after the task is added
  }
 };

 // 5. Handle task delete
 const handleDelete = (index) => {
  //filter out the task that matches the clicked delte button's index
  const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
  setTasks(updatedTasks); // Update the state with the new list of tasks
 };

let title = "daniel's do list"

  return (
    <div className='list-container'>
      

    <div className='form-container'>
      <form onSubmit={handleSubmit}className='list-input'>
      {/* Input field for user to type a task */}
      <input
      type='text'
      value={inputValue} // Bind input value to the inputValue state
      onChange={handleInput} // Call handleInput when the user types in the input
      placeholder="Input Tasks"
      />
      {/* Submit button to add the task */}
      <button type='submit'>Submit</button>
     </form>

     {/* Render the list of tasks */}
    <div className='list'>
      <h2> Daniel's Task List </h2>

      {/* Map over the task array and render each task as a list item */}
      <ul>
       {tasks.map((task, index) => (
   
        <li key={index}><div className="list-and-button">{task}
        <button onClick = {() => handleDelete(index)}>Delete</button>
              </div>
        </li> 

       ))}
      </ul>
    </div>

    </div>

    </div>

  )
}

export default List
