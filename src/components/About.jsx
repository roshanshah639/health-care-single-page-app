// import React from "react";
// import img from "../assets/img/about.jpg";

// const About = () => {
//   return (
//     <div
//       className="flex items-center justify-center bg-[#F8E8E8] pt-8 lg:pt-10 pb-8 px-6 lg:px-16"
//       id="about"
//     >
//       <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Text Section */}
//         <div className="w-full lg:w-1/2 space-y-6 pt-4">
//           <h2 className="text-lg font-semibold text-teal-600 uppercase tracking-wider">
//             About Us
//           </h2>
//           <h1 className="text-4xl font-bold text-purple-800 leading-tight">
//             Caring for the Health & Well-Being of Families
//           </h1>
//           <p className="text-gray-700 text-base leading-relaxed max-w-lg">
//             At HealthTechPro, we are committed to bringing hope and happiness to
//             families through advanced healthcare solutions. Founded by a team of
//             dedicated entrepreneurs and experienced medical professionals, we
//             provide world-class care using state-of-the-art technology. Trust us
//             to guide you on your journey to better health with compassion,
//             innovation, and unparalleled expertise.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-600 transition-all duration-300 shadow-sm"
//           >
//             Learn More
//           </a>
//         </div>

//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="relative">
//             <img
//               className="w-full h-auto rounded-lg shadow-md object-cover"
//               src={img}
//               alt="About HealthTechPro"
//             />
//             {/* Decorative Ovals */}
//             <div className="absolute -top-8 -left-8 w-48 h-48 bg-purple-200 rounded-full opacity-40 -z-10"></div>
//             <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-purple-300 rounded-full opacity-30 -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import img from "../assets/img/about.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      className="flex items-center justify-center bg-[#F8E8E8] py-16 px-6 lg:px-16"
      id="about"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-lg text-[#9C326D] tracking-widest">About Us</h2>
          <h1 className="text-4xl font-sans text-[#7A2656] leading-relaxed">
            Caring for the Health & Well-Being of Families
          </h1>
          <p className="text-[#9C326D] font-light text-xl leading-relaxed max-w-2xl">
            At HealthTechPro, we are committed to bringing hope and happiness to
            families through advanced healthcare solutions. Founded by a team of
            dedicated entrepreneurs and experienced medical professionals, we
            provide world-class care using state-of-the-art technology. Trust us
            to guide you on your journey to better health with compassion,
            innovation, and unparalleled expertise.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              src={img}
              alt="About HealthTechPro"
            />
            {/* Decorative Ovals */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#FFD9DA] rounded-full opacity-40 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-[#FFD9DA] rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
