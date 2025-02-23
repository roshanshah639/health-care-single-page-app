// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Contact from "../models/Contact";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   const openForm = () => {
//     setShowForm(true);
//     setMenu(false);
//   };

//   return (
//     <div className="fixed w-full z-20 bg-[#FCF7F7] text-[#9C326D] shadow-sm px-[100px]">
//       <div className="container mx-auto px-0 md:px-6 py-4">
//         {/* Main Navbar Container */}
//         <div className="flex flex-row justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center pr-4">
//             <Link to="home" spy={true} smooth={true} duration={500}>
//               <h1 className="text-2xl font-light text-[#9C326D] tracking-wider hover:text-[#a73574] transition-colors duration-200">
//                 HealthTechPro
//               </h1>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex flex-row items-center gap-12 font-light text-base tracking-wide">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
//             >
//               Home
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
//             >
//               About
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
//             >
//               Solutions
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="doctors"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
//             >
//               Team
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//             <Link
//               to="blog"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
//             >
//               Core Service Areas
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </nav>

//           {/* Contact Button (Desktop) */}
//           <div className="hidden lg:flex">
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="bg-[#9C326D] text-white px-10 py-2 rounded-full text-md font-light tracking-wide hover:bg-[#a73574] transition-all duration-300 ease-in-out shadow-sm cursor-pointer"
//             >
//               Contact Us
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose
//                 size={24}
//                 className="text-gray-600 cursor-pointer hover:text-teal-600 transition-colors duration-200"
//                 onClick={handleChange}
//               />
//             ) : (
//               <AiOutlineMenu
//                 size={24}
//                 className="text-gray-600 cursor-pointer hover:text-teal-600 transition-colors duration-200"
//                 onClick={handleChange}
//               />
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`${
//             menu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//           } lg:hidden absolute left-0 top-0 w-3/4 h-screen bg-[#F8F1E9] shadow-lg font-light text-lg text-gray-600 pt-20 px-8 transition-all duration-500 ease-in-out`}
//         >
//           <div className="flex flex-col gap-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="py-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer border-b border-gray-200"
//               onClick={closeMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="py-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer border-b border-gray-200"
//               onClick={closeMenu}
//             >
//               About
//             </Link>
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="py-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer border-b border-gray-200"
//               onClick={closeMenu}
//             >
//               Solutions
//             </Link>
//             <Link
//               to="doctors"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="py-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer border-b border-gray-200"
//               onClick={closeMenu}
//             >
//               Team
//             </Link>
//             <Link
//               to="blog"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="py-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer border-b border-gray-200"
//               onClick={closeMenu}
//             >
//               Insights
//             </Link>
//             <button
//               className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-md text-base font-light tracking-wide hover:bg-teal-800 transition-all duration-300 ease-in-out"
//               onClick={openForm}
//             >
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form Modal */}
//       {showForm && <Contact closeForm={closeForm} />}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    closeMenu();
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-20 bg-[#FCF7F7] text-[#9C326D] shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        {/* Main Navbar Container */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-2xl pl-8 font-light text-[#9C326D] hover:text-[#a73574] transition-colors duration-200 cursor-pointer"
          >
            HealthTechPro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-light text-base tracking-wide">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              Home
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              About
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              Solutions
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              Team
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              Core Service Areas
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#9C326D] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="relative text-[#9C326D] hover:text-[#a73574] text-lg transition-colors duration-300 group cursor-pointer"
            >
              <button
                onClick={openForm}
                className="bg-[#9C326D] text-white px-6 py-2 rounded-full text-md font-light tracking-wide hover:bg-[#a73574] transition-all duration-300 ease-in-out shadow-sm"
              >
                Contact Us
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center pr-4">
            {menu ? (
              <AiOutlineClose
                size={24}
                className="hidden text-gray-600 cursor-pointer hover:text-teal-600 transition-colors duration-200 "
                onClick={toggleMenu}
              />
            ) : (
              <AiOutlineMenu
                size={24}
                className="text-gray-600 cursor-pointer hover:text-teal-600 transition-colors duration-200"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden fixed left-0 top-16 w-[75%] md:w-[50%] h-screen bg-[#FFE7E8] shadow-lg font-light text-lg text-gray-600 transition-transform duration-500 ease-in-out z-30 px-16`}
        >
          {/* Close Icon at the Top */}
          <div className="flex justify-end pt-4">
            <AiOutlineClose
              size={24}
              className="text-gray-600 cursor-pointer hover:text-teal-600 transition-colors duration-200"
              onClick={toggleMenu}
            />
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="py-2hover:text-[#9C326D] transition-colors duration-200 cursor-pointer border-b border-gray-200"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="py-2 hover:text-[#9C326D] transition-colors duration-200 cursor-pointer border-b border-gray-200"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="py-2 hover:text-[#9C326D] transition-colors duration-200 cursor-pointer border-b border-gray-200"
              onClick={closeMenu}
            >
              Solutions
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="py-2 hover:text-[#9C326D] transition-colors duration-200 cursor-pointer border-b border-gray-200"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className="py-2  hover:text-[#9C326D] transition-colors duration-200 cursor-pointer border-b border-gray-200"
              onClick={closeMenu}
            >
              Core Services
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="w-full mt-4 bg-[#9C326D] text-white px-4 py-2 rounded-md font-light tracking-wide hover:bg-teal-800 transition-all duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
