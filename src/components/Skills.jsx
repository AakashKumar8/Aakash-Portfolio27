import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import asp from "../assets/Asp.jpeg";
import bootstrap from "../assets/Bootstrap.png";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import Jquery from "../assets/Jquery.png";
import oracle from "../assets/oracle.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/React.png";

const Experience = () => {
  const cardItem = [
    { id: 1, logo: asp, name: "Asp.net MVC" },
    { id: 2, logo: bootstrap, name: "Bootstrap" },
    { id: 3, logo: html, name: "HTML" },
    { id: 4, logo: css, name: "CSS" },
    { id: 5, logo: Jquery, name: "Jquery" },
    { id: 6, logo: oracle, name: "Oracle" },
    { id: 7, logo: mysql, name: "MySQL" },
    { id: 8, logo: nodejs, name: "Node Js" },
    { id: 9, logo: react, name: "React" },
  ];

  return (
    <>
      <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 min-h-screen">
        <motion.div 
          className="relative"
          initial={{ x: 100, opacity: 0 }} // Initial state
          animate={{ x: 0, opacity: 1 }} // Final state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1 className="text-3xl mb-5 text-white">Tech Skills</h1>
          <p className='text-white'>I've more than 2 years of experience in the below technologies.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div className="flex flex-col items-center justify-center border-[2px] rounded-lg p-4 cursor-pointer hover:scale-105 duration-300 bg-white" key={id}>
                <img src={logo} className="w-[100px] h-[100px] rounded-full" alt={name} />
                <div className="text-center mt-4">
                  <div className="font-bold text-lg">{name}</div>
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

export default Experience;