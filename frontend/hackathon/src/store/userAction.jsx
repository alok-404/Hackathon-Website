import { toast } from "react-toastify";
import axios from "../api/axiosconfig";
import { loadusers, removeUser } from "./reducers/userSlice";

// ✅ Current user action
export const asynccurrentusers = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch(loadusers(user)); 
    } else {
      toast.error("User Not Logged in!");
      console.log("User Not Logged in!");
    }
  } catch (error) {
    toast.error("Error getting current user");
    console.log("Error getting current user:", error);
  }
};

// ✅ Logout user action
export const asynclogoutusers = () => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser()); // Clear user data in Redux state
    console.log("User logged out successfully!");
    toast.success("User logged out successfully!");
  } catch (error) {
    toast.error("Error logging out user");
    console.log("Error logging out user:", error);
  }
};



export const asyncupdateusers = (id, user) => async (dispatch, getState) => {
  try {
    console.log("🚨 ID received in asyncupdateusers:", id);
    console.log("🧾 User data to update:", user);

    const { data } = await axios.patch(`/users/${id}`, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asynccurrentusers()); 
    toast.success("You're good to go!");
  } catch (error) {
    console.log("❌ Error updating user:", error);
    toast.error("Error updating user");
  }
};






// For User Delete

export const asyncdeleteusers = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/users/${id}`);
    dispatch(asynclogoutusers());
    // toast.success("User deleted successfully!");  
  } catch (error) {
    toast.error("Error deleting user"); 
    console.log("Error deleting user:", error);
  }
};

// For User login

export const asyncloginusers = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
    if (data.length > 0) {
      localStorage.setItem("user", JSON.stringify(data[0]));
      dispatch(loadusers(data[0])); // ✅ THIS IS CRITICAL
      toast.success("User logged in successfully!");
    } else {
      toast.error("User not found!");
    }
  } catch (error) {
    toast.error("Error logging in user");
    console.log("Error logging in user:", error);
  }
};



// ✅ Register user action
export const asyncregisterusers = (user) => async (dispatch, getState) => {
  try {
    console.log("Current State >>>>", getState());
    const res = await axios.post("/users", user);
  } catch (error) {
    console.log("Error registering user:", error);
    toast.error("Something went wrong");
    throw error;
  }
};
