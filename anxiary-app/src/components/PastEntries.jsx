import './stylesheets/pastentries.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEntry, getEntries } from '../services/api';

export default function PastEntries() {
  const [entries, setEntries] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // const { id } = useParams;
  // console.log(id);


  const fetchData = async () => {
    const res = await getEntries();
    setEntries(res);
    // console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleDelete = async (id, index) => {
    await deleteEntry(id);
    fetchData();
  }


  return (
    <div>

      <h4 className='PastEntry'>Past Entries</h4>
      <div className='ReturnDiv'>
        {entries && entries.map((entry, index) => {
          return <div className='PEntriesDivs' key={entry.id}>
          <div className='BorderContent'>
          <p>
            Title of Entry: {entry.fields?.Title}
            <br />
            Date of Entry: {entry.fields?.Date}
            <br />
            Moodscore: {entry.fields?.Mood}
          </p>
          </div>
            <div className='BorderButton'>
              <button><Link to={`/pastentries/editview/${entry.id}`} className='EditB'>View & Edit</Link></button>
              <button onClick={()=>handleDelete(entry.id, index)}>Delete</button>
            </div>
            {modalOpen ? 
                  <div className='Modal'>
                    <div className='ModalContent'>
                      <p>
                      Title: {entry.fields.Title}
                      <br />
                      Date: {entry.fields?.Date}
                      <br />
                      Entry: {entry.fields.Entry}
                      <br />
                      Moodscore: {entry.fields?.Mood}
                      </p>
                      <button onClick={() => setModalOpen(false)}>Close</button>
                    </div>
                  </div>      
                  : ''}
          </div>
      })}
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}