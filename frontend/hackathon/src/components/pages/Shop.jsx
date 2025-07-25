import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "./ProductModal"; // ✅ Make sure this is correctly imported
import { Link } from "react-router-dom";
import YtEmbed4 from "./YtEmbed4 ";
import Footer from "./Footer";
import useHeroAnimation from "./useHeroAnimation";

const Shop = () => {

  const heroRef = useRef(null);
    useHeroAnimation(heroRef); // Custom animation hook


  const products = useSelector((state) => state.productsReducer.products);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  // ✅ Renders each product card
  const renderProducts = products.map((product) => (
    <div
      key={product.id}
      className=" group relative border rounded p-3 bg-white overflow-hidden shadow transition-all duration-300"
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imageUrl || product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded transition-transform duration-300 group-hover:scale-95 md:h-90"
        />
      </Link>
      <h1>{product.category}</h1>

      {/* 🟠 Quick View Button */}
      <button
        onClick={() => handleQuickView(product)}
        className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-zinc-200 text-center py-2 text-sm font-semibold"
      >
        QUICK VIEW
      </button>

      <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
      <p className="text-sm text-gray-600">₹{product.price}</p>
    </div>
  ));

  return (
    <div
    ref={heroRef}
    className="h-full pt-40 overflow-x-hidden bg-[#e6e5e3] uppercase">
      {/* 🔶 Hero Section */}
      <div
        className="hero-bg h-[70vh] p-10 bg-[#e6e5e3] bg-center md:h-[50vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-heading h-full flex-col flex items-center justify-center text-white text-5xl font-bold">
          <h1>what DO you want?</h1>
        </div>
      </div>

      {/* 🔽 Product Grid */}
      <div className="hero-btn px-4 py-10">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {renderProducts}
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading...</div>
        )}
      </div>

      {/* 🪟 Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Youtube Sections */}
      <div className=" md:h-screen bg-[#e6e5e3] px-5  items-center justify-center">
        <YtEmbed4 />
      </div>

      {/* FOoter */}

      <div className=" bg-[#e6e5e3] flex items-center justify-center">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
