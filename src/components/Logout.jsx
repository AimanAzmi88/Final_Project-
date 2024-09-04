import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PopupMessage from './PopupMessage';

const Logout = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsPopupOpen(false);
    navigate('/login');
  };

  const handleConfirmLogout = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className='p-6'>
      <PopupMessage
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Logout"
        message="Are you sure you want to log out?"
        onConfirm={handleLogout}
      />
      <button
        onClick={handleConfirmLogout}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
