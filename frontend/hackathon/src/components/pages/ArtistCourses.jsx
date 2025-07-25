import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Watercolor Painting",
    level: "Beginner",
    duration: "2 months of creative learning",
    image: "https://i.pinimg.com/1200x/28/95/f7/2895f78cfebe3737967b61ea460d1cf8.jpg", 
    bg: "bg-green-100",
  },
  {
    title: "DIY Home Decor",
    level: "Beginner",
    duration: "1 month of hands-on fun",
    image: "https://i.pinimg.com/736x/cf/31/4e/cf314ea96411cb63c12d38203773779b.jpg", 
    bg: "bg-orange-100",
  },
  {
    title: "Acrylic Techniques",
    level: "Intermediate",
    duration: "3 months of detailed study",
    image: "https://i.pinimg.com/736x/6a/77/50/6a7750dba57458111693453c337c522f.jpg", // Replace
    bg: "bg-blue-100",
  },
];

const ArtistCourses = () => {

  const navigate = useNavigate()

  return (
    <div className="py-20 px-5 md:px-10 bg-white w-full">
      <h2 className="text-3xl font-bold text-center mb-6">Artist Course Categories</h2>
      <p className="text-center max-w-xl mx-auto text-gray-600 mb-10">
        Discover a variety of courses designed for creative minds — from delicate watercolors to fun and functional DIY crafts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden p-5 ${course.bg} group transition-transform duration-300 hover:scale-105`}
          >
            <div className="absolute top-3 left-3 text-xs px-2 py-1 bg-white rounded-full font-semibold">
              {course.level}
            </div>

            <img
              src={course.image}
              alt={course.title}
              className="rounded-md w-full h-40 object-cover mb-4 md:h-50"
            />

            <h3 className="font-bold text-xl mb-1">{course.title}</h3>
            <p className="text-sm text-gray-700">{course.duration}</p>

            <div className="absolute bottom-3 right-3">
              <span className="text-lg">↗</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center mt-8 justify-center">
        <button
      onClick={()=>navigate("/artistcoursesmore")}
      className="flex items-center   bg-amber-400 text-black uppercase p-3.5 border-1 border-amber-400 md:text-xs md:px-8 md:mt-20 md:py-3 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1 coursor pointer"> <span className="z-10 relative">more Courses</span></button>

      </div>
          
    </div>
  );
};

export default ArtistCourses;
