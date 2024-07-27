import { useState } from 'react';
import RegisterUser from './RegisterUser';
import LoginUser from './LogInUser';

const ToggleDiv = () => {
  const [isLeft, setIsLeft] = useState(true);

  const togglePosition = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className="relative w-96em h-full overflow-hidden flex items-center justify-center">
      <div
        className={`flex w-full h-full absolute transition-transform duration-500 transform ${
          isLeft ? '-translate-x-1/3' : 'translate-x-0'
        }`}
      >
        <div className="w-full md:w-1/3 h-full">
          <LoginUser />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 h-full bg-default">
          <p className='bg-fuchsia-400 m-8 p-4 rounded-md border-black shadow-bold'>{isLeft? 'Already have an account? What a trendsetter you are!' : 'Wow, still without an account? I guess you’re just too good for that. But, you know, making one could be fun!'}</p>
          <button
            onClick={togglePosition}
            className="bg-button m-4 px-6 py-4 hover:border-2 border-black text-black font-bold"
          >
            {isLeft ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <div className="w-full md:w-1/3 h-full">
          <RegisterUser />
        </div>
      </div>
    </div>
  );
};

export default ToggleDiv;
