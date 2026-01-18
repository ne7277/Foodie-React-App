import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "../Body/Shimmer";
import MenuItemCard from "./MenuItemCard";
import RestaurantsAbout from "./RestaurantAbout";
import menuData from "../../data/RestaurantMenuData.json";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const data = menuData[resId];

    if (!data) {
      setLoading(false);
      return;
    }

    setRestaurant(data.info ? data.info : data);
    setCategories(data.categories || []);
    setLoading(false);
  }, [resId]);

  if (loading) return <MenuShimmer />;
  if (!restaurant) return <h3>Menu not available</h3>;

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2
          className="res-name"
          onClick={() => setShowAbout(true)}
        >
          {restaurant.name}
        </h2>

        {restaurant.cuisines && <p>{restaurant.cuisines.join(", ")}</p>}
        {restaurant.avgRating && <p>⭐ {restaurant.avgRating}</p>}
        {restaurant.areaName && <p>{restaurant.areaName}</p>}
      </div>

      {showAbout && (
        <RestaurantsAbout
          resId={resId}
          onClose={() => setShowAbout(false)}
        />
      )}

      {categories.length > 0 && (
        <div className="menu-container">
          {categories.map((category) => (
            <div key={category.title} className="menu-category">
              <h3>{category.title}</h3>
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
