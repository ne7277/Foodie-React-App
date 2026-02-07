import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../utils/Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price || 0),
    0
  );

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-gray-500">
          Add some delicious food to continue 😋
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.cartItemId}   // ✅ FIXED: unique key
            className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 border"
          >
            <div>
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <button
              onClick={() => dispatch(removeItem(item.cartItemId))} // ✅ FIXED
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 border-t pt-6 flex items-center justify-between">
        <h3 className="text-xl font-bold">
          Total: ₹{totalAmount}
        </h3>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
