import { useState } from 'react';
import RegisterUser from './RegisterUser';
import LoginUser from './LogInUser';

const ToggleDiv = () => {
  const [isLeft, setIsLeft] = useState(true);

  const togglePosition = () => {
    setIsLeft(!isLeft);
  };

  return (
    <div className="relative h-full overflow-hidden flex flex-col items-center justify-center">
      <div className="flex w-full h-full justify-center items-center">
        {isLeft ? <LoginUser /> : <RegisterUser />}
      </div>
      <div className="absolute top-0 text-center bg-fuchsia-400 m-8 p-4 rounded-md border-black shadow-bold">
        {isLeft
          ? 'Already have an account? What a trendsetter you are!'
          : 'Wow, still without an account? I guess you’re just too good for that. But, you know, making one could be fun!'}
      </div>
      <button
        onClick={togglePosition}
        className="absolute bottom-4 bg-button m-4 px-6 py-4 hover:border-2 border-black text-black font-bold"
      >
        {isLeft ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
  );
};

export default ToggleDiv;
