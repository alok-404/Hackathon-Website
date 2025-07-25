import React, { useRef, useState } from "react";
import Login from "./Login";
import { toast } from "react-toastify";
import Footer from "./Footer";
import useHeroAnimation from "./useHeroAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation (only check required fields)
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("⚠️ Please fill in all required fields.");
      return;
    }

    // 📤 Simulate form submission (e.g. send to backend/API)
    console.log("Form Submitted:", formData);

    // ✅ Show success toast
    toast.success("🎉 Thanks for reaching out — we'll get back to you soon!");

    // 🔄 Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };


const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed Successfully!");
    setEmail("");
  };


const heroRef = useRef(null);
  useHeroAnimation(heroRef); // Custom animation hook

  return (
    <div
    ref={heroRef}
    >

      {/* Hero Section */}

      <div

        className="hero-bg h-[90vh]    bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/bg6.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          //     transform: "rotate(90deg)",
          //        top: "-50%",
          // left: "-50%",
        }}
      >
        <div className="h-full w-full   flex items-center justify-center md:justify-start uppercase text-white text-7xl font-bold  md:px-20 md:text-7xl">
          <h1
            className="hero-btn text-white text-center "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            Contact
          </h1>
        </div>
      </div>

      {/* Contact form */}

      <div className="py-20 px-5 md:px-10 bg-[#eeeff2] w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-transparent p-6 rounded-xl space-y-4 md:max-w-1/2"
        >
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-5 border  focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-5 border  focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional"
              className="w-full px-4 py-5 border  focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-5 border  focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Placeholder for reCAPTCHA */}
          {/* <div className="my-3">Add your reCAPTCHA component here</div> */}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-5 border  hover:bg-purple-700 transition-colors"
          >
            Submit
          </button>

          <p className="text-xs text-center mt-3 text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>

      {/* Partnership */}

      <div className=" bg-[#e6e5e3] flex flex-col items-center justify-center md:flex-row-reverse md:px-7 md:h-screen">
        {/* Image */}
        <div className="pt-10 pb-10 bg-[#e6e5e3] px-5 h-1/2 w-full flex items-center justify-center md:h-[90vh]">
          <div className="h-[38vh] w-full md:h-full rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1">
            <img
              className="object-cover object-center h-full w-full"
              src="\images\IMG_9832.JPG"
              alt="Profile"
            />
          </div>
        </div>

        {/* BIO */}
        <div className="bg-[#e6e5e3] py-6 px-5 text-[#23444d] flex flex-col  h-1/2 w-full md:px-5 md:gap-3">
          <h1
            className="pt-2 leading-normal pb-6 text-[2.6rem] cursor-pointer tracking-wider md:tracking-normal  font-bold md:text-[2.8rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            For patnership inquires
          </h1>
          <h5 className="normal-case md:text-1xl cursor-pointer md:w-[30.2rem]">
            Please contact partnerships{" "}
            <span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Mystrispotofficial@gmailcom
              </a>
            </span>
          </h5>

          <div className=" items-start mt-5 flex gap-5 md:gap-16  ">
             <a
                  href="https://www.instagram.com/mystrispot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
            <button className="cursor-pointer flex items-center bg-[#23444d] text-white uppercase p-3.5 border-1 border-[#23444d] md:text-xs md:px-8 md:mt-6 md:py-3 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300 hover:translate-y-1">
              {" "}
              <span className="z-10 relative">
               
                  Contact
                
              </span>{" "}
            </button>
            </a>
          </div>
        </div>
      </div>

          {/* Footer setion */}



      <div className=" bg-[#eeeff2] flex flex-col gap-6 mb-auto">


        <div className=" bg-[#5d613f] py-10 px-4 text-white  flex flex-col items-center justify-center gap-5 md:flex-row md:px-5 md:py-20">
        <div className="h-1/2 w-full bg-transparent ">
          <h1
            className="py-3  text-[1.4rem]  font-bold md:text-[2rem]  "
            style={{ fontFamily: '"Lobster Two", sans-serif' }}
          >
            Subcriber to corner collector
          </h1>
          <h4 className="lowercase md:w-100">
            Our exclusive insider guide to Mystrispot's latest artworks, special
            offers, and inspiration for your collection.
          </h4>
        </div>

        <div className="h-1/2 w-full flex flex-col gap-3 bg-transparent md:gap-5">
         <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full bg-white  text-black flex-1 md:text-xl md:py-4 md:pl-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-[#d0d5e2] w-full text-black font-normal px-4 py-2 md:py-4"
              onClick={handleSubscribe}
            >
              SUBSCRIBE
            </button>
        
        </div>
      </div>

              <Footer />


      </div>

      {/* <Login/> */}
    </div>
  );
};

export default Contact;
