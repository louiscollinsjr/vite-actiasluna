import React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import FooterComponent from './Route.Footer.Component';
import './route.navigation.component.styles.css';

// Scroll to section function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavigationComponent: React.FC = () => {
// Handle scroll on initial load if there's a hash in the URL
useEffect(() => {
  // Get the hash from the URL
  const hash = window.location.hash.substring(1);
  if (hash) {
    scrollToSection(hash);
  }
}, []);

// Handle scroll on link click
const handleNavLinkClick = (sectionId: string) => {
  // Set hash in URL
  window.location.hash = `#${sectionId}`;
  // Scroll to the section
  scrollToSection(sectionId);
};

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <Fragment>
      <nav className="md:h-auto bg-black md:bg-white fixed  top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-lg md:bg-opacity-30">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-4  py-3 flex justify-between items-center">
         
          <div className="flex items-center">
            <NavLink to="/" end>
              {/* <img className="w-20 invert md:invert-0"  src={navLogo} alt="Logo" onClick={() => setIsMobileNavOpen(false)} /> */}
              <p className='~text-xl/3xl'>
                <b>Actias Luna</b>
              </p>
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-8 ml-8">
            <NavLink to="/" className="text-gray-600 hover:text-gray-900 text-xs" end>Home</NavLink>
            <NavLink to="/partners" className="text-gray-600 hover:text-gray-900 text-xs">Partners</NavLink>
            <NavLink to="/#insights-section" onClick={()=>scrollToSection('insights-section')} className="text-gray-600 hover:text-gray-900 text-xs">
              Insights
            </NavLink>
            <NavLink to="/#contact-section" onClick={()=>handleNavLinkClick('contact-section')} className="text-gray-600 hover:text-gray-900 text-xs">
            Contact us
            </NavLink>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {isMobileNavOpen && (
          <div
            className={`fixed inset-0  md:hidden bg-black h-screen bg-opacity-100 z-40 overflow-hidden transition-max-height duration-300 ease-in-out`}
          >
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center text-white">
                <Link to="/">
                  {/* <img
                    className="w-20 bg-white invert md:invert-0"
                    src={navLogo}
                    alt="Logo"
                    onClick={() => setIsMobileNavOpen(false)}
                  /> */} <b>Actias Luna</b>
                </Link>
              </div>

              <button
                className="md:hidden text-white text-2xl"
                onClick={toggleMobileNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 pb-4 pt-6 space-y-2">
              <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 ${isMobileNavOpen ? '' : 'hidden'}`}>
                <div className="bg-white h-full w-64 p-4">
                  <div className="flex flex-col space-y-4">
                    <NavLink to="/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMobileNavOpen(false)} end>Home</NavLink>
                    <NavLink to="/partners" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMobileNavOpen(false)}>Partners</NavLink>
                    <NavLink to="/#insights-section" className="text-gray-600 hover:text-gray-900" onClick={() => { setIsMobileNavOpen(false); scrollToSection('insights-section'); }}>Insights</NavLink>
                    <NavLink to="/#contact-section" className="text-gray-600 hover:text-gray-900" onClick={() => { setIsMobileNavOpen(false); handleNavLinkClick('contact-section'); }}>Contact us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <Outlet />
      <FooterComponent />
    </Fragment>
  );
};

export default NavigationComponent;
