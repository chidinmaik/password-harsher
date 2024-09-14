import React from 'react';
import './WhatsAppButton.css'; // Import the styles for the button

const WhatsAppButton = () => {
  const phoneNumber = '+2348133282698'; // Replace with your number
  const message = 'Hello, chidinma, i love the password hasher!'; // Predefined message

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsAppButton;
