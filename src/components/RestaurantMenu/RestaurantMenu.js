import { useEffect, useState, useRef } from "react";
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
  const [openIndex, setOpenIndex] = useState(null);

  const accordionRefs = useRef([]);

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

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2 className="res-name" onClick={() => setShowAbout(true)}>
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

      <div className="menu-container">
        {categories.map((category, index) => (
          <div key={category.title} className="menu-category">
            <div
              className="accordion-header"
              onClick={() => handleAccordion(index)}
            >
              <h3>{category.title}</h3>
              <span className={openIndex === index ? "rotate" : ""}>
                ▼
              </span>
            </div>

            <div
              ref={(el) => (accordionRefs.current[index] = el)}
              className="accordion-body"
              style={{
                height:
                  openIndex === index
                    ? accordionRefs.current[index]?.scrollHeight
                    : 0,
              }}
            >
              <div className="accordion-inner">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
