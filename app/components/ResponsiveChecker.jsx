"use client"

import React, { useState, useEffect } from 'react';

const ResponsiveChecker = () => {
  const [content, setContent] = useState("MEDIUM"); // Default to MEDIUM size

  useEffect(() => {
    // Function to get content based on screen size
    function getContentByScreenSize() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) { // Small screens
          return "SMALL";
        } else if (window.innerWidth < 1024) { // Medium screens
          return "MEDIUM";
        } else {
          return "LARGE"; // Large screens
        }
      }
      return "MEDIUM"; // Fallback for non-browser environments
    }

    // Set initial content
    setContent(getContentByScreenSize());

    // Add an event listener to handle screen size changes
    function handleResize() {
      setContent(getContentByScreenSize());
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="main_container">
      <p className="text-gray-400 mt-8 w-4/6 text-justify">
        {content}
      </p>
      <div className=' sm:text-green-600 sm:text-center sm:text-2xl md:text-blue-600 lg:text-amber-900 xl:text-purple-700 '>Text</div>

    </div>
  );
}

export default ResponsiveChecker;
