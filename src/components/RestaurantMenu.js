import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer} from "./Body/Shimmer";
import MenuItemCard from "./MenuItemCard";
import menuData from "../data/RestaurantMenuData.json";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menuInfo, setMenuInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = () => {
    try {
      const menu = menuData[resId];

      if (!menu) {
        setMenuInfo(null);
        return;
      }

      setMenuInfo(menu.info);
      setCategories(menu.categories || []);
    } catch (error) {
      console.error("Error loading menu", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <MenuShimmer />;
  if (!menuInfo) return <h3>Menu not available</h3>;

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>{menuInfo.name}</h2>
        <p>{menuInfo.cuisines.join(", ")}</p>
        <p>⭐ {menuInfo.avgRating}</p>
        <p>{menuInfo.areaName}</p>
      </div>
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
    </div>
  );
};

export default RestaurantMenu;
