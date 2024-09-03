import React from 'react';

const Blogs = () => {
  return (
    <>
      <div name="Blogs" className="min-h-screen"> {/* Added background color */}
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
          <h1 className="text-3xl font-bold mb-5 text-white">Blogs</h1>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <img 
                className="w-full h-80 object-cover" 
                src="src\assets\blog1.png" 
                alt="Card Image" 
              />
              <div className="px-6 py-4">
                <a 
                  href="https://javascript.plainenglish.io/make-eye-catching-javascript-popups-with-sweet-alert-470e05ed026d" 
                  className="font-bold text-xl mb-2 hover:text-blue-500 transition-colors duration-200"
                >
                  Make Eye-Catching JavaScript Popups with ‘Sweet Alert’
                </a>
                <p className="text-gray-700 text-base">
                  An Attractive UI You can better alerts with
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <img 
                className="w-full h-80 object-cover" 
                src="src\assets\blog2.jpg" 
                alt="Card Image" 
              />
              <div className="px-6 py-4">
                <a 
                  href="https://javascript.plainenglish.io/why-i-love-the-spread-operator-58f396dbbb78" 
                  className="font-bold text-xl mb-2 hover:text-blue-500 transition-colors duration-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Why I Love The Spread Operator
                </a>
                <p className="text-gray-700 text-base">
                  The Most Useful JavaScript Feature of ES6
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white transition-transform duration-300 ease-in-out hover:scale-105">
              <img 
                className="w-full h-80 object-cover" 
                src="src\assets\blog3.png" 
                alt="Card Image" 
              />
              <div className="px-6 py-4">
                <a 
                  href="https://javascript.plainenglish.io/what-are-the-differences-between-state-and-props-in-react-74f21e39b172" 
                  className="font-bold text-xl mb-2 hover:text-blue-500 transition-colors duration-200" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  What are the differences between State and Props in React?
                </a>
                <p className="text-gray-700 text-base">
                  How you use props and state, and what each of them is?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;