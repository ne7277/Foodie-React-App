import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTRO_API } from "../../utils/constants";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isTopRated, setIsTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {fetchRestaurants();}, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(RESTRO_API);

      const json = await response.json();

      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurantData(restaurants);
      setFilteredData(restaurants);
      setLoading(false);
    } catch (error) {
      console.log("Swiggy API blocked or failed");
      setLoading(false);
    }
  };

  const handleTopRatedButton = () => {
    if (!isTopRated) {
      const topRated = restaurantData.filter(
        (res) => res?.info?.avgRating > 4.5
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

  if (loading) {
    return <h2><Shimmer/></h2>;
  }

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
