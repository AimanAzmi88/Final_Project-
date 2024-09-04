import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className='p-6'>
      <button
      onClick={handleLogout}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
    </div>
  );
};

export default Logout;
