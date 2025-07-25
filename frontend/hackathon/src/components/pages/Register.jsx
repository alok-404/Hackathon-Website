import React, { useRef, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncregisterusers } from '../../store/userAction';
import { toast } from 'react-toastify';
import useHeroAnimation from './useHeroAnimation';

const Register = () => {

const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook


  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🔄 Profile image mode and preview state
  const [imageMode, setImageMode] = useState("file"); // "file" or "url"
  const [imagePreview, setImagePreview] = useState(null);

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.carts = [];

    // 🧠 Attach final image value
    if (imageMode === "file") {
      user.profileImage = imagePreview; // base64
    } else {
      user.profileImage = imagePreview; // URL from input
    }

    dispatch(asyncregisterusers(user));
    toast.success("User registered successfully! Please login to continue...");
    navigate('/login');
    reset();
    setImagePreview(null);
  };

  return (
    <div
      ref={heroRef}
    
    >
      {/* 🔶 Hero Section */}
      <div
        className="hero-bg h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/bg7.jpg")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full pt-10 flex-col flex items-center justify-center uppercase text-white text-5xl font-bold md:items-start md:px-14 md:text-7xl">
          <h1
            className="hero-heading text-[#FFCC00]"
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            register
          </h1>
          <div className="hero-btn flex flex-row gap-5 mt-10">
            <button
              onClick={() => navigate("/shop")}
              className="cursor-pointer bg-[#c9d0e0] uppercase text-[0.8rem] px-6 py-4 border-[#c9d0e0] border-1 text-[#293452] font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1"
            >
              <span className="z-10 relative">Shop now</span>
            </button>
            <button
              onClick={() => navigate("/Forartist")}
              className="relative group cursor-pointer bg-transparent uppercase text-[#f1f5ff] text-xs px-6 py-4 border-[#c9d0e0] border-1 font-medium md:text-[#c9d0e0] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1"
            >
              <span className="z-10 relative">For Artist</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🔵 Register Form */}
      <form
        onSubmit={handleSubmit(RegisterHandler)}
        className="w-full max-w-5xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/20"
      >
        {/* Left Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-200 p-8 text-white space-y-6">
          <h2 className="text-4xl font-bold">Mystrispot</h2>
          <p className="text-center text-white/90">
            Fuel your passion. Shape your future. Join a space where creativity leads.
          </p>
          <img
            src="https://i.pinimg.com/736x/14/22/52/142252ba818f900ce02c8d4c603a6af2.jpg  "
            alt="Illustration"
            className="w-60 rounded h-auto object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 p-10 bg-white/90">
          <h3 className="text-2xl font-semibold text-gray-800">Welcome to Norothy</h3>
          <p className="text-sm text-gray-500 mb-4">Let’s help you get started</p>

          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">First Name</label>
              <input {...register("firstName")} type="text" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label className="label">Last Name</label>
              <input {...register("lastName")} type="text" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
          </div>

          {/* Mobile + Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Mobile</label>
              <input {...register("mobile")} type="number" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
            <div>
              <label className="label">Email</label>
              <input {...register("email")} type="email" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            </div>
          </div>

          {/* Username + Password */}
          <label className="label">Username</label>
          <input {...register("username")} type="text" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />

          <label className="label">Password</label>
          <input {...register("password")} type="password" className="bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300" />

          {/* Image Upload Option Toggle */}
          <div className="flex gap-4 mt-2">
            <button
              type="button"
              onClick={() => setImageMode("file")}
              className={`bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${imageMode === "file" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"}`}
            >
              Upload File
            </button>
            <button
              type="button"
              onClick={() => setImageMode("url")}
              className={`bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${imageMode === "url" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"}`}
            >
              Use Image URL
            </button>
          </div>

          {/* Conditional Inputs */}
          {imageMode === "file" ? (
            <>
              <label className="label">Choose Image </label>
              <input
                type="file"
                accept="image/*"
                className="input-style bg-gray-100 cursor-pointer p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => setImagePreview(reader.result);
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </>
          ) : (
            <>
              <label className="label">Paste Image URL</label>
              <input
                {...register("profileImage")}
                type="text"
                className="input-style bg-gray-100 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                onChange={(e) => setImagePreview(e.target.value)}
              />
            </>
          )}

          {/* Preview */}
          {imagePreview && (
            <div className="mt-3">
              <p className="text-sm  text-gray-600 mb-1">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border shadow-md"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full  bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-2 rounded-xl transition duration-300 font-semibold mt-4"
          >
            REGISTER
          </button>

          <p className="text-sm text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-700 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
