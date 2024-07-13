import { useState } from 'react';
import  { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // Wait for the response to be parsed to JSON
      const responseData = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        alert('Failed to register user');
      }

      // Log the response data
      console.log(responseData.message);

    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user');
    }
  };

  return (
    <div className='bg-black flex h-screen items-center justify-center'>
      <div className='h-2/4 max-w-3/4 flex'>
      <img className='rounded-s-lg w-3/4' src="/wallpaper.jpg" alt="" />
      <form onSubmit={handleSubmit} className="w-1/4 mx-auto p-4 bg-white shadow-md rounded-e-lg w-/4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-slate-800 text-white py-2 rounded-lg hover:bg-button">
          Register
        </button>
      </form>
      </div>
    </div>
  );
};

export default RegisterUser;
