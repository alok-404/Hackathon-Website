import React from "react";

const NotionTemplates = () => {

const templateData = [
  {
    title: "Art Business Hub",
    author: "by Mystrispot Studio",
    tags: ["art", "business", "planner", "digital"],
    description: "Organize commissions, finances, and your content calendar in one stylish Notion dashboard for growing artists.",
    notionPrice: "9.99",
    pdfPrice: "4.99",
    image: "https://i.pinimg.com/1200x/c7/44/8d/c7448d6d76e080d2a95692a1c8c4ff0f.jpg"
  },
  {
    title: "Craftsy Project Planner",
    author: "by Mystrispot Studio",
    tags: ["craft", "DIY", "tracker", "weekly"],
    description: "A perfect template to plan, track, and document all your handmade and DIY projects with love.",
    notionPrice: "6.99",
    pdfPrice: "3.99",
    image: "https://i.pinimg.com/736x/18/d5/2f/18d52fdee6e1de1b699521e0cc167c8e.jpg"
  },
  {
    title: "Artist’s Digital Studio",
    author: "by Mystrispot Studio",
    tags: ["art", "studio", "routine", "dashboard"],
    description: "Manage your creative schedule, inspirations, references, and studio routines digitally with this intuitive layout.",
    notionPrice: "7.99",
    pdfPrice: "3.99",
    image: "https://i.pinimg.com/736x/5f/3f/85/5f3f85ed308dae86c95d4a88aecf4ab0.jpg"
  },
  {
    title: "DIY Creator’s Workspace",
    author: "by Mystrispot Studio",
    tags: ["DIY", "workspace", "notion", "tools"],
    description: "Set up your perfect creator space – from tasks to tools list – all inside Notion!",
    notionPrice: "8.49",
    pdfPrice: "3.49",
    image: "https://i.pinimg.com/1200x/d7/bc/c4/d7bcc48838a33efae2924fe0a14cc038.jpg"
  },
  {
    title: "The Gallery Tracker",
    author: "by Mystrispot Studio",
    tags: ["gallery", "tracker", "portfolio", "exhibit"],
    description: "Keep records of art sales, exhibits, and portfolios. Track everything with visual flair!",
    notionPrice: "5.99",
    pdfPrice: "2.99",
    image: "https://i.pinimg.com/1200x/50/91/0d/50910d3110ae2eddd217eab61c7f78ba.jpg"
  },
];






  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 bg-gradient-to-r bg-[#e6e5e3] min-h-screen p-5">
      {templateData.map((template, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full"
        >
          {/* Left: Info */}
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">
              {template.title}
            </h2>
            <p className="text-gray-700 mb-1 font-semibold">{template.author}</p>
            <div className="flex flex-wrap gap-2 my-2">
              {template.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              {template.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full">
                Notion: ₹{template.notionPrice}
              </button>
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-full">
                PDF: ₹{template.pdfPrice}
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full md:w-[250px]">
            <img
              src={template.image}
              alt={template.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotionTemplates;
