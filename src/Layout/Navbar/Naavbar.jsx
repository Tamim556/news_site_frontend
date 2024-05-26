import React, { useState, useEffect } from 'react';
import logo from '../../assets/Images/news_logo.png'
const Naavbar = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);
  const [activeRoute, setActiveRoute] = useState('home'); // Default active route

  const toggleNav = () => {
    setIsNavbarHidden(!isNavbarHidden);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setIsNavbarHidden(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSetActiveRoute = (route) => {
    setActiveRoute(route);
  };

  return (
    <div>
      <div className="bg-gray-900 w-[92%] mx-auto ">
        <nav className="bg-gray-300 flex text-gray-800 items-center justify-between flex-wrap pb-2 px-5">
          <div>
            {/* <span className="font-semibold text-1xl text-gray-900">Mews </span> */}
            <img className='h-[50px] w-[70%] rounded-md' src={logo} alt="logo" />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleNav}
              className="flex flex-col px-3 py-2 border rounded border-gray-800 hover:text-white hover:border-white"
            >
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white my-1"></div>
              <div className="w-6 h-1 bg-white"></div>
            </button>
          </div>
          <div
            className={`w-full lg:w-auto block lg:flex lg:items-center lg:inline-block ${
              isNavbarHidden ? 'hidden' : ''
            }`}
            id="navbar"
          >
            <div className="lg:flex-grow text-2xl text-center space-x-3">
              <a
                href="#"
                className={`block lg:inline-block hover:text-blue-500 mt-4 ${
                  activeRoute === 'home' ? 'text-blue-500' : ''
                }`}
                onClick={() => handleSetActiveRoute('home')}
              >
                Home
              </a>
              <a
                href="#"
                className={`block lg:inline-block hover:text-blue-500 mt-4 ${
                  activeRoute === 'blog' ? 'text-blue-500' : ''
                }`}
                onClick={() => handleSetActiveRoute('blog')}
              >
                Blog
              </a>
              <a
                href="#"
                className={`block lg:inline-block hover:text-blue-500 mt-4 mb-3z ${
                  activeRoute === 'about' ? 'text-blue-500' : ''
                }`}
                onClick={() => handleSetActiveRoute('about')}
              >
                About Us
              </a>
             
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Naavbar;
