import React, {useState, useEffect} from 'react'
import pict1 from "/pict1.jpg";
import pict2 from "/pict2.png";
import pict3 from "/pict3.png";
import { ReactTyped } from "react-typed";

function Home() {
    const images = [pict1, pict2, pict3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      // Automatically change image every 5 seconds
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // 5000 milliseconds = 5 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, [images.length]);
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-21" style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
      }}>
     <div className="flex flex-col md:flex-row">
            <div className="text-white md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <span className="text-xl">Welcome In My Feed</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                        <h1>Hello, I'm a</h1>
                        {/* <span>Developer</span> */}
                        <ReactTyped
                            className="text-red-700 font-bold"
                            strings={["Developer...!", "Programmer...!", "Coder...!"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <br/>
                <p className="text-sm md:text-md text-justify">
                    Experienced web developer skilled in front-end 
                    and back-end development, with a passion for 
                    creating responsive, user-friendly interfaces.
                    Proficient in HTML, CSS, JavaScript, and various
                    frameworks (e.g., React, Node). 
                    Strong problem-solving abilities and 
                    a keen eye for detail. Committed to 
                    delivering high-quality projects on 
                    time and exceeding client expectations.
                </p>
                <br/>
        </div>
     </div>
    </div>
    </>
  )
}

export default Home