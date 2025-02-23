import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div
      className="min-h-[100vh] flex items-center justify-center lg:px-32 px-6 
    bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 bg-no-repeat 
    bg-cover text-white relative overflow-hidden"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-[url('assets/img/home.png')] 
      bg-cover opacity-100 mix-blend-overlay"
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full lg:w-3/5 space-y-8 py-12 animate-fadeIn">
        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-light tracking-wide leading-tight drop-shadow-lg">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200 animate-slideInLeft">
            Empowering Health Choices
          </span>
          <span className="block text-3xl lg:text-4xl font-light mt-2 animate-slideInRight">
            For a Vibrant Life
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-2xl font-light leading-relaxed opacity-90 max-w-xl animate-fadeInUp delay-200">
          Discover cutting-edge solutions designed to enhance your well-being.
          We blend technology and care to deliver personalized health
          experiences that inspire confidence and vitality.
        </p>

        {/* Button */}
        {/* <div className="animate-fadeInUp delay-400">
          <Button
            title="Explore Solutions"
            className="bg-white text-teal-600 px-8 py-3 
            rounded-full font-medium hover:bg-teal-100
             hover:text-teal-700 transition-all duration-300 shadow-lg"
          />
        </div> */}
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-teal-900/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;
