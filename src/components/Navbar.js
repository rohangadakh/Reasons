import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(""); // Initialize submenuOpen state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuClick = (menu) => {
    if (submenuOpen === menu) {
      setSubmenuOpen(""); // Close submenu if the same menu is clicked
    } else {
      setSubmenuOpen(menu); // Open the selected submenu
    }
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      } md:hover:bg-white md:hover:text-black`} // Apply hover effects only on medium screens and up
    >
      <div className="container mx-auto p-5">
        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-col items-center font-rubik relative z-20">
          <div className="text-3xl hero-title font-bold mb-4 text-center z-20">
            REASONS
          </div>

          <ul className="flex space-x-8 relative z-20">
            <li
              className="group relative"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="py-2 px-4 text-lg group-hover:text-black">
                HOME
              </Link>
              {activeMenu === 0 && (
                <div className="fixed inset-0 bg-white z-30 flex p-10 mt-28 transition-opacity duration-300 mb-24">
                  <div className="flex flex-col w-1/3 text-black">
                    <Link to="/whatsnew" className="py-2 hover:bg-gray-200">
                      WHAT'S NEW
                    </Link>
                    <Link
                      to="/HighJewelryComponent"
                      className="py-2 hover:bg-gray-200"
                    >
                      HIGH JEWELLERY
                    </Link>
                    <Link to="/Catalogue" className="py-2 hover:bg-gray-200">
                      SHOP
                    </Link>
                    <Link to="/login" className="py-2 hover:bg-gray-200">
                      LOGIN
                    </Link>
                  </div>
                  <div className="border-l border-gray-300 mx-4 h-auto"></div>
                  <div className="flex flex-col ml-10 w-2/3">
                    <div className="flex space-x-4 mt-8">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/55/93/44/559344712a4dde584e12c34461462da4.jpg"
                          alt="Image 1"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Description 1
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/c7/d1/d2/c7d1d2b647a03a23fa1833f89fc90b14.jpg"
                          alt="Image 2"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Description 2
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/ce/1f/0b/ce1f0ba489010bd6c1bd3f92c4297b5c.jpg"
                          alt="Image 3"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Description 3
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/63/04/b5/6304b54bf3cd996df473211fdef38a25.jpg"
                          alt="Image 4"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Description 4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="group relative"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/whatsnew"
                className="py-2 px-4 text-lg group-hover:text-black"
              >
                WHAT'S NEW
              </Link>
              {activeMenu === 1 && (
                <div className="fixed inset-0 bg-white mt-28 z-30 flex p-10 transition-opacity duration-300 mb-24">
                  <div className="flex flex-col w-1/3 text-black">
                    <Link to="/latesttrends" className="py-2 hover:bg-gray-200">
                      Latest Trends
                    </Link>
                    <Link to="/newarrivals" className="py-2 hover:bg-gray-200">
                      New Arrivals
                    </Link>
                  </div>
                  <div className="border-l border-gray-300 mx-4 h-auto"></div>
                  <div className="flex flex-col ml-10 w-2/3">
                    <div className="flex space-x-4 mt-8">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/55/93/44/559344712a4dde584e12c34461462da4.jpg"
                          alt="Image 1"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Latest 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/c7/d1/d2/c7d1d2b647a03a23fa1833f89fc90b14.jpg"
                          alt="Image 2"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Latest 2</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/ce/1f/0b/ce1f0ba489010bd6c1bd3f92c4297b5c.jpg"
                          alt="Image 3"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Latest 3</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/63/04/b5/6304b54bf3cd996df473211fdef38a25.jpg"
                          alt="Image 4"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Latest 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="group relative"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/HighJewelryComponent"
                className="py-2 px-4 text-lg group-hover:text-black"
              >
                HIGH JEWELLERY
              </Link>
              {activeMenu === 2 && (
                <div className="fixed inset-0 bg-white mt-28 z-30 flex p-10 transition-opacity duration-300 mb-24">
                  <div className="flex flex-col w-1/3 text-black">
                    <Link to="/exclusive" className="py-2 hover:bg-gray-200">
                      Exclusive Collections
                    </Link>
                    <Link
                      to="/bridejewellery"
                      className="py-2 hover:bg-gray-200"
                    >
                      Indian Bride
                    </Link>
                  </div>
                  <div className="border-l border-gray-300 mx-4 h-auto"></div>
                  <div className="flex flex-col ml-10 w-2/3">
                    <div className="flex space-x-4 mt-8">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/55/93/44/559344712a4dde584e12c34461462da4.jpg"
                          alt="Image 1"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Collection 1
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/c7/d1/d2/c7d1d2b647a03a23fa1833f89fc90b14.jpg"
                          alt="Image 2"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Collection 2
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/ce/1f/0b/ce1f0ba489010bd6c1bd3f92c4297b5c.jpg"
                          alt="Image 3"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Collection 3
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/63/04/b5/6304b54bf3cd996df473211fdef38a25.jpg"
                          alt="Image 4"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Collection 4
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              className="group relative"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/Catalogue"
                className="py-2 px-4 text-lg group-hover:text-black"
              >
                SHOP
              </Link>
              {activeMenu === 3 && (
                <div className="fixed inset-0 bg-white mt-28 z-30 flex p-10 transition-opacity duration-300 mb-24">
                  <div className="flex flex-col w-1/3 text-black">
                    <Link to="/rings" className="py-2 hover:bg-gray-200">
                      RINGS
                    </Link>
                    <Link to="/bracelets" className="py-2 hover:bg-gray-200">
                      BRACELETS
                    </Link>
                  </div>
                  <div className="border-l border-gray-300 mx-4 h-auto"></div>
                  <div className="flex flex-col ml-10 w-2/3">
                    <div className="flex space-x-4 mt-8">
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/55/93/44/559344712a4dde584e12c34461462da4.jpg"
                          alt="Image 1"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Ring 1</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/c7/d1/d2/c7d1d2b647a03a23fa1833f89fc90b14.jpg"
                          alt="Image 2"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">Ring 2</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/ce/1f/0b/ce1f0ba489010bd6c1bd3f92c4297b5c.jpg"
                          alt="Image 3"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Bracelet 1
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src="https://i.pinimg.com/564x/63/04/b5/6304b54bf3cd996df473211fdef38a25.jpg"
                          alt="Image 4"
                          className="h-80 object-cover mb-2 rounded-3xl"
                        />
                        <span className="text-center text-black">
                          Bracelet 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/login"
                className="py-2 px-4 text-lg group-hover:text-black"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Section */}
        <div className="md:hidden flex justify-between items-center w-full">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl"
            whileTap={{ rotate: 90 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>

          <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl hero-title font-bold">
            REASONS
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-black text-white z-40"
        >
          <div className="flex justify-start mt-10 ml-5">
            <div className="text-2xl hero-title font-bold">REASONS</div>
          </div>
          <ul className="flex flex-col space-y-4 p-5 mt-10 text-left">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-xl ${
                  submenuOpen === "home" ? "text-gray-400" : ""
                }`} // Turns gray when clicked
              >
                HOME
              </Link>
            </li>
            <li>
              <div className="flex flex-col">
                <button
                  className={`text-xl text-left w-full ${
                    submenuOpen === "whatsnew" ? "text-gray-400" : ""
                  }`} // Turns gray when clicked
                  onClick={() => handleMenuClick("whatsnew")}
                >
                  WHAT'S NEW
                </button>
                {submenuOpen === "whatsnew" && (
                  <ul className="pl-5 mt-2">
                    <li className="ml-4">
                      <Link
                        to="/whatsnew"
                        onClick={() => {
                          setIsOpen(false);
                          setSubmenuOpen("");
                        }}
                        className="text-lg"
                      >
                        Latest Trends
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link
                        to="/newarrivals"
                        onClick={() => {
                          setIsOpen(false);
                          setSubmenuOpen("");
                        }}
                        className="text-lg"
                      >
                        New Arrivals
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <button
                  className={`text-xl text-left w-full ${
                    submenuOpen === "highJewelry" ? "text-gray-400" : ""
                  }`} // Turns gray when clicked
                  onClick={() => handleMenuClick("highJewelry")}
                >
                  HIGH JEWELRY
                </button>
                {submenuOpen === "highJewelry" && (
                  <ul className="pl-5 mt-2">
                    <li className="ml-4">
                      <Link
                        to="/HighJewelryComponent"
                        onClick={() => {
                          setIsOpen(false);
                          setSubmenuOpen("");
                        }}
                        className="text-lg"
                      >
                        Exclusive Collection
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link
                        to="/bridejewellery"
                        onClick={() => {
                          setIsOpen(false);
                          setSubmenuOpen("");
                        }}
                        className="text-lg"
                      >
                        Indian Bride
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                to="/catalogue"
                onClick={() => setIsOpen(false)}
                className={`text-xl ${
                  submenuOpen === "catalogue" ? "text-gray-400" : ""
                }`} // Turns gray when clicked
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={`text-xl ${
                  submenuOpen === "login" ? "text-gray-400" : ""
                }`} // Turns gray when clicked
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
