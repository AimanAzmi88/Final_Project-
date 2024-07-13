import { useEffect, useState } from 'react';
import { format } from 'date-fns';

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
      console.log(data);
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
      const response = await fetch(`http://localhost:3000/slot/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ completed: true })
      });

      if (response.ok) {
        setData(prevData =>
          prevData.map(item =>
            item.id === id ? { ...item, completed: true } : item
          )
        );
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
    <div className="flex flex-col items-center w-full min-h-screen bg-black">
      <div className='bg-slate-900 max-w-screen-lg w-full flex justify-center flex-col p-3'>
        <div className='flex flex-col gap-3'>
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className='bg-black h-80 rounded p-3 flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <h1 className='font-bold text-white'>Posted by: {item.username}</h1>
                  <p className='text-white'>{formatTimestamp(item.timestamp)}</p>
                </div>
                <div className='border-2 border-slate-700 h-32 p-3 text-white'>{item.description}</div>
                <ul className='text-white'>Position
                  <li className='text-xs'>midlane</li>
                  <li className='text-xs'>safelane</li>
                  <li className='text-xs'>offlane</li>
                  <li className='text-xs'>support</li>
                  <li className='text-xs'>hard support</li>
                </ul>
                <button
                  className='bg-button mt-3 rounded h-8'
                  onClick={() => handleComplete(item.id)}
                >
                  Book this slot
                </button>
              </div>
            ))
          ) : (
            <p className='text-white'>There are no slots available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataFetcher;
