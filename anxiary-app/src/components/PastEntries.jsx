import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getEntries } from '../services/api';

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

  return (
      <div>
      {entries && entries.map((entry) => {
        return <div key={entry.id}>
          {/* <Link to={`/pastentries/${entry.id}`}>{entry.field.Title}</Link> */}
          <p>{entry.fields.Title}</p>
          </div>
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>This is some text</h3>
    </div>
  )
}