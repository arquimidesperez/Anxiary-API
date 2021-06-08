import { useEffect, useState } from 'react';
import { getEntries } from '../services/api';
import './stylesheets/newentry.css';
// import { Link } from 'react-router-dom';

export default function CreateEntry(){

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEntries();
      console.log(res);
      setEntries(res);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    
  }

  const handleSubmit = async(e) => {
    
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
        <input type='text' name='title' className='EntryTitle'/>
        <br />
        <label className='FormLabels'>Write to your Anxiary</label>
        <br />
        <input type='text' name='title' className='Entry' />
        <br />
        <label className='FormLabels'>Rate your mood</label>
        <select name='moodScore'>
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


