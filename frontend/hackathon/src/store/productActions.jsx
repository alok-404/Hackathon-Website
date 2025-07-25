import { toast } from "react-toastify";
import axios from "../api/axiosconfig";
import { loadproduct } from "./reducers/productSlice";


export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
      const {data} = await axios.get("/products");
      dispatch(loadproduct(data));

  
  } catch (error) {
    toast.error("Error getting load product");
    console.log("Error getting load product:", error);
  }
}

// ✅ Current product action
export const asynccreateproduct = (product) => async (dispatch, getState) => {
  try {
    const {data} = await axios.post("/products" , product);
    dispatch(asyncloadproducts());
    toast.success("Product created successfully");
  } catch (error) {
    toast.error("Error getting current product");
    console.log("Error getting current product:", error);
  }
};

export const asyncupdateproduct = (id,product) => async (dispatch, getState) => {
  try {
   await axios.patch("/products/" + id , product);
    dispatch(asyncloadproducts());
    toast.success("Product Updates successfully");
    
  } catch (error) {
    toast.error("Error getting updating product");
    console.log("Error getting updating product:", error);
  }
};

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncloadproducts()); 
    toast.success("Product Deleted successfully");
  } catch (error) {
    toast.error("Error getting Deleting product");
    console.log("Error getting Deleting product:", error);
  }
};

