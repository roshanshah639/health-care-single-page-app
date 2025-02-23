import React from "react";
import PropTypes from "prop-types";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform lg:hover:-translate-y-3 transition-all duration-300 ease-in-out cursor-pointer border border-gray-100">
      {/* Icon Container */}
      <div className="p-4 bg-teal-100 rounded-full transition-all duration-300 ease-in-out group-hover:bg-teal-200 group-hover:shadow-md">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
        Providing precise, reliable solutions tailored to your needs with a
        commitment to excellence and innovation.
      </p>

      {/* Call to Action */}
      <a
        href="#"
        className="text-teal-600 font-medium text-sm hover:text-teal-800 transition-colors duration-300 ease-in-out group-hover:shadow-sm"
      >
        Learn More
      </a>
    </div>
  );
};

// PropTypes for type checking
ServicesCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServicesCard;
