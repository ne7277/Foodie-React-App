const MenuItemCard = ({ item }) => {
  const { name, price } = item;

  return (
    <div
  className="
    menu-item-card
    flex justify-between items-center
    px-5 py-4
    bg-gradient-to-r from-orange-50 via-white to-white
    rounded-2xl
    border border-orange-200
    shadow-sm shadow-black/10
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-lg hover:shadow-black/15
    hover:from-orange-100
  "
>
  {/* Left Content */}
  <div className="flex flex-col gap-1">
    <h4 className="text-base font-semibold text-gray-800">
      {name}
    </h4>

    <p className="text-sm font-medium text-orange-600">
      ₹{price}
    </p>
  </div>

  {/* Action */}
  <button
    className="
      px-4 py-1.5
      text-sm font-semibold
      rounded-full
      bg-white
      border border-orange-400
      text-orange-500
      hover:bg-orange-500 hover:text-white
      transition-all duration-300
      hover:scale-105 cursor-pointer
    "
  >
    Add
  </button>
</div>

  );
};

export default MenuItemCard;
