import { useNavigate } from "react-router-dom";
import TicTacToeOffline from "./TicTacToeOffline";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center 
                    bg-gradient-to-br from-red-500 via-pink-500 to-purple-600
                    text-white px-6 py-10">

      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 text-2xl font-bold hover:scale-110 transition"
      >
        ✕
      </button>

      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-7xl font-extrabold tracking-wider mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Oops! Page Not Found 😵
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-white text-purple-600 
                     font-semibold rounded-full
                     transition-all duration-300 
                     hover:scale-105 shadow-lg"
        >
          Go Back Home
        </button>
      </div>

      <div className="w-24 h-1 bg-white/40 rounded-full mb-8"></div>

      <div className="w-full max-w-md">
        <TicTacToeOffline />
      </div>
    </div>
  );
};

export default Error404;
