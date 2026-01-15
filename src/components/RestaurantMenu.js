import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
  try {
    const response = await fetch(MENU_API + resId);

    const json = await response.json();
    setMenuData(json?.data);
    setLoading(false);
  } catch (error) {
    console.log("Menu API blocked by Swiggy");
    setLoading(false);
  }
};


  // if (loading) return <MenuShimmer />;

  /* ✅ Restaurant Info */
  const restaurantInfo =
    menuData?.cards
      ?.map((c) => c?.card?.card?.info)
      ?.find(Boolean);

  /* ✅ REGULAR cards */
  const regularCards =
    menuData?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  /* ✅ Item Categories ONLY */
  const itemCategories = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu-page">
      {/* 🔹 Restaurant Info */}
      <h2>{restaurantInfo?.name}</h2>
      <p>{restaurantInfo?.cuisines?.join(", ")}</p>
      <p>⭐ {restaurantInfo?.avgRating}</p>
      <p>{restaurantInfo?.areaName}</p>

      <h3>Menu</h3>

      {/* 🔹 Categories & Items */}
      {itemCategories.map((category) => (
        <div key={category.card.card.title}>
          <h4>{category.card.card.title}</h4>

          {category.card.card.itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="menu-item"
            >
              <p>{item.card.info.name}</p>
              <p>
                ₹
                {(item.card.info.price ||
                  item.card.info.defaultPrice) / 100}
              </p>
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// console.log(itemCategories);

export default RestaurantMenu;
