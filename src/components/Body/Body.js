import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import restaurantsData from "../../data/RestaurantsData.json";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
    <div className="ttt-container">
      <h1 className="offline-title">You are offline, Please Check Your internet Connection</h1>
      <p className="offline-subtitle">Play Tic Tac Toe while offline 🎮</p>

      <div className="ttt-board">
        {board.map((value, index) => (
          <button
            key={index}
            className="ttt-cell"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <h3 className="ttt-status">
        {winner
          ? `Winner: ${winner}`
          : board.includes(null)
          ? `Next Player: ${isXNext ? "X" : "O"}`
          : "It's a Draw!"}
      </h3>

      <button className="ttt-restart" onClick={resetGame}>
        Restart
      </button>
    </div>
  );
};

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (onlineStatus) {
      loadRestaurants();
    }
  }, [onlineStatus]);

  const loadRestaurants = () => {
    try {
      const cards = restaurantsData?.data?.cards || [];
      const restaurantList =
        cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurantData(restaurantList);
      setFilteredData(restaurantList);
    } catch (error) {
      console.error("Error loading restaurants", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTopRatedButton = () => {
    if (!isTopRated) {
      const topRated = restaurantData.filter(
        (res) => res?.info?.avgRating >= 4.5
      );
      setFilteredData(topRated);
    } else {
      setFilteredData(restaurantData);
    }
    setIsTopRated(!isTopRated);
  };

  const handleSearch = () => {
    const filtered = restaurantData.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (onlineStatus === false) {
    return <TicTacToeOffline />;
  }

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="my-4 mb-4 flex flex-wrap items-center justify-center gap-4">
  
  {/* SEARCH BAR */}
  <div className="flex items-center gap-2">
    <input
      type="text"
      placeholder="Search restaurants..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="h-10 w-64 rounded-lg border border-gray-500 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />

    <button
      onClick={handleSearch}
      className="flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 font-serif text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:from-orange-400 hover:to-orange-500 hover:shadow-orange-500/50 active:scale-95"
    >
      Search
    </button>
  </div>

  {/* TOP RATED BUTTON */}
  <button
    onClick={handleTopRatedButton}
    className="flex h-10 w-52 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 font-serif text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:from-orange-400 hover:to-orange-500 hover:shadow-orange-500/50 active:scale-95"
  >
    {isTopRated ? "All Restaurants" : "Top Rated Restaurants"}
  </button>
</div>

    {/* BODY */}
      <div className="body flex flex-wrap justify-center gap-6">
        {filteredData.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredData.map((restaurant) => (
            <RestroCard
              key={restaurant.info.id}
              resdata={restaurant.info}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

