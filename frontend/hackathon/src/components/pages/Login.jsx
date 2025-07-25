import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncloginusers } from "../../store/userAction";
import useHeroAnimation from "./useHeroAnimation";

const Login = () => {

const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook

  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const LoginHandler = (user) => {
    console.log("Submitted User:", user);
    dispatch(asyncloginusers(user));
    reset();
    navigate("/");
  };



  return (
    <div
    ref={heroRef}
    className="hero-bg min-h-screen w-full flex items-center justify-center bg-[#f1f4ff]">
      <div className="flex w-[90%] max-w-5xl bg-white rounded-3xl overflow-hidden shadow-xl">
        {/* Left image section */}
        <div
          className=" hero-heading w-1/2 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/f1/1c/c3/f11cc35edc45c04064194793ab020215.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Right login form section */}
        <div className="hero-btn w-full md:w-1/2 p-10 gap-10 bg-white relative">

          <div
          onClick={()=>navigate("/")}
          className="absolute top-5 right-5 px-5 py-1 bg-gray-200 rounded-full hover:bg-red-500 cursor-pointer active:scale-95">x</div>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Sign in to Mystrispot
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Don’t have an account?{" "}
            <Link to="/register" className="text-red-500 font-medium">
              Sign up
            </Link>
          </p>

          <form
            onSubmit={handleSubmit(LoginHandler)}
            className="flex flex-col gap-4"
          >
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />

            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-3 rounded-md font-semibold hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Continue
            </button>

            <div className="flex items-center gap-2 my-4">
              <hr className="flex-grow border-t" />
              <span className="text-sm text-gray-400">OR</span>
              <hr className="flex-grow border-t" />
            </div>

            <div className="flex gap-3 justify-center">
              <button
                type="button"
                className="flex items-center bg-pink-100 px-4 py-2 rounded-md text-sm"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Google
              </button>
              <button type="button" className="bg-gray-200 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </button>
              <button type="button" className="bg-gray-200 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
