import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncdeleteusers, asynclogoutusers } from "../../store/userAction";
import { toast } from "react-toastify";

const UserProfileMenu = () => {
  const gsapRef = useRef();

  useEffect(() => {
    gsap.from(gsapRef.current, {
      scale: 1.2,
      duration: 1,
    });
  }, []);

  const underlineRefs = useRef([]);
  const animatedRefs = useRef([]);

 useEffect(() => {
    underlineRefs.current = document.querySelectorAll(".hover-underline");
    animatedRefs.current = Array.from(underlineRefs.current).map(() => false);
  }, []);

  const handleMouseEnter = (index) => {
    gsap.killTweensOf(underlineRefs.current[index]); // 🛑 cancel previous animations if any
    gsap.fromTo(
      underlineRefs.current[index],
      { width: "0%", opacity: 1 },
      { width: "100%", opacity: 0, duration: 1, ease: "power2.out" }
    );
  };

  const handleMouseLeave = (index) => {
    gsap.killTweensOf(underlineRefs.current[index]); // 🛑 cancel previous animations if any
    gsap.fromTo(
      underlineRefs.current[index],
      { width: "100%", opacity: 1 },
      { width: "0%", opacity: 0, duration: 1, ease: "power2.out" }
    );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const user = useSelector((state) => state.userReducer.data);
  console.log(user);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const LogOutNavigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(asynclogoutusers());
    navigate("/");
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
    navigate;
  };

  return (
    <div className="text-black w-full h-full">
      {isMobile ? (
        // 🌟 Mobile view
        <div className="flex flex-col gap-4">
          <div
            onClick={() => {
              LogoutHandler(), LogOutNavigate("/");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Log Out
          </div>

          <h3
            onClick={() => navigate("/admin/user-profile")}
            className="text-left cursor-pointer"
          >
            Update Profile
          </h3>

          <h3 className="text-left cursor-pointer">Delete Account</h3>

          <h3
            onClick={() => {
              LogoutHandler(), LogOutNavigate("/");
            }}
            className="text-left cursor-pointer"
          >
            Log Out
          </h3>
        </div>
      ) : (
        // 💻 Desktop view
        
        
        
  <div className="grid grid-cols-2 h-full border-1 overflow-hidden">
          
          
          
          
          
          <div className="bg-white uppercase flex flex-row">
            <div className="bg-white py-5 w-1/2">
              <div
               onClick={() => navigate("/admin/user-profile")}
        className="mx-3 px-3 py-1 w-fit cursor-pointer relative"
                style={{ fontFamily: '"Lobster Two", sans-serif' }}
              >
                <div
               onClick={() => navigate("/admin/user-profile")}
                onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                  className="relative"
                >
                  <h1 className="leading-tight md:mt-8 text-[#23444d] pointer-events-none">
                    Update your<br />
                    account
                     </h1>
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                </div>
              </div>
            </div>

     
            

            <div className="flex flex-col justify-start py-5 w-1/2 bg-white">
              <div className="w-full md:my-5 md:border-l-1 md:border-[#23444d] md:h-full">


                  <div
                  onClick={() => DeleteUserHandler(user)}
                  
                  className="mx-3 w-30 py-1 px-3 relative cursor-pointer"
                  style={{ fontFamily: '"Lobster Two", sans-serif' }}
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    className="relative"
                  >
                    <h1 className="text-[#23444d] pointer-events-none">
                      Delete account
                    </h1>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                  </div>
                </div>




                <br />


              
                  <div
                  onClick={LogoutHandler}

                  
                  className="mx-3 w-30 py-1 px-3 relative cursor-pointer"
                  style={{ fontFamily: '"Lobster Two", sans-serif' }}
                >
                  <div
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                    className="relative"
                  >
                    <h1 className="text-[#23444d] pointer-events-none">
                      Log out
                    </h1>
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#23444d] hover-underline"></span>
                  </div>
                </div>




     
              </div>
            </div>
          </div>

          {/* RIght side image */}



          <div className="h-full bg-white">
            {user?.profileImage ? (
              <img
                onClick={() => navigate("/admin/user-profile")}
                ref={gsapRef}
                className=" object-center h-full w-full"
                src={user.profileImage}
                alt="Profile"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Profile Image
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
