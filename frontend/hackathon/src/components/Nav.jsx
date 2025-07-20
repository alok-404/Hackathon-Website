import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import Countries from './pages/Countries';
import Shopmenu from './pages/Shopmenu';
import Artistmenu from './pages/Artistmenu';
import NavLinks from './NavLinks';
import { IconShoppingBag , IconMenu2 , IconX , IconArrowNarrowLeft } from '@tabler/icons-react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';




const Nav = () => {

  
   useEffect(() => {
  const handleResize = () => {
    const isDesktop = window.innerWidth >= 768;
    if (isDesktop) {
      setIsOpen(false);
      setMobileShopOpen(false);
      setMobileArtistOpen(false);
      setShowShopDropdown(false);
      setShowArtistDropdown(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("jaipur");

  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileArtistOpen, setMobileArtistOpen] = useState(false);

  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [showArtistDropdown, setShowArtistDropdown] = useState(false);

  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const handleMobileShopClick = () => {
    setMobileArtistOpen(false);
    setMobileShopOpen(true);
  };
  const handleMobileArtistClick = () => {
    setMobileShopOpen(false);
    setMobileArtistOpen(true);
  };

  const handleNavLinkClick = (path) => {
    setIsOpen(false);
    setMobileShopOpen(false);
    setMobileArtistOpen(false);
    navigate(path);
  };

  // GSAP

  const mobileMenuRef = useRef(null);

useLayoutEffect(() => {
  if (isOpen && mobileMenuRef.current) {
    gsap.fromTo(mobileMenuRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.5, ease: 'power2.out' }
    );
  }
}, [isOpen]);

const navRef = useRef(null);

useLayoutEffect(() => {
  if (navRef.current) {
    gsap.fromTo(navRef.current,
      { y: "-2rem", opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power1.out' }
    );
  }
}, []);

  return (
    <nav className={`absolute
    w-full px-1 py-3  top-[2.5rem] z-50 transition-all duration-100  ${isOpen ? 'bg-[#e6e5e3]' : 'bg-transparent hover:bg-[#e6e5e3] opacity-97 active:bg-[#e6e5e3]'}`}>
      {/* Desktop Nav */}
      <div
       ref={navRef}
      className='hidden md:flex flex-col justify-between items-center bg-transparent'> 
        <div className='w-full ml-auto'>
          <Countries selected={city} onChange={setCity} />
        </div>
        <div className='flex items-center justify-between px-10 w-full max-w-[100vw] overflow-x-hidden'>
          <Search size={24} strokeWidth={1.5} className="text-green-900 cursor-pointer" />
          <NavLinks
            onNavigate={handleNavLinkClick}
            onMobileShopClick={handleMobileShopClick}
            onMobileArtistClick={handleMobileArtistClick}
            showShopDropdown={showShopDropdown}
            setShowShopDropdown={setShowShopDropdown}
            showArtistDropdown={showArtistDropdown}
            setShowArtistDropdown={setShowArtistDropdown}
          />
          <ShoppingBag size={23} strokeWidth={1.5} className="text-green-900 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className='md:hidden flex py-2 justify-between mx-2 sticky z-[999]'>
        <button onClick={toggleNavbar} className="text-xl cursor-pointer">
          {isOpen ? <IconX stroke={1.5} className="text-green-900 cursor-pointer" /> : <IconMenu2 stroke={1.5} className="text-green-900 cursor-pointer"/>}
        </button>
        <div className="flex items-center gap-2">
          <Search size={22} strokeWidth={1.5} className="text-green-900 cursor-pointer" />
          <IconShoppingBag size={23} strokeWidth={1.5} className="text-green-900 cursor-pointer" />
        </div>
        <div className='text-transparent'><br /></div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div  
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 top-20 bg-[#e6e5e3] shadow px-6 pt-30 py-6 flex flex-col justify-between z-50">
          {mobileShopOpen ? (
            <div className="transition-transform duration-300 transform translate-x-0">
              <button className="text-sm text-gray-700 mb-4" onClick={() => setMobileShopOpen(false)}><IconArrowNarrowLeft stroke={2} className=" text-green-900 cursor-pointer" /></button>
              <Shopmenu onNavigate={handleNavLinkClick} />
            </div>
          ) : mobileArtistOpen ? (
            <div className="transition-transform duration-300 transform translate-x-0">
              <button className="text-sm text-gray-700 mb-4" onClick={() => setMobileArtistOpen(false)}><IconArrowNarrowLeft stroke={2} className=" text-green-900 cursor-pointer" /></button>
              <Artistmenu onNavigate={handleNavLinkClick} />
            </div>
          ) : (
            <>
              <NavLinks
              
                onNavigate={handleNavLinkClick}
                onMobileShopClick={handleMobileShopClick}
                onMobileArtistClick={handleMobileArtistClick}
              />
              <div className="pt-2 border-t">
                <Countries selected={city} onChange={setCity} />
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
