import ToggleDiv from '../components/Toggle';

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-custom-gradient p-4 sm:p-8">
      <h1 className='text-black bg-box-color m-6 p-4 border-black border-2 text-center'>
        Welcome to the land of authentication, where you get to prove you’re a real person. How exciting
      </h1>
      <div className="w-full max-w-screen-lg h-full sm:h-2/3 overflow-hidden border-black border-4">
        <ToggleDiv />
      </div>
    </div>
  );
};

export default Auth;
