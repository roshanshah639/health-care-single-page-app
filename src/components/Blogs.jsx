import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-10 bg-[#FFD9DA]">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Major Areas That We Cover
          </h1>
          <p className=" mt-2 text-center lg:text-start text-gray-600">
            Our commitment to excellence in healthcare. We believe in a holistic
            approach to health care, combining traditional medicine with
            advanced technologies and medical expertise to provide comprehensive
            care.
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Radiology" />
          <BlogCard img={img2} headlines="critical Care" />
          <BlogCard img={img3} headlines="Surgery" />
          <BlogCard img={img4} headlines="Laboratory" />
          <BlogCard img={img5} headlines="Healthcare Infrastructure" />
          <BlogCard img={img6} headlines="Consultation" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
