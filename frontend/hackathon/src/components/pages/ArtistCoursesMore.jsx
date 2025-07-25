import React, { useRef } from "react";
import useHeroAnimation from "./useHeroAnimation";

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
    image: "https://i.pinimg.com/736x/6a/77/50/6a7750dba57458111693453c337c522f.jpg",
    bg: "bg-blue-100",
  },
  {
    title: "Creative Journaling",
    level: "Beginner",
    duration: "1.5 months of mindful creativity",
    image: "https://i.pinimg.com/1200x/58/8f/cc/588fccd344c1b2ace7957f2a742ae24f.jpg",
    bg: "bg-pink-100",
  },
  {
    title: "Mixed Media Exploration",
    level: "Advanced",
    duration: "4 months of experimental art",
    image: "https://i.pinimg.com/736x/38/ce/bb/38cebb3d1c59e1899994f04b709521b9.jpg",
    bg: "bg-yellow-100",
  },
  {
    title: "Color Theory",
    level: "Beginner",
    duration: "2 months of Color theory and application",
    image: "https://i.pinimg.com/1200x/97/06/28/970628db4e3a00068d099a30c850e04a.jpg",
    bg: "bg-purple-100",
  },
];

const ArtistCoursesMore = () => {

  const heroRef = useRef(null);
    useHeroAnimation(heroRef); // Custom animation hook
  return (
    <div
    ref={heroRef}
    className=" bg-white w-full">

          {/* Hero Section */}

      <div
        className="hero-bg h-[90vh] bg-[#c9d0e0]   bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/bg7.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          //     transform: "rotate(90deg)",
          //        top: "-50%",
          // left: "-50%",
        }}
      >
        <div className="hero-btn h-full w-full  pt-10   flex items-center justify-center uppercase text-white text-5xl font-bold  md:px-20 md:text-7xl">
          <h1
            className="text-white text-center "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            Dive deep into creativity
          </h1>
        </div>
      </div>



      <h2 className="text-3xl font-bold text-center mt-20 mb-6">Artist Course Categories</h2>
      <p className="text-center max-w-xl mx-auto text-gray-600 mb-10">
        Discover a variety of courses designed for creative minds — from delicate watercolors to fun and functional DIY crafts.
      </p>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 mx-5 md:mx-0 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

      {/* Mystrispot Story Section */}
      <div className="mt-20 bg-gradient-to-r from-purple-50 to-indigo-100 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
          Meet Mystrispot – The Artist Behind the Vision
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          Mystrispot started as a solo artist experimenting with mixed media and digital art in a small home studio. Over time,
          through passion, discipline, and connection with other creators, Mystrispot built a thriving brand offering templates,
          courses, and tools for artists worldwide. This journey reflects creativity, entrepreneurship, and the belief that every
          artist deserves to grow with purpose.
        </p>
      </div>
    </div>
  );
};

export default ArtistCoursesMore;
