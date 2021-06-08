import { useEffect, useState } from 'react';
import { getEntries } from '../services/api';
// // import { Link } from 'react-router-dom';

export default function PastEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getEntries();
      console.log(res);
      setEntries(res);
    };
    fetchData();
  }, []);

}