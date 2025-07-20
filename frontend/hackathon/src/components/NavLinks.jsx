import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import Shopmenu from './pages/Shopmenu';
import Artistmenu from './pages/Artistmenu';

// const Shopmenu = lazy(() => import('./pages/Shopmenu'));
// const Artistmenu = lazy(() => import('./pages/Artistmenu'));

const NavLinks = ({
  onNavigate,
  onMobileShopClick,
  onMobileArtistClick,
  showShopDropdown,
  setShowShopDropdown,
  showArtistDropdown,
  setShowArtistDropdown
}) => {
  const isMobile = window.innerWidth < 768;

  // GSAP ANIMATION
  const shopDropdownRef = useRef(null);
  const artistDropdownRef = useRef(null);

  useEffect(() => {
    if (isMobile && showShopDropdown && shopDropdownRef.current) {
      gsap.fromTo(shopDropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [showShopDropdown]);

  useEffect(() => {
    if (isMobile && showArtistDropdown && artistDropdownRef.current) {
      gsap.fromTo(artistDropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [showArtistDropdown]);

  return (
    <div className='flex flex-col  text-[0.9rem]  gap-4 text-[#23444d] md:flex-row relative md:items-center md:gap-12'>

      {/* Home */}
      {isMobile ? (
        <div className="border-b-1 md:border-b-0 pb-4 cursor-pointer" onClick={() => onNavigate('/')}>Home</div>
      ) : (
        <NavLink className="border-b-1 md:border-b-0" to="/">Home</NavLink>
      )}

      {/* Shop */}
      {isMobile ? (
        <div onClick={onMobileShopClick} className="border-b-1 md:border-b-0 pb-4 cursor-pointer group">
          <div className='flex  justify-between items-center'>
            <div>Shop</div>
            <ChevronRight size={18} className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90" />
          </div>
        </div>
      ) : (
        <div
          className="relative group border-b-1 md:border-b-0 pb-4 cursor-pointer"
          onMouseEnter={() => setShowShopDropdown(true)}
          onMouseLeave={() => setShowShopDropdown(false)}
        >
          <span onClick={() => onNavigate('/shop')}>
            <div className='flex  items-center gap-1 md:mt-3.5'>
              Shop
              <ChevronRight size={18} className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90" />
            </div>
          </span>
          {showShopDropdown && (
            <div
              ref={isMobile ? shopDropdownRef : null}
              className='fixed top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-red-300 z-50 rounded shadow-lg transition-all md:w-[90vw]'>
              <Shopmenu />
            </div>
          )}
        </div>
      )}

      {/* For Artist */}
      {isMobile ? (
        <div onClick={onMobileArtistClick} className="border-b-1 md:border-b-0 pb-4 cursor-pointer">
          <div className='flex justify-between  items-center'>
            <div>For Artist</div>
            <ChevronRight size={18} className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90" />
          </div>
        </div>
      ) : (
        <div
          className="relative border-b-1 md:border-b-0 pb-4 cursor-pointer"
          onMouseEnter={() => setShowArtistDropdown(true)}
          onMouseLeave={() => setShowArtistDropdown(false)}
        >
          <span onClick={() => onNavigate('/Forartist')}>
            <div className='flex items-center gap-1  md:mt-3.5'>
              For Artist
              <ChevronRight size={18} className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90" />
            </div>
          </span>
          {showArtistDropdown && (
            <div
              ref={isMobile ? artistDropdownRef : null}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-white z-50 rounded shadow-lg transition-all md:w-[90vw]">
              <Artistmenu />
            </div>
          )}
        </div>
      )}

      {/* Other Pages */}
      {isMobile ? (
        <>
          <div className="border-b-1 md:border-b-0 pb-4 cursor-pointer" onClick={() => onNavigate('/product')}>Product</div>
          <div className="border-b-1 md:border-b-0 pb-4 cursor-pointer" onClick={() => onNavigate('/contact')}>Contact</div>
          <div className="border-b-1 md:border-b-0 pb-4 cursor-pointer" onClick={() => onNavigate('/about')}>About</div>
        </>
      ) : (
        <>
          <NavLink className="border-b-1 md:border-b-0" to="/contact">Contact</NavLink>
          <NavLink className="border-b-1 md:border-b-0" to="/about">About</NavLink>
        </>
      )}
    </div>
  );
};

export default NavLinks;
