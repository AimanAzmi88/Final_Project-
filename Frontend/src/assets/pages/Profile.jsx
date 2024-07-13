import { useState, useEffect } from 'react';
import Header from '../../components/Header';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: '',
    mmr: '',
    bio: '',
    user_id: '',
    username: '',
    ign: ''
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const responseData = await response.json();
      setUserData(responseData);
      setEditFormData({
        id: responseData.id || '',
        mmr: responseData.mmr || '',
        bio: responseData.bio || '',
        user_id: responseData.user_id || '',
        username: responseData.username || '',
        ign: responseData.ign || ''
      }); // Initialize the form with fetched data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editFormData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setIsEditing(false);
        fetchUserData(); // Refetch user data after successful update
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile');
    }
  };

  return (
    <div className='bg-black  h-full'>
      <Header />
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {userData ? (
        <div>
          {!isEditing ? (
            <>
              <p><strong>MMR:</strong> {userData.mmr}</p>
              <p><strong>Bio:</strong> {userData.bio}</p>
              <p><strong>User ID:</strong> {userData.user_id}</p>
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>IGN:</strong> {userData.ign}</p>
              <button
                onClick={handleEditButtonClick}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Edit
              </button>
            </>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">MMR:</label>
                <input
                  type="text"
                  name="mmr"
                  value={editFormData.mmr}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Bio:</label>
                <input
                  type="text"
                  name="bio"
                  value={editFormData.bio}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={editFormData.username}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">IGN:</label>
                <input
                  type="text"
                  name="ign"
                  value={editFormData.ign}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
            </form>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </div>
  );
};

export default Profile;
