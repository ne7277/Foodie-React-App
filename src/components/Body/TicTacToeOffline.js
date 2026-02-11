import { useState } from "react";

const TicTacToeOffline = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">

  <div className="GameCard backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-white/20">

   
    <h1 className="OfflineTitle text-2xl sm:text-3xl font-bold text-white mb-2">
      You are Offline 🚫
    </h1>
    <p className="text-white/80 mb-6">
      Please check your internet connection
    </p>

    <p className="GameTitle text-lg text-yellow-300 font-semibold mb-6">
      Play Tic Tac Toe while offline 🎮
    </p>

    
    <div className="Game grid grid-cols-3 gap-3 w-full max-w-xs mx-auto">
      {board.map((value, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="aspect-square text-3xl sm:text-4xl font-bold 
                     flex items-center justify-center
                     rounded-xl
                     bg-white/20 text-white
                     hover:bg-white/40
                     transition-all duration-300
                     active:scale-95
                     shadow-lg"
        >
          {value}
        </button>
      ))}
    </div>
    <h3 className="mt-6 text-lg sm:text-xl font-semibold text-white">
      {winner
        ? `🏆 Winner: ${winner}`
        : board.includes(null)
        ? `Next Player: ${isXNext ? "X" : "O"}`
        : "It's a Draw! 🤝"}
    </h3>
    <button
      onClick={resetGame}
      className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 
                 text-black font-semibold rounded-full
                 transition-all duration-300
                 shadow-xl hover:scale-105 active:scale-95"
    >
      Restart Game
    </button>

  </div>
</div>
  );
};

export default TicTacToeOffline;


/* ============================= */
/* 🔹 Winner Logic              */
/* ============================= */

function calculateWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}
