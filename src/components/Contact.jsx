// import React from "react";

// const Contact = () => {
//   return (
//     <div className="bg-[#FBE3E6] text-[#9C326D] flex flex-col items-center justify-center pt-4 pb-8 px-5">
//       <div className=" w-full p-8 md:p-12 flex items-center justify-center ">
//         {/* Contact Information */}
//         <div className="space-y-6 mb-8 w-[40%]">
//           <div className="flex flex-col items-start justify-center">
//             <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
//             <p className="text-lg text-center mb-8 mr-8">
//               At Health Tech Pro, we are committed to providing personalized,
//               compassionate care to help you on your journey to a healthier
//               life. Our team of experienced specialists is here to support you
//               every step of the way. Whether you have questions about our
//               services, need guidance on your treatment options, or want to
//               schedule a consultation, we are here to assist you.
//             </p>
//             <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
//             <p className="text-lg">Lazimpat, Kathmandu 44600</p>
//             <div className="text-center">
//               <h2 className="text-2xl font-semibold mb-2">Phone</h2>
//               <a
//                 href="tel:+977-1-5970611"
//                 className="text-lg hover:text-[#7A2656] transition-all"
//               >
//                 +977-1-5970611
//               </a>
//             </div>
//             <div className="text-center">
//               <h2 className="text-2xl font-semibold mb-2">Email</h2>
//               <a
//                 href="mailto:info@vatsalya.com.np"
//                 className="text-lg hover:text-[#7A2656] transition-all"
//               >
//                 info@vatsalya.com.np
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Google Map Embed */}
//         <div className="w-[40%] h-[350px] overflow-hidden rounded-lg shadow-lg">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.691632646754!2d85.31633734317894!3d27.722046404696442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1919f7dd0685%3A0xc59baa0caae9c83d!2sLazimpat%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1740296869977!5m2!1sen!2snp"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Google Map Location"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-[#FBE3E6] text-[#9C326D] flex flex-col items-center justify-center py-4 px-5">
      <div className="max-w-6xl w-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-5xl font-thin text-[#9C326D] mb-6">Contact Us</h1>
          <p className="text-lg font-light text-[#7A2656] leading-relaxed">
            At Health Tech Pro, we are committed to providing personalized,
            compassionate care to help you on your journey to a healthier life.
            Our team of experienced specialists is here to support you every
            step of the way. Whether you have questions about our services, need
            guidance on your treatment options, or want to schedule a
            consultation, we are here to assist you.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl  text-[#9C326D] mb-2">Our Location</h2>
              <p className="flex gap-2 items-center text-lg font-light text-[#7A2656]">
                <CiLocationOn className="text-[#9C326D] text-xl" />
                Lazimpat, Kathmandu 44600
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-[#9C326D] mb-2">Phone</h2>
              <a
                href="tel:+977-1-1234567"
                className="flex gap-2 items-center text-lg font-light text-[#7A2656] hover:text-[#9C326D] transition-all"
              >
                <FiPhoneCall className="text-[#9C326D] text-xl" />
                +977-1-1234567, 9813131313
              </a>
            </div>

            <div>
              <h2 className="text-2xl text-[#9C326D] mb-2">Email</h2>
              <a
                href="mailto:info@vatsalya.com.np"
                className="flex gap-2 items-center text-lg font-light text-[#7A2656] hover:text-[#9C326D] transition-all"
              >
                <CiMail className="text-[#9C326D] text-xl" />
                info@the-corporate.com
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.691632646754!2d85.31633734317894!3d27.722046404696442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1919f7dd0685%3A0xc59baa0caae9c83d!2sLazimpat%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1740296869977!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
