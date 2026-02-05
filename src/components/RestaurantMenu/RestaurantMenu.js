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
    <div className="menu-page max-w-5xl mx-auto px-4 py-6">
  {/* Restaurant Header */}
  <div
    className="
      relative bg-white
      p-6 md:p-8
      rounded-2xl mb-8
      border-2 border-[#f1c97f]
      shadow-lg shadow-black/10
      transition-all duration-300 ease-out
      hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 
    "
  >
    {/* Accent Bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f1c97f] to-orange-400 rounded-t-2xl" />

    <h2
      className="
        text-2xl md:text-3xl font-bold
        text-gray-800 cursor-pointer
        hover:text-orange-500 transition
      "
      onClick={() => setShowAbout(true)}
    >
      {restaurant.name}
    </h2>

    {restaurant.cuisines && (
      <p className="text-gray-600 mt-1">
        {restaurant.cuisines.join(", ")}
      </p>
    )}

    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
      {restaurant.avgRating && (
        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">
          ⭐ {restaurant.avgRating}
        </span>
      )}
      {restaurant.areaName && (
        <span className="bg-gray-100 px-3 py-1 rounded-full">
          📍 {restaurant.areaName}
        </span>
      )}
    </div>
  </div>

  {/* About Modal */}
  {showAbout && (
    <RestaurantsAbout
      resId={resId}
      onClose={() => setShowAbout(false)}
    />
  )}

  {/* Menu Categories */}
  <div className="menu-container flex flex-col gap-4">
    {categories.map((category, index) => (
      <div
        key={category.title}
        className="
          bg-white
          border border-gray-200
          rounded-xl
          overflow-hidden
          shadow-sm
        "
      >
        {/* Accordion Header */}
        <div
          className="
            flex justify-between items-center
            bg-gray-50 hover:bg-gray-100
            p-4 cursor-pointer
            transition
          "
          onClick={() => handleAccordion(index)}
        >
          <h3 className="font-semibold text-gray-800">
            {category.title}
          </h3>

          <span
            className={`transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {/* Accordion Body */}
        <div
          ref={(el) => (accordionRefs.current[index] = el)}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{
            height:
              openIndex === index
                ? accordionRefs.current[index]?.scrollHeight
                : 0,
          }}
        >
          <div className="p-4 flex flex-col gap-3">
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
