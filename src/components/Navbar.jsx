import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
// import { ImSun } from "react-icons/im";
// import { IoMoonOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Navbar = ({ isDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [rotateIcon, setRotateIcon] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const toggleTheme = () => {
  //   handleThemeToggle();
  //   setRotateIcon(!rotateIcon); // Toggle rotation
  // };

  return (
    <nav
      className={`navbar flex items-center justify-between p-4 rounded-2xl ${
        menuOpen
          ? isDarkMode
            ? "bg-zinc-800 text-white"
            : "bg-white text-black"
          : isDarkMode
          ? "bg-zinc-900 text-white"
          : " text-black bg-white dark:bg-gray-900/5 backdrop-blur-md border border-white/25 dark:border-black/25 shadow-md "
      } border-b-1 ${
        isDarkMode ? "border-gray-700" : "border-gray-200"
      } transition-colors duration-100 ease-in-out `}
    >
      <Link
        to="/"
        className={`sm:text-3xl text-2xl font-bold lobster-regular leading-[2rem] rounded-xl pl-2 pr-2 pt-1 pb-1 ${
          isDarkMode ? "text-[#93e003]" : "text-[#93e003]"
        }`}
      >
        Th
      </Link>

      <div className="hidden md:flex items-center text-lg tracking-wider space-x-8 ml-32 ">
        <Link to="/home" className="no-underline hover:text-gray-300">
          Home
        </Link>

        {/* <button
          onClick={toggleTheme}
          className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div
            className={`transition-transform duration-300 ease-in-out ${
              rotateIcon ? "rotate-0" : "rotate-180"
            }`}
          >
            {isDarkMode ? (
              <ImSun className="transition-transform duration-300 ease-in-out" />
            ) : (
              <IoMoonOutline className="transition-transform duration-300 ease-in-out" />
            )}
          </div>
        </button> */}
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/athneremayur01/toolhunt"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          title="GitHub Project"
        >
          <FaGithub
            className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"} hover:opacity-70 transition-opacity`}
          />
        </a>

        <button className="block md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`absolute top-20 p-6 text-lg font-normal left-0 w-full flex flex-col items-center md:hidden z-50 ${
            isDarkMode ? "bg-zinc-800 rounded-t-3xl rounded-b-3xl" : "bg-white text-black rounded-t-3xl rounded-b-3xl"
          }`}
        >
          <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/"
            className="py-2 no-underline hover:text-gray-400"
            onClick={toggleMenu}
          >
            ToolHunt
          </Link>

          {/* <button
            onClick={toggleTheme}
            className="text-lg flex items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 mt-2"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                rotateIcon ? "rotate-0" : "rotate-180"
              }`}
            >
              {isDarkMode ? (
                <ImSun className="transition-transform duration-300 ease-in-out" />
              ) : (
                <IoMoonOutline className="transition-transform duration-300 ease-in-out" />
              )}
            </div>
          </button> */}

          <a
            href="https://github.com/athneremayur01/toolhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
            title="GitHub Project"
          >
            <FaGithub
              className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-black"} hover:opacity-70 transition-opacity`}
            />
          </a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  handleThemeToggle: PropTypes.func.isRequired,
};

export default Navbar;
