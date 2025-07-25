import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useWatch } from "react-hook-form";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/productActions";
import { asyncupdateusers } from "../../store/userAction";
import { toast } from "react-toastify";
import useHeroAnimation from "./useHeroAnimation";

const ProductDetails = () => {

  const heroRef = useRef(null);
    useHeroAnimation(heroRef); // Custom animation hook

  const [quantity, setQuantity] = useState(1); // Default quantity = 1

  const navigate = useNavigate();

  const { id } = useParams();
  const products = useSelector((state) => state.productsReducer.products);
  const data = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();

  console.log("user", data);
  console.log("products", products);

  const product = products.find((p) => p.id === id);
  // console.log(product);

  const { register, reset, handleSubmit, control } = useForm({
    defaultValues: {
      title: product?.title || "",
      description: product?.description || "",
      price: product?.price || "",
      category: product?.category || "",
      imageUrl: product?.imageUrl || "", // Or image if your field is product.image
      imageFile: product?.imageFile || null,
    },
  }); // ✅ control added here;

  const [imagePreview, setImagePreview] = useState(null);

  const imageUrl = useWatch({ control, name: "imageUrl" }); // ✅ Corrected
  const imageFile = useWatch({ control, name: "imageFile" }); // ✅ Corrected

  useEffect(() => {
    if (product) reset(product); // 👈 reset on load
  }, [product, reset]);

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    } else if (imageUrl) {
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  }, [imageFile, imageUrl]);

  const UpdateProductHandler = (product) => {
    console.log("Updated product", product);
    dispatch(asyncupdateproduct(id, product));
    reset(); // Reset the form after submission
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/shop");
  };

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  return (
    <div
    ref={heroRef}

    className="w-full mx-auto bg-[#c9d0e0]  px-4 py-8">
      <div
      
      className="w-full md:mx-auto  md:px-5 py-8">
        <div className="flex flex-col bg-white p-0.5  lg:flex-row gap-15">
          {/* Image Section */}
          <div className="flex-1">
            <div className="w-full aspect-square overflow-hidden rounded-md ">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="hero-bg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="hero-btn flex-1 space-y-4 px-4 md:px-5  md:pt-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
              {product.title}
            </h1>
            <p className="text-xl text-gray-700">₹{product.price}</p>
            <p className="text-xl text-gray-700">{product.description}</p>
            <p className="text-sm">
              Availability :{" "}
              <span className="text-red-500 font-medium">Few more hurry up!</span>
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-4">
              <button
                className="bg-gray-200 px-3 py-1 rounded text-lg cursor-pointer active:scale-95"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                className="bg-gray-200 px-3 py-1 rounded text-lg cursor-pointer active:scale-95"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            {/* Add to cart / sold out */}
      
            <button
  className="bg-amber-400 text-white px-6 py-2 mx-7 rounded-md mt-4 cursor-pointer active:scale-95"
  onClick={() => {
    if (!data) return;

    const existingItem = data.cart?.find((item) => item.product.id === product.id);
    let updatedCart;

    if (existingItem) {
      // Update quantity of existing item
      updatedCart = data.cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: quantity }
          : item
      );
    } else {
      // Add new item
      updatedCart = [...(data.cart || []), { product, quantity }];
    }

    dispatch(asyncupdateusers(data.id, { ...data, cart: updatedCart }));
    toast.success("Item added to cart!");
  }}
>
  Add to Cart
</button>


            {/* Payment Options */}
            <div className="pt-4 text-xs text-gray-600">
              Secured and trusted checkout with:
              <div className="flex gap-2 mt-2">
                <img
                  src="https://www.svgrepo.com/show/303225/visa-logo.svg"
                  alt="visa"
                  className="w-10 md:w-20"
                />
                <img
                  src="https://imgs.search.brave.com/CfLGU-jNPfwMNqRtzoOA5_g46AXKuMeV2NF58deHyfw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy80NTIyMjIv/Z29vZ2xlLXBheS5z/dmc"
                  alt="GooglePay"
                  className="w-10 md:w-20"
                />
                <img
                  src="https://www.svgrepo.com/show/362021/paypal-3.svg"
                  alt="paypal"
                  className="w-10 md:w-20"
                />

                <img
                  src="https://www.svgrepo.com/show/508402/apple-pay.svg"
                  alt="applePay"
                  className="w-10 md:w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update and delete Form section */}

{data && data?.isAdmin && (
  <div className=" flex flex-col md:flex-row   bg-[#e8f5e9] overflow-hidden">
    {/* Left: Image Preview */}
    <div className=" w-full md:w-1/2 flex py-10 items-center justify-center bg-[#e6e5e3] md:bg-[#d2ecd8] p-4 md:p-0">
      <img
        src={imagePreview || "/dummy.png"}
        alt="Preview"
        className="h-[250px] md:h-[38rem] w-full max-w-[90%] object-cover border rounded shadow-md"
      />
    </div>

    {/* Right: Full-Screen Form Section */}
    <div className="w-full md:w-1/2 md:h-screen md:py-22 bg-white flex items-center justify-center p-4">
      <div className="w-full h-full max-w-[500px] md:overflow-y-auto px-5 py-8 md:p-10 rounded-xl shadow-2xl space-y-6">
        <h2 className="text-2xl font-bold text-green-700 text-center">Update Product</h2>

        <form onSubmit={handleSubmit(UpdateProductHandler)} className="flex  flex-col gap-4">
          <label className="text-sm">Title</label>
          <input
            {...register("title")}
            type="text"
            className="bg-gray-100 border px-3 py-2 rounded outline-none text-green-800 placeholder:text-green-700"
            placeholder="Enter product title"
          />

          <label className="text-sm">Description</label>
          <textarea
            {...register("description")}
            className="bg-gray-100 border px-3 py-2 rounded outline-none text-green-800 placeholder:text-green-700"
            placeholder="Enter description"
          />

          <label className="text-sm">Price</label>
          <input
            {...register("price")}
            type="number"
            className="bg-gray-100 border px-3 py-2 rounded outline-none text-green-800 placeholder:text-green-700"
            placeholder="Enter price"
          />

          <label className="text-sm">Category</label>
          <input
            {...register("category")}
            type="text"
            className="bg-gray-100 border px-3 py-2 rounded outline-none text-green-800 placeholder:text-green-700"
            placeholder="Enter category"
          />

          <label className="text-sm">Paste Image URL</label>
          <input
            {...register("imageUrl")}
            type="text"
            className="bg-gray-100 border px-3 py-2 rounded outline-none text-green-800 placeholder:text-green-700"
            placeholder="https://example.com/image.jpg"
          />

          <label className="text-sm">Upload Image File</label>
          <input
            {...register("imageFile")}
            type="file"
            accept="image/*"
            className="bg-white border px-3 py-2 rounded text-green-900"
          />

          {/* {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-48 object-contain border rounded"
            />
          )} */}

          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 rounded hover:opacity-90"
          >
            Update Product
          </button>

          <button
            onClick={DeleteHandler}
            type="button"
            className="bg-red-600 text-white font-semibold py-2 rounded hover:opacity-90"
          >
            Delete Product
          </button>

          <button
            onClick={() => navigate("/shop")}
            type="button"
            className="bg-green-700 text-white font-semibold py-2 rounded hover:opacity-90"
          >
            Go to Store
          </button>
        </form>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ProductDetails;
