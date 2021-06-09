import './stylesheets/pastentries.css';

import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { deleteEntry, getEntries } from '../services/api';

export default function PastEntries() {
  const [entries, setEntries] = useState([]);
  // const { id } = useParams;
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEntries();
      setEntries(res);
      console.log(res);
    };
    fetchData();
  }, []);


  const handleDelete = async () => {
    await deleteEntry();
  }

  return (
    <div>
      <h4 className='PastEntry'>Past Entries</h4>
      <div className='ReturnDiv'>
        {entries && entries.map((entry) => {
          return <div className='PEntriesDivs' key={entry.id}>
          <div className='BorderContent'>
          <p>
            Title of Entry: {entry.fields.Title}
            <br />
            Date of Entry: {entry.fields.Date}
            <br />
            Moodscore: {entry.fields.Mood}
          </p>
          </div>
            <div className='BorderButton'>
              <button>Edit</button>
              <button>View</button>
              <button onClick={handleDelete}>Delete</button>
          </div>
      </div>
      })}
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}