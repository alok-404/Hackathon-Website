
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Needed import
import { asyncupdateusers } from "../../store/userAction";
import useHeroAnimation from "./useHeroAnimation";
import { useNavigate } from "react-router-dom";


const ProductModal = ({ product, onClose }) => {


  const navigate = useNavigate()

const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook

const data = useSelector((state) => state.userReducer.data);
const products = useSelector((state) => state.productsReducer.products);

  console.log("user", data);
  console.log("products", products);

  const dispatch = useDispatch();
const AddtoCartHandler = (products) => {
  const copyuser = { ...data }; // shallow copy of user

  const existingCartItem = copyuser.cart?.find(
    (item) => item.product.id === products.id
  );

  let updatedCart;

  if (!existingCartItem) {
    // If not in cart, add it
    updatedCart = [...(copyuser.cart || []), { product: products, quantity: 1 }];
  } else {
    // If already in cart, increase quantity immutably
    updatedCart = copyuser.cart.map((item) =>
      item.product.id === products.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  const updatedUser = { ...copyuser, cart: updatedCart };

  console.log("🛒 Final Cart:", updatedUser.cart);
  dispatch(asyncupdateusers(updatedUser.id, updatedUser));
};


  if (!product) return null;

  return (
    <div
    ref={heroRef}
    className="hero-bg fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-lg w-full p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl">
          ×
        </button>

        <img
        onClick={()=>  navigate(`/product/${product.id}`)}
          src={product.imageUrl || product.image}
          alt={product.title}
          className="hero-heading cursor-pointer w-full h-70 object-cover rounded"
        />

        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-lg mt-2 text-gray-600">₹{product.price}</p>
        <p className="text-sm mt-2">
          {product.description || "No description provided."}
        </p>
        <p className="text-xs text-gray-400 mt-1">{product.category}</p>
        <button
          onClick={() => AddtoCartHandler(product)}
          className="hero-btn mt-4 bg-amber-500 text-white px-4 py-2 rounded w-full cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
