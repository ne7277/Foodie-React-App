import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import restaurantsData from "../../data/RestaurantsData.json";
import useOnlineStatus from "../../utils/useOnlineStatus";
import TicTacToeOffline from "./TicTacToeOffline";

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
    <div className="body px-4 py-6">

      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="h-10 w-64 rounded-lg border border-gray-500 px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            onClick={handleSearch}
            className="h-10 px-5 rounded-lg bg-orange-500 text-white 
                       transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Search
          </button>
        </div>

        <button
          onClick={handleTopRatedButton}
          className="h-10 px-6 rounded-lg bg-orange-600 text-white 
                     transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {isTopRated ? "All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredData.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredData.map((restaurant) => (
            <RestroCard
              key={restaurant?.info?.id}
              resdata={restaurant?.info}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
