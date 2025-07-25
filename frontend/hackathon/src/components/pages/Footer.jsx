import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.error("Please enter a valid email.");
      return;
    }
    toast.success("Subscribed Successfully!");
    setEmail("");
  };

 const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "For Artists", path: "/for-artists" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];


  const supportItems = [
    { label: "Refunds & Returns", href: "/refunds" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms Of Service", href: "/terms" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-[#dee2ed] text-[#1c1c1c] w-full  px-6 md:py-10 text-sm">
      <div className="max-w-6xl py-10 mx-auto">
        {/* Subscribe Section */}
        

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-10">
         
         {/* Info */}

        
         <div className="flex flex-col gap-5  ">
          
        <div className="h-20 w-20">
           <img src="/images/mystrispot logo.png" alt="" />
        </div>

         <p className="normal-case">Mystrispot is an artist who Diy stuffs from different materials and inspire other creatives to overcome their insecurities and embrace their creative self.  </p>
         </div>


          {/* Studio */}
          <div>
            <h3 className="font-bold mb-2">STUDIO</h3>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    onClick={() => navigate(item.path)}
                    className="hover:border-b cursor-pointer border-black transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-2">SUPPORT</h3>
            <ul className="space-y-1">
              {supportItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:underline border-black transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-2">NEWSLETTER</h3>
            <p className="mb-2">SUBSCRIBE TO MYSTRIMAIL</p>
            <div className="flex flex-col gap-2 mt-10">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-black flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-[#d0d5e2] px-4 py-2"
                onClick={handleSubscribe}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row  justify-between items-center text-xs text-center sm:text-left">
          <div>
            <p className="mb-1">© 2025, Mystrispot. All rights reserved.</p>
            <p>Powered by Shopify | Designed by Alok Chandra</p>
          </div>
          <div className="flex gap-3 mt-3 sm:mt-0">
            <img src="/images/Flag_of_India.svg.png" alt="Austria" className="w-5 md:w-20 md:h-10" />
            <span className="md:text-2xl">INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
