import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/img/doc6.jpg",
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-5 pb-10 bg-[#FFE7E8]">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-5">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Our Team Members</h1>
          <p className="mt-2 text-gray-600">
            Meet our team of highly skilled and experienced professionals.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end mr-4 gap-5 lg:mt-0">
        <button
          className="bg-gray-100 text-[#7A2656] px-2 py-2 rounded-full hover:bg-[#7A2656]  transition duration-300"
          onClick={() => slider.current.slickPrev()}
        >
          <FaArrowLeft className="text-[#7A2656] hover:text-white" size={20} />
        </button>
        <button
          className="bg-gray-100 text-[#7A2656] px-2 py-2 rounded-full hover:bg-[#7A2656]  transition duration-300"
          onClick={() => slider.current.slickNext()}
        >
          <FaArrowRight className="text-[#7A2656] hover:text-white" size={20} />
        </button>
      </div>
      <div className="mt-4">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div className="px-2 focus:outline-none" key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={e.img}
                  alt={e.name}
                  className="w-full h-[387px] object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">{e.name}</h2>
                  <p className="mt-2 text-gray-600">{e.specialties}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
