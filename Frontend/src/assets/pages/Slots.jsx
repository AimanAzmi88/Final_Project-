import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Navigation from '../../components/Navigation';

const DataFetcher = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/slot', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      setData(data);
      // console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleComplete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/slot', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id : `${id}` })
      });

      if (response.ok) {
        fetchData();
      } else {
        console.error('Failed to update item');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const formatTimestamp = (timestamp) => {
    return format(new Date(timestamp), 'PPpp'); // Example format: 'Jul 7, 2024, 7:29:28 AM'
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-custom-gradient gap-6 pt-4">
      <Navigation />
      <div className='bg-slot max-w-screen-lg w-full flex justify-center flex-col p-3 border-4 border-black'>
        <div className='flex flex-col gap-3 p-2 '>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className='bg-box-color h-80 rounded p-2 flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='font-bold text-black'>Posted by: {item.username}</h1>
                  <p className='text-black'>{formatTimestamp(item.timestamp)}</p>
                </div>
                <div className='border-2 border-black bg-fuchsia-300 h-32 p-3 text-black'>{item.description}</div>
                <ul className='text-black'>Position
                  <li className='text-xs'>{item.position}</li>
                </ul>
                <h1 className='text-black'>book: {(item.book).toString()}</h1>
                <button
                  className='bg-button mt-3 rounded h-8'
                  onClick={() => !item.book && handleComplete(item.id)}
                  disabled={item.book}
                >
                  {item.book? 'Booked by another user':'Book this slot'}
                </button>
              </div>
            ))
          ) : (
            <p className='text-black'>There are no slots available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFetcher;
