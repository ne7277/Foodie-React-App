const MenuItemCard = ({ item }) => {
  const { name, price } = item;

  

  return (
    <div className="menu-item-card flex justify-between items-center px-4 py-[14px] mb-[10px] bg-white rounded-xl border-[1.5px] border-[#f1c97f] shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-transform transition-shadow duration-200 ease-in-out">
      <div>
        <h4>{name}</h4>
        <p>₹{price}</p>
      </div>
      <button>Add</button>
    </div>
  );
};

export default MenuItemCard;
