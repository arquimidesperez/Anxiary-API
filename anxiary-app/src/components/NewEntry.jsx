import { useState } from 'react';
import { useHistory } from 'react-router';
import { newEntry } from '../services/api';
import './stylesheets/newentry.css';
// import { Link } from 'react-router-dom';

export default function CreateEntry(){

  const defaultObj = {
    Title: "",
    Date: "",
    Entry: "",
    Mood: ""
  };

  const [input, setInput] = useState(defaultObj);
  const history = useHistory();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  /**
   * Need to modify the pastentries to map out the previous entries
   */

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await newEntry(input);
    console.log(response);
    history.push("/pastentries")
  }
  /**
   * For Form:
   * include a value='' to have information for the user
   * make it so it disappears when clicked on
   * can I style it too?
   */
  return (
    <div>
      <br />
      <br />
      <br />
      <h4 className='NewEntry'>Create a new Entry</h4>
      <form className = 'EntryForm' onChange={handleChange} onSubmit={handleSubmit}>
        <label className='FormLabels'>Title</label>
        <br />
        <input type='text' name='Title' className='EntryTitle'/>
        <br />
        <label className='FormLabels'>Date</label>
        <br />
        <input type='date' name='Date' className='EntryTitle'/>
        <br />
        <label className='FormLabels'>Write to your Anxiary</label>
        <br />
        <textarea type='text' name='Entry' className='Entry' />
        <br />
        <label className='FormLabels'>Rate your mood </label>
        <select name='Mood'>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <br />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )


}


