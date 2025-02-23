// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = ({ phoneNumber, defaultMessage }) => {
//   // Format the WhatsApp URL
//   const encodedMessage = encodeURIComponent(defaultMessage);
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-4 right-6 py-2 px-4
//          rounded-lg flex items-center gap-2 z-50"
//     >
//       <span className="text-md text-indigo-700 bg-white px-4 py-0 rounded">
//         Need Help ?
//       </span>
//       <FaWhatsapp className="w-16 h-16 text-white bg-green-500 rounded-full p-1" />
//     </a>
//   );
// };

// // Default props in case none are provided
// WhatsAppButton.defaultProps = {
//   phoneNumber: "+977 9813897111",
//   defaultMessage: "Hi, I’d like to chat about your services!",
// };

// export default WhatsAppButton;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({
  phoneNumber = "+9779813897111",
  defaultMessage = "Hi, I’d like to chat about your services!",
}) => {
  // Sanitize phone number: remove +, spaces, and invalid characters
  const sanitizedPhoneNumber = phoneNumber.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${sanitizedPhoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 py-2 px-4 rounded-lg flex items-center gap-2 z-50"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="text-md text-indigo-700 bg-white px-4 py-0 rounded">
        Need Help?
      </span>
      <FaWhatsapp className="w-12 h-12 text-white bg-green-500 rounded-full p-1" />
    </a>
  );
};

export default WhatsAppButton;
