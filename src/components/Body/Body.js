import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import restaurantsData from "../../data/RestaurantsData.json";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = () => {
    try {
      const cards = restaurantsData?.data?.cards || [];

      const restaurantList =
        cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      console.log("Restaurants loaded:", restaurantList.length);

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
      res?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="toprated">
          <button onClick={handleTopRatedButton}>
            {isTopRated ? "All Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>
      </div>

      <div className="res-container">
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
