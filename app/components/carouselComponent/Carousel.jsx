"use client"

import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const [responsive, setResponsive] = useState({});

  useEffect(() => {
    setResponsive({
      0: { items: 2 },
      576: { items: 3 },
      1024: { items: 5 },
    });
  }, []); // Set responsive configuration after component mounts

  let items = [
    { imageUrl: "/Images/carousel1.png", title: "Image 1" },
    { imageUrl: "/Images/carousel2.png", title: "Image 2" },
    { imageUrl: "/Images/carousel3.png", title: "Image 3" },
    { imageUrl: "/Images/carousel4.png", title: "Image 4" },
    { imageUrl: "/Images/carousel5.png", title: "Image 5" },
    { imageUrl: "/Images/carousel6.png", title: "Image 6" },
    { imageUrl: "/Images/carousel7.png", title: "Image 7" },
  ];

  return (
    <div className="mx-auto max-w-7xl 2xl:container w-full mb-4 border pt-6 pb-6">
      <p className="text-center font-bold hidden lg:block">Over 32+ software businesses growing with Bulsoft</p>
      <div className="w-11/12 mx-auto mt-6">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
      >
        {items.map((item, index) => (
          <div key={index} className="inline-block pl-12">
            <img src={item.imageUrl} alt={item.title} className="w-full" />
          </div>
        ))}
      </AliceCarousel>
      </div>
    </div>
  );
};

export default Carousel;
