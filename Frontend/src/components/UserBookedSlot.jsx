import { useEffect, useState } from "react";

const UserBookedSlot = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/slot/booked', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching user slot:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Booked Slots</h2>
      {data.length > 0 ? (
        data.map((slot) => (
          <div key={slot.id} className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">{(slot.book).toString()}</h3>
            <p className="text-gray-700 mb-1"><strong>Description:</strong> {slot.description}</p>
            <p className="text-gray-700 mb-1"><strong>Timestamp:</strong> {slot.timestamp}</p>
            <p className="text-gray-700 mb-1"><strong>Time:</strong> {slot.time}</p>
            <p className="text-gray-700 mb-1"><strong>User ID:</strong> {slot.user_id}</p>
            <p className="text-gray-700 mb-1"><strong>Booked By:</strong> {slot.username}</p>

          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No Booking at this time</p>
      )}
    </div>
  );
};

export default UserBookedSlot;
