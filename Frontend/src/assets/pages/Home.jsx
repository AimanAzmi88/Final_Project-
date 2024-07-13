import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { GiPunch } from "react-icons/gi";

const Home = () => {

  const handleClick = () => {
    window.location.href='/register'
  }
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black pt-1">
      <div className="max-w-screen-lg flex w-full justify-between">
        <div className="flex items-center" >
          <GiPunch className="text-white text-8xl"/>
          <h1 className="text-white text-4xl font-bold italic tracking-widest">B4B</h1>
        </div>
        <div className="flex items-end gap-3">
        <a href="https://www.instagram.com/odpixel_/"><AiFillInstagram className="text-white text-xl hover:text-button"/></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillYoutube className="text-white text-xl hover:text-button"/></a>
        </div>
      </div>
      <div className="flex items-end justify-start w-full max-w-screen-lg h-background bg-cover bg-center" style={{ backgroundImage: "url('/wallpaper.jpg')" }}>
        <div className="bg-black text-white p-4 gap-2 pr-10 flex flex-col">
          <h1 className="text-2xl font-bold italic">WELCOME TO THE</h1>
          <h1 className="text-2xl font-bold italic">BROS 4 BROS</h1>
          <button onClick={handleClick} className="bg-button hover:bg-white text-black font-bold py-2 px-4 rounded-lg">Register</button>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-screen-lg h-full pt-20 gap-2">
        <h2 className="text-white text-lg">Welcome to our &quot;Definitely Not a Scam&quot; Dota Coaching Bros!</h2>
        <h3 className="text-white font-thin text-sm">Skip the practice! Our Dota coaching offers advice from players who may or may not have climbed ranks. Why learn when you can pay to be told your mistakes? Pick from our packages, get tips that might help—or someone to blame for losses. Join now and enjoy paying for tips you might find on Reddit!</h3>
      </div>
    </div>
  );
};

export default Home;
