import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const [username, setUsername] = useState('@');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem('token', responseData.token);
        navigate('/profile');
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in the user');
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith('@')) {
      setUsername('@' + value);
    } else {
      setUsername(value);
    }
  };

  return (
    <div className='bg-black h-screen'>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-slate-400 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username.slice(1)}
            onChange={handleUsernameChange}
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
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
