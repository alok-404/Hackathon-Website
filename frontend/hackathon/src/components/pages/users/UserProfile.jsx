import { LogOut } from "lucide-react";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { asyncdeleteusers, asyncupdateusers } from "../../../store/userAction";
import { toast } from "react-toastify";
import useHeroAnimation from "../useHeroAnimation";
// import { toast } from "react-toastify";
// import { asyncupdateusers } from "../../store/userAction"; // make sure this path is correct

const UserProfile = () => {
const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook

  const user = useSelector((state) => state?.userReducer?.data);
  console.log("user profile data:", user);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      profileImage: user?.profileImage || "",
      lastName: user?.lastName || "",
      username: user?.username || "",
      mobile: user?.mobile || "",
      email: user?.email || "",
      password: user?.password || "",
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

const UpdateUserHandler = (userData) => {
  console.log("👉 userData received in UpdateUserHandler:", userData);
  const userId = userData?.id;
  console.log("🆔 Extracted userId:", userId);

  if (!userId) {
    toast.error("User ID missing!");
    return;
  }

  dispatch(asyncupdateusers(userId, userData));
  console.log("✅ Dispatching update...");
  toast.success("User Updated successfully!");
  
};


 const DeleteUserHandler = (userData) => {
  console.log("🧨 userData received in DeleteUserHandler:", userData);
  const userId = userData?.id || userData?._id; // ✅ fallback support

  if (!userId) {
    toast.error("User ID is missing!");
    return;
  }

  dispatch(asyncdeleteusers(userId));
  toast.success("User deleted successfully!");
  navigate
};



  if (!user) return <div>Loading user data...</div>;

return (
  <div
  ref={heroRef}
  className="min-h-screen w-full bg-[#e6e5e3]  text-[#23444d] py-10  md:py-30 px-4 flex flex-col gap-10 items-center justify-center">

    {/* 1st Div – Profile Section */}
    <div className="hero-bg w-full max-w-4xl bg-[#FCF8DD] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
      <img
        src={user.profileImage}
        alt="User Avatar"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg mb-4"
      />
      <h2 className="text-3xl font-bold capitalize text-[#23444d]">{user.firstName} {user.lastName}</h2>
      <p className="text-green-400 text-sm mt-1">Standard User</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6 text-sm">
        <div className="space-y-2">
          <p><span className="text-gray-400">Username:</span> <span className="text-[#23444d] font-medium">{user.username}</span></p>
          <p><span className="text-gray-400">Email:</span> <span className="text-[#23444d] font-medium">{user.email}</span></p>
          <p><span className="text-gray-400">Mobile:</span> <span className="text-[#23444d] font-medium">{user.mobile}</span></p>
        </div>
        <div className="space-y-2">
          <p><span className="text-gray-400">ID:</span> <span className="text-[#23444d] font-medium">{user.id}</span></p>
          <p><span className="text-gray-400">Admin Access:</span> <span className="text-[#23444d] font-medium">{user.isAdmin ? "Yes" : "No"}</span></p>
          <p><span className="text-gray-400">Password:</span> <span className="text-[#23444d] font-medium">{user.password}</span></p>
        </div>
      </div>
    </div>

    {/* 2nd Div – Form Section with Preview */}
    <form
      onSubmit={handleSubmit((formValues) => {
        const fullUser = { ...user, ...formValues };
        UpdateUserHandler(fullUser);
      })}
      className="hero-heading w-full max-w-4xl bg-[#ffd9df] text-black rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.15)] flex flex-col gap-5 relative"
    >
      <div className="absolute top-4 right-6 text-xs font-semibold text-gray-500">👤 Update Profile</div>

      {/* Image Preview */}
      <div className="flex justify-center">
        <div className="w-28 h-28 rounded-full bg-white border-4 border-gray-300 shadow-md overflow-hidden">
          <img
            src={user.profileImage}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <input {...register('firstName')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="text" />

          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="text" />

          <label htmlFor="username">Username</label>
          <input {...register('username')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="text" />

          <label htmlFor="mobile">Mobile</label>
          <input {...register('mobile')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="number" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input {...register('email')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="email" />

          <label htmlFor="password">Password</label>
          <input {...register('password')} className="rounded-xl px-4 py-2 bg-white border border-gray-300" type="password" />

          {/* <label htmlFor="profileImageUrl">Profile Image URL</label>
          <input
            {...register("profileImage")}
            className="rounded-xl px-4 py-2 bg-white border border-gray-300"
            type="text"
            placeholder="https://example.com/image.jpg"
          /> */}

          <label htmlFor="profileImageUrl">Profile Image URL</label>
<input
  {...register("profileImage")}
  className="rounded-xl px-4 py-2 bg-white border border-gray-300"
  type="text"
  placeholder="https://example.com/image.jpg"
/>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg shadow-md">
          Update User
        </button>
        <button
          onClick={() => DeleteUserHandler(user)}
          type="button"
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md"
        >
          Delete User
        </button>
      </div>
    </form>
  </div>
);

};

export default UserProfile;
