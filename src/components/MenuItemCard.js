const MenuItemCard = ({ item }) => {
  const { name, price } = item;

  return (
    <div className="menu-item-card">
      <div>
        <h4>{name}</h4>
        <p>₹{price}</p>
      </div>
      <button>Add</button>
    </div>
  );
};

export default MenuItemCard;
