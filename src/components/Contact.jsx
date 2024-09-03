import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const handleNavigate = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:aakashisngh2502@gmail.com';
  };

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 min-h-screen">
        <h1 className="text-3xl mb-5 text-white">Contact me</h1>
        <span className="text-center mb-5 text-white">Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="bg-slate-200 w-196 px-10 py-6 rounded-xl">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button
                className="btn btn-outline-primary border-2 border-primary p-2"
                onClick={() => handleNavigate('https://www.instagram.com/singh_aak_10')}
              >
                <FaInstagram size={44} />
              </button>
              <button
                className="btn btn-outline-secondary border-2 border-secondary p-2"
                onClick={() => handleNavigate('https://www.facebook.com/Aakashsingh3jp/')}
              >
                <FaFacebook size={44} />
              </button>
              <button
                className="btn btn-outline-danger border-2 border-danger p-2"
                onClick={() => handleNavigate('https://www.linkedin.com/in/aakash-kumar-614a99214')}
              >
                <FaLinkedin size={44} />
              </button>
              <button
                className="btn btn-outline-warning border-2 border-warning p-2"
                onClick={() => handleNavigate('https://github.com/AakashKumar8')}
              >
                <FaGithub size={44} />
              </button>
              <button
                className="btn btn-outline-info border-2 border-info p-2"
                onClick={handleEmail}
              >
                <FaEnvelope size={44} />
              </button>
            </div>
            {/* Displaying Name and Contact Number */}
            <div className="text-center mt-4">
              <p className="text-lg font-bold">Aakash Kumar</p>
              <p className="text-gray-700">Contact: 8789767721</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;