import { useState } from 'react';

const ButtonToggle = () => {
  const [activeButton, setActiveButton] = useState('a');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`py-2 px-4 border ${activeButton === 'a' ? 'bg-red-500 text-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        onClick={() => handleButtonClick('a')}
      >
        Button A
      </button>
      <button
        className={`py-2 px-4 border ${activeButton === 'b' ? 'bg-red-500 text-white' : 'bg-transparent text-black'} transition-colors duration-300`}
        onClick={() => handleButtonClick('b')}
      >
        Button B
      </button>
    </div>
  );
};

export default ButtonToggle;
