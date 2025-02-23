import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { MdInstallDesktop } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { FaFileContract } from "react-icons/fa6";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaFileContract size={35} className=" text-backgroundColor" />;
  const icon4 = (
    <MdInstallDesktop size={35} className=" text-backgroundColor" />
  );
  const icon5 = <GrVmMaintenance size={35} className=" text-backgroundColor" />;

  return (
    <div className="flex flex-col justify-center py-10 lg:px-32 px-5 bg-[#B4E3EB]">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start text-gray-700">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start text-gray-600">
            Healthcare becomes a melodic unity of care, blending wisdom and
            empathy to cradle the human essence, fostering balance and vitality
            in body, mind, and soul.
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div> */}
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-10">
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon1} title="Equipment Supply" />
        <ServicesCard icon={icon4} title="Installation and Training" />
        <ServicesCard icon={icon5} title="Maintenance and Support" />
        <ServicesCard icon={icon3} title="Annual Servicing Agreements" />
      </div>
    </div>
  );
};

export default Services;
