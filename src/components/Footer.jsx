import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#B4E3EB] text-[#9C326D] md:mt-0 border-t ">
      <div className="container mx-auto px-5 md:px-32 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Health Tech Pro */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Health Tech Pro</h1>
            <p className="text-sm leading-loose">
              Our team of dedicated doctors specializes in unique fields such as
              orthopedics, cardiology, pediatrics, neurology, dermatology, and
              more. We are committed to providing exceptional care for your
              health and well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <nav className="flex flex-col space-y-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-[#a73574] transition-colors duration-300 group cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                About
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Solutions/Services
              </Link>
              <Link
                to="doctors"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Team
              </Link>
              <Link
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Core Service Areas
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Services</h2>
            <nav className="flex flex-col space-y-3">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Health Check
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Equipment Supply
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Installation and Training
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Maintenance and Support
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#7A2656] transition-all cursor-pointer"
              >
                Annual Servicing Agreements
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <nav className="flex flex-col space-y-4">
              <p className="flex items-center gap-2 text-md">
                <CiLocationOn className="text-[#9C326D] text-xl" /> Lazimpat,
                Kathmandu, Nepal
              </p>
              <a
                href="mailto:info@the-corporate.com"
                className="flex items-center gap-2 hover:text-[#7A2656] transition-all"
              >
                <CiMail className="text-[#9C326D] text-xl" />
                info@the-corporate.com
              </a>
              <a
                href="tel:+977-1-4567890, 9813131313"
                className="flex items-center gap-2 hover:text-[#7A2656] transition-all"
              >
                <FiPhoneCall className="text-[#9C326D] text-xl" />
                +977-1-4567890, 9813131313
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#9C326D] mt-4">
        <div className="container mx-auto px-5 md:px-32 py-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Developed by{" "}
            <span className="font-semibold hover:text-[#7A2656] transition-all cursor-pointer">
              www.The-Corporate.com
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
