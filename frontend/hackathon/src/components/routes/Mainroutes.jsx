import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../pages/ScrollToTop';

// Lazy imports
const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const Shopmenu = lazy(() => import('../pages/Shopmenu'));
const Forartist = lazy(() => import('../pages/Forartist'));
const Artistmenu = lazy(() => import('../pages/Artistmenu'));
const Products = lazy(() => import('../pages/CreateProduct'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const CreateProduct = lazy(() => import('../pages/CreateProduct'));
const UserProfile = lazy(() => import('../pages/users/UserProfile'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const UserProfileMenu = lazy(() => import('../pages/UserProfileMenu'));
const NotionTemplates = lazy(() => import('../pages/NotionTemplate'));
const ArtistCoursesMore = lazy(() => import('../pages/ArtistCoursesMore'));
const About = lazy(() => import('../pages/About'));

const Mainroutes = () => {
  return (
    <div className="bg-[#e6e5e3]">
      <Suspense fallback={<div className="text-center  flex flex-col justify-center items-center h-screen w-screen text-lg">
        <img
          className='h-30 w-30'
          src="/images/giphy.gif" alt="" />
        Loading...</div>}>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopmenu" element={<Shopmenu />} />
          <Route path="/forartist" element={<Forartist />} />
          <Route path="/artistmenu" element={<Artistmenu />} />
          <Route path="/userprofilemenu" element={<UserProfileMenu />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/user-profile" element={<UserProfile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/notiontemplate" element={<NotionTemplates />} />
          <Route path="/artistcoursesmore" element={<ArtistCoursesMore />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Mainroutes;
