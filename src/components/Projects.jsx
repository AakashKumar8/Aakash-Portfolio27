import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import javascript from "../assets/JS.webp";
import todoapi from "../assets/todoapi.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: todoapi,
      name: "Todo Api",
      about: "The Todo API is a robust and scalable RESTful API designed to manage and organize tasks efficiently.",
      sourceCodeLink: "https://github.com/AakashKumar8/TodoApi",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
      about: "JavaScript is a versatile and widely-used programming language for web development.",
      sourceCodeLink: "https://github.com/AakashKumar8/JavaScript-Code",
    }
  ];

  return (
    <>
      <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-1 min-h-screen">
        <motion.div 
          className="relative"
          initial={{ x: 100, opacity: 0 }} // Initial state
          animate={{ x: 0, opacity: 1 }} // Final state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1 className="text-3xl font-bold mb-5 text-white">Projects</h1>
          <span className='underline font-semibold text-white'>Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {cardItem.map(({ id, logo, name, about, sourceCodeLink }) => (
              <div className="w-full md:w-[300px] lg:w-[350px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 bg-white" key={id}>
                <img src={logo} className="w-full h-40 object-cover rounded-t-lg" alt="" />
                <div className="p-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">{about}</p>
                </div>
                <div className="px-4 py-4 space-x-3 justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                  {sourceCodeLink && (
                    <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <hr />
    </>
  );
};

export default Portfolio;