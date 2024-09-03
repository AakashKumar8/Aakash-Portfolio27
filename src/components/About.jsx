import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import backgroundImage from '../assets/backg.jpg'; // Import the asset

const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-5 md:px-20 my-10" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl mb-5">About Me</h1>
      <motion.div 
        className="relative bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        initial={{ x: -100, opacity: 0 }} // Initial state
        animate={{ x: 0, opacity: 1 }} // Final state
        transition={{ duration: 0.5 }} // Animation duration
      >
               
        <div className="mb-6">
          <h1 className="text-green-600 font-semibold text-xl mb-2">Introduction</h1>
          <p>
            Hello, I'm Aakash, a passionate Web developer with a keen eye for MERN Stack, 
            with a background in IT. I strive to create impactful and visually 
            stunning software solutions that leave a lasting impression.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-green-600 font-semibold text-xl mb-2">Education & Training</h1>
          <p>
            [Full Stack Web Development], [Almabetter], [2024],[Master in Computer Application], [Brainware], [2021-2023],
            [Graduation],[B.S City College], [2018] [Intermediate], [BISSS], [2015], [Metriculate] , [B.I.V 1C], [2012]
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-green-600 font-semibold text-xl mb-2">Skills & Expertise</h1>
          <p>
            Proficient in [Java] Experienced with [Node.js, React.js, Asp.net Core MVC, JavaScript, JQuery] 
            Strong grasp of [Design Principles/Conepts] Excellent problem-solving skills Effective
            communication and collaborator.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-green-600 font-semibold text-xl mb-2">Professional Experience</h1>
          <p>
            [Software Trainee], [Score Information Technology ltd.], [24/01/2023], [My Current
            designation is software trainee, I have worked in asp.net core MVC with sql database]
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-green-600 font-semibold text-xl mb-2">Achievements & Awards</h1>
          <p>
            [Full Stack Developer], [Almabetter], [2024]
          </p>
        </div>

        <div>
          <h1 className="text-green-600 font-semibold text-xl mb-2">Mission Statement</h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Development] solutions that exceed client expectations and 
            contribute positively to the digital landscape. I am committed to
            continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p>
        </div>
      </motion.div>
      <hr />
    </div>
  );
}

export default About;