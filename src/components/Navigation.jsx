import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateSlot from "./CreateSlot";

const Navigation = () => {
  const navigate = useNavigate();
  const [showCreateSlot, setShowCreateSlot] = useState(false)

  const toggleCreateSlot = () => {
    setShowCreateSlot(!showCreateSlot);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleSigOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="sticky top-2 z-10 text-black bg-form w-full h-12 flex gap-4 px-2 border-black shadow-bold">
      <button onClick={() => handleNavigation('/slot')} className="hover:underline">Slots</button>
      <button onClick={() => handleNavigation('/profile')} className="hover:underline">Profile</button>
      <button onClick={toggleCreateSlot} className="hover:underline">Create Slot</button>
      {showCreateSlot && (
        <div>
          <div className="relative animate-fade-in-up w-full">
            {/* <button
              onClick={toggleCreateSlot}
              className="absolute top-6 right-8 text-gray-600 hover:text-slate-200"
            >
              &#x2715;
            </button> */}
            <CreateSlot 
              onFormSubmit={toggleCreateSlot}
            />
          </div>
        </div>
      )}
      <button onClick={handleSigOut} className="hover:underline">Sign out</button>

    </div>
  );
};

export default Navigation;
