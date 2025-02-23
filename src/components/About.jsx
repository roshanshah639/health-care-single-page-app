// import React from "react";
// import img from "../assets/img/about.jpg";

// const About = () => {
//   return (
//     <div
//       className="flex items-center justify-center bg-[#F8E8E8] py-16 px-6 lg:px-16"
//       id="about"
//     >
//       <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 space-y-8">
//           <h2 className="text-lg text-[#9C326D] tracking-widest">About Us</h2>
//           <h1 className="text-4xl font-sans text-[#7A2656] leading-relaxed">
//             Caring for the Health & Well-Being of Families
//           </h1>
//           <p className="text-[#9C326D] font-light text-xl leading-relaxed max-w-2xl">
//             At HealthTechPro, we are committed to bringing hope and happiness to
//             families through advanced healthcare solutions. Founded by a team of
//             dedicated entrepreneurs and experienced medical professionals, we
//             provide world-class care using state-of-the-art technology. Trust us
//             to guide you on your journey to better health with compassion,
//             innovation, and unparalleled expertise.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative">
//             <img
//               className="w-full h-auto rounded-lg shadow-xl object-cover"
//               src={img}
//               alt="About HealthTechPro"
//             />
//             {/* Decorative Ovals */}
//             <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#FFD9DA] rounded-full opacity-40 -z-10"></div>
//             <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#FFD9DA] rounded-full opacity-30 -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div
      className="flex items-center justify-center bg-[#F8E8E8] py-16 px-6 lg:px-16 scroll-smooth"
      id="about"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
          <h2 className="text-lg text-[#9C326D] tracking-widest uppercase font-medium">
            Discover Our Story
          </h2>
          <h1 className="text-4xl font-sans text-[#7A2656] leading-normal font-bold">
            Empowering Families with Exceptional Care
          </h1>
          <p className="text-[#9C326D] font-light text-lg leading-relaxed max-w-2xl transition-all duration-300">
            Welcome to HealthTechPro, where hope meets innovation. Our
            passionate team of visionary entrepreneurs and skilled medical
            experts is dedicated to transforming lives with cutting-edge
            healthcare solutions. We blend compassion, advanced technology, and
            expertise to create a seamless journey toward vibrant health and
            lasting happiness for every family we serve.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative animate-slide-in">
          <div className="relative group">
            <img
              className="w-full h-auto rounded-lg shadow-xl object-cover transition-transform duration-500 group-hover:scale-105"
              src={img}
              alt="HealthTechPro - Caring for You"
            />
            {/* Decorative Ovals */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#FFD9DA] rounded-full opacity-40 -z-10 transition-opacity duration-300 group-hover:opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#FFD9DA] rounded-full opacity-30 -z-10 transition-opacity duration-300 group-hover:opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
