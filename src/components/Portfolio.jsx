import React from "react";
import jobhiring from "../assets/portfolio/job_hiring_post.jpg";
import cafemenu from "../assets/portfolio/cafemenu.png";
import ideathon from "../assets/portfolio/ideathon-femtech.png";

const Portfolio = () => {
  const portfolios = [
    {
        id:1,
        src:jobhiring
    },
    {
        id:2,
        src:cafemenu
    },
    {
        id:3,
        src:ideathon
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out these UI/UX Design I did using Adobe Illustrator and Figma.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-full object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;