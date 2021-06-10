import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEntry } from '../services/api';

export default function EditViewEntries() {
  const { id } = useParams();
  const [editEntries, setEditEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEntry(id);
      console.log(response.fields);
      setEditEntries(response.fields);
    }
    fetchData();
  }, []);

  console.log(editEntries.Date);


  return (
    <div>
      <h4 className='NewEntry'>View and Edit a Previous Entry</h4>
      <div>
          <form className = 'EntryForm'>
          <label className='FormLabels'>Title</label>
          <br />
          <input type='text' value={editEntries.Title} name='Title' className='EntryTitle'/>
          <br />
          <label className='FormLabels'>Date</label>
          <br />
          <input value={editEntries.Date} type='date' name='Date' className='EntryTitle'/>
          <br />
          <label className='FormLabels'>Write to your Anxiary</label>
          <br />
          <textarea value={editEntries.Entry} type='text' name='Entry' className='Entry' />
          <br />
          <label className='FormLabels'>Rate your mood </label>
          <select value={editEntries.Mood} name='Mood'>
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
    </div>
  )
}