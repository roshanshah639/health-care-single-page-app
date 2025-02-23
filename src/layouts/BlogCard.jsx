import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-4 ">
      <div className="max-h-[310px] min-h-[310px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer transform hover:scale-105">
        <img
          className="w-full h-48 object-cover rounded-t-xl"
          src={img}
          alt={headlines}
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            {headlines}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
