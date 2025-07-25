import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/productActions";
import useHeroAnimation from "./useHeroAnimation";

const CreateProduct = () => {
  const { register,  handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState(null);
  const imageUrl = useWatch({ control, name: "imageUrl" });
  const imageFile = useWatch({ control, name: "imageFile" });

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

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log("product", product);
    navigate("/shop");
    dispatch(asynccreateproduct(product));
  };

  const heroRef = useRef(null);
    useHeroAnimation(heroRef); // Custom animation hook

  return (
  
        <div
        ref={heroRef}
        className="h-screen w-screen">

  




    <div
    
    className="hero-bg flex flex-col lg:flex-row md:h-screen w-screen bg-gradient-to-r from-green-100 to-white">

      

      {/* Left Panel: Image Preview */}

    

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#def1d7] p-4">
        <img

          src={imagePreview ||"https://i.pinimg.com/1200x/4f/5d/35/4f5d358991c508ba59a5827f54d9da46.jpg"}
          alt="Preview"
          className="hero-heading w-full max-w-[400px] max-h-[400px] object-contain  rounded shadow-[1px_8px_50px_rgba(160,0,0,0.4)]
"
        />
      </div>

      {/* Right Panel: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit(CreateProductHandler)}
          className="hero-btn w-full max-w-[400px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-xl"
        >
          <h2 className="text-2xl font-bold text-center text-green-700 mb-2">Create Product</h2>

          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            className="bg-gray-100 border px-2 py-1 rounded"
            type="text"
          />

          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            className="bg-gray-100 border px-2 py-1 rounded"
          />

          <label htmlFor="price">Price</label>
          <input
            {...register("price")}
            className="bg-gray-100 border px-2 py-1 rounded"
            type="number"
          />

          <label htmlFor="category">Category</label>
          <input
            {...register("category")}
            className="bg-gray-100 border px-2 py-1 rounded"
            type="text"
          />

          <label htmlFor="imageUrl">Paste Image URL</label>
          <input
            {...register("imageUrl")}
            type="text"
            placeholder="https://example.com/image.jpg"
            className="bg-white border px-2 py-1 rounded"
          />

          <label htmlFor="imageFile">Upload Image File</label>
          <input
            {...register("imageFile")}
            type="file"
            accept="image/*"
            className="bg-white border px-2 py-1 rounded"
          />

          <button type="submit" className="bg-green-600 text-white py-2 mt-2 rounded hover:bg-green-700">
            Create Product
          </button>
        </form>
      </div>
    </div>

    </div>
  );
};

export default CreateProduct;
