import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-25">
         HI! I'M SUBINA CHHETRI.<br/>
         I'm an ELEX Engineering undergrad at WRC.Currently,I'm learning different languages such as HTML,CSS Javascript and React js for building responsive webpages.
        </p>

        <br />

        <p className="text-xl">
        I am a passionate aspiring Frontend Developer with a strong foundation in web development technologies. My journey in coding began with a desire to create visually appealing and user-friendly interfaces. I enjoy exploring the intersection of technology and creativity. Whether it's experimenting with new design trends or contributing to open-source projects, I find joy in the endless possibilities that coding offers. As I continue to learn and grow, I am eager to contribute my skills to dynamic projects that push the boundaries of user experience.
        </p>
      </div>
    </div>
  );
};

export default About;