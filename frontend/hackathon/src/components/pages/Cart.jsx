import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncupdateusers } from '../../store/userAction'; // Adjust path as needed

const Cart = ({ onClose }) => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducer.data);
  const cartItems = data?.cart || [];

  const handleQuantityChange = (productId, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.product.id === productId) {
        const newQuantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    });

    const updatedUser = { ...data, cart: updatedCart };
    dispatch(asyncupdateusers(data.id, updatedUser));
  };

  const handleRemove = (productId) => {
    const updatedCart = cartItems.filter((item) => item.product.id !== productId);
    const updatedUser = { ...data, cart: updatedCart };
    dispatch(asyncupdateusers(data.id, updatedUser));
  };

  

const subtotal = cartItems.reduce((sum, item) => {
  const price = parseFloat(String(item.product.price).replace(',', '.') || '0');
  return sum + price * item.quantity;
}, 0).toFixed(2);



  return (
    <div className="fixed right-0 top-0 w-full md:w-[400px] h-full bg-white shadow-xl z-50 p-6 flex flex-col">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-xl font-serif tracking-wide">YOUR CART <sup>{cartItems.length}</sup></h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="flex-1 overflow-auto">
        {cartItems.length === 0 ? (
          <p className="mt-6 text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cartItems.map(({ product, quantity }) => (
            <div key={product.id} className="border-b py-4 flex gap-4">
              <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm mt-1">{product.price} ₹</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => handleQuantityChange(product.id, 'dec')} className="border px-2 cursor-pointer">−</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 'inc')} className="border px-2 cursor-pointer">+</button>
                  <button onClick={() => handleRemove(product.id)} className="ml-auto text-sm underline text-gray-500">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <>
          <div className="border-t pt-4 mt-4 text-sm text-gray-500">
            <p className="flex justify-between font-bold text-black">
              <span>SUBTOTAL</span>
              <span>₹{subtotal} Rupees</span>
            </p>
            <p className="text-xs mt-1">Taxes and shipping calculated at checkout</p>
          </div>
          <button className="mt-4 w-full bg-orange-700 text-white py-3 uppercase tracking-wide">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
