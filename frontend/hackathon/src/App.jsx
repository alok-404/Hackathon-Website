import React, { useEffect, useState } from 'react';
import "./components/Nav";
import Mainroutes from './components/routes/Mainroutes';
import Nav from './components/Nav';
import axios from "./api/axiosconfig";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentusers } from "./store/userAction";
import { asyncloadproducts } from "./store/productActions";
import CartDrawer from './components/pages/CartDrawer';
import NewsletterPopup from './components/pages/NewsletterPopup'; 


const App = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productsReducer);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false); // 👈 popup state

  useEffect(() => {
    !data && dispatch(asynccurrentusers());
  }, [data]);

  useEffect(() => {
    products.length === 0 && dispatch(asyncloadproducts());
  }, [products]);


useEffect(() => {
  if (!data) { // agar user logged in nahi hai
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }
}, [data]);





  return (
    <div className='overflow-x-hidden h-full w-full max-w-[100vw] min-h-screen uppercase' style={{ fontFamily: '"Montserrat", sans-serif' }}>
      {/* <Highlights/> */}
      <Nav
        openCart={() => setIsCartOpen(true)}
        setShowNewsletter={setShowNewsletter} // 👈 pass to Nav
      />
      <Mainroutes />

      {/* 👇 Drawers */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {showNewsletter && (
        <NewsletterPopup onClose={() => setShowNewsletter(false)} />
      )}
    </div>
  );
};

export default App;
