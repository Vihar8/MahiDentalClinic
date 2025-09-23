import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UpArrow from '/assets/up_arrow.png'; // Adjust the path to your image

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) { // Show the button after scrolling down 200px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const openWhatsApp = () => {
    const phoneNumber = "+919978914926"; // Replace with your number
    const message = "Hello!";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <>
      {showButton && (
        <div
          className="topArrow"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* <img className="arrowImg" alt="Scroll to top" src={UpArrow} /> */}
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#88b121"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12 2L4 10H9V22H15V10H20L12 2Z"/>
            </svg>

        </div>
      )}

       {/* WhatsApp Button */}
      <div
        className="fixed bottom-24 right-2 z-50 cursor-pointer p-3 bg-green-500 rounded-full shadow-md hover:scale-100 transition"
        onClick={openWhatsApp}
      >
        <img src="/assets/whatsapp-logo.png" alt="WhatsApp" className="w-9 h-9" />
      </div>
    </>
  );
};

export default ScrollToTopButton;
