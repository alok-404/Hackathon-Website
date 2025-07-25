import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Shopmenu from "./pages/Shopmenu";
import Artistmenu from "./pages/Artistmenu";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutusers } from "../store/userAction";
import UserProfileMenu from "./pages/UserProfileMenu";

const NavLinks = ({
  onNavigate,
  onMobileShopClick,
  onMobileArtistClick,
  onMobileLogOutClick,
  showShopDropdown,
  setShowShopDropdown,
  showArtistDropdown,
  setShowArtistDropdown,
  showLogOutDropdown,
  setShowLogOutDropdown,
}) => {
  const isMobile = window.innerWidth < 768;

  const shopDropdownRef = useRef(null);
  const artistDropdownRef = useRef(null);
  const LogOutDropdownRef = useRef(null);

  useEffect(() => {
    if (isMobile && showShopDropdown && shopDropdownRef.current) {
      gsap.fromTo(
        shopDropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showShopDropdown]);

  useEffect(() => {
    if (isMobile && showArtistDropdown && artistDropdownRef.current) {
      gsap.fromTo(
        artistDropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showArtistDropdown]);

  useEffect(() => {
    if (isMobile && showLogOutDropdown && LogOutDropdownRef.current) {
      gsap.fromTo(
        LogOutDropdownRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [showLogOutDropdown]);

  const user = useSelector((state) => state.userReducer.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(asynclogoutusers());
    navigate("/");
  };

  return (
    <div className="flex flex-col text-[0.9rem] gap-4 text-[#2A1458] md:flex-row relative md:items-center md:gap-12 uppercase">
      {/* Home */}
      {isMobile ? (
        <div
          className="border-b-1 md:border-b-0 pb-4 cursor-pointer"
          onClick={() => onNavigate("/")}
        >
          Home
        </div>
      ) : (
        <NavLink className="border-b-1 md:border-b-0 uppercase" to="/">
          Home
        </NavLink>
      )}

      {/* Shop */}
      {isMobile ? (
        <div
          onClick={onMobileShopClick}
          className="border-b-1 md:border-b-0 pb-4 cursor-pointer group"
        >
          <div className="flex justify-between items-center">
            <div>Shop</div>
            <ChevronRight
              size={18}
              className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
            />
          </div>
        </div>
      ) : (
        <div
          className="relative group border-b-1 md:border-b-0 pb-4 cursor-pointer"
          onMouseEnter={() => setShowShopDropdown(true)}
          onMouseLeave={() => setShowShopDropdown(false)}
        >
          <span onClick={() => onNavigate("/shop")}>
            <div className="flex items-center gap-1 md:mt-3.5 uppercase">
              Shop
              <ChevronRight
                size={18}
                className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
              />
            </div>
          </span>
          {showShopDropdown && (
            <div
              ref={isMobile ? shopDropdownRef : null}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-red-300 z-50 rounded shadow-lg transition-all md:w-[90vw]"
            >
              <Shopmenu />
            </div>
          )}
        </div>
      )}

      {/* For Artist */}
      {isMobile ? (
        <div
          onClick={onMobileArtistClick}
          className="border-b-1 md:border-b-0 pb-4 cursor-pointer"
        >
          <div className="flex justify-between items-center">
            <div>For Artist</div>
            <ChevronRight
              size={18}
              className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
            />
          </div>
        </div>
      ) : (
        <div
          className="relative border-b-1 md:border-b-0 pb-4 cursor-pointer"
          onMouseEnter={() => setShowArtistDropdown(true)}
          onMouseLeave={() => setShowArtistDropdown(false)}
        >
          <span onClick={() => onNavigate("/Forartist")}>
            <div className="flex items-center gap-1 md:mt-3.5">
              For Artist
              <ChevronRight
                size={18}
                className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
              />
            </div>
          </span>
          {showArtistDropdown && (
            <div
              ref={isMobile ? artistDropdownRef : null}
              className="fixed top-20 md:top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-white z-50 rounded shadow-lg transition-all md:w-[90vw]"
            >
              <Artistmenu />
            </div>
          )}
        </div>
      )}

      {/* Log Out Section (Refined & Replaced) */}
{isMobile ? (
  user ? (
    <>
      {/* ✅ Mobile + Admin */}
      {user?.isAdmin && (
        <div
          className="border-b-1 md:border-b-0 pb-4 cursor-pointer uppercase"
          onClick={() => onNavigate("/admin/create-product")}
        >
          Create Product
        </div>
      )}
      {/* ✅ Mobile Log Out */}
      <div
        onClick={onMobileLogOutClick}
        className="border-b-1 flex md:border-b-0 pb-4 cursor-pointer uppercase"
      >
        Log Out
        <ChevronRight
          size={18}
          className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
        />
      </div>

      {showLogOutDropdown && (
        <div
          ref={LogOutDropdownRef}
          className="fixed top-20 md:top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-white z-50 rounded shadow-lg transition-all md:hidden"
        >
          <UserProfileMenu />
        </div>
      )}
    </>
  ) : (
    <div
      className="border-b-1 md:border-b-0 pb-4 cursor-pointer uppercase"
      onClick={() => onNavigate("/login")}
    >
      Login
    </div>
  )
) : user ? (
  <>
    {/* ✅ Desktop + Admin */}
    {user?.isAdmin && (
      <div
        className="border-b-1 md:border-b-0 cursor-pointer uppercase"
        onClick={() => onNavigate("/admin/create-product")}
      >
        Create Product
      </div>
    )}

    {/* ✅ Desktop Log Out Dropdown */}
    <div
      className="relative z-50 border-b-1 md:border-b-0 pb-4 cursor-pointer"
      onMouseEnter={() => setShowLogOutDropdown(true)}
      onMouseLeave={() => setShowLogOutDropdown(false)}
    >
      <div className="flex items-center gap-1 md:mt-3.5 cursor-pointer">
        <h1 className="uppercase">Log out</h1>
        <ChevronRight
          size={18}
          className="ml-auto transition-transform duration-200 rotate-0 md:rotate-90"
        />
      </div>

      {showLogOutDropdown && (
        <div
          ref={LogOutDropdownRef}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 w-screen h-[60vh] bg-white z-50 rounded shadow-lg transition-all md:w-[90vw]"
        >
          <UserProfileMenu />
        </div>
      )}
    </div>
  </>
) : (
  <div
    className="border-b-1 md:border-b-0 pb-4 cursor-pointer uppercase"
    onClick={() => onNavigate("/login")}
  >
    <div className="flex items-center gap-1 md:mt-3.5 group">
      <h1 className="group-hover:text-[#865DFF] transition-colors duration-300">
        Login
      </h1>
    </div>
  </div>
)}


      {/* Other pages (mobile & desktop) */}
      {isMobile ? (
        <>
          <div
            className="border-b-1 md:border-b-0 pb-4 cursor-pointer uppercase"
            onClick={() => onNavigate("/contact")}
          >
            Contact
          </div>
          <div
            className="border-b-1 md:border-b-0 pb-4 cursor-pointer uppercase"
            onClick={() => onNavigate("/about")}
          >
            About
          </div>
        </>
      ) : (
        <>
          <NavLink className="border-b-1 md:border-b-0" to="/contact">
            Contact
          </NavLink>
          <NavLink className="border-b-1 md:border-b-0" to="/about">
            About
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavLinks;
