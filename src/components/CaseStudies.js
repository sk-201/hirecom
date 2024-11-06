import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CaseStudies = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check for screen size to toggle mobile, tablet, or desktop view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 834);
      setIsTablet(width >= 834 && width <= 1024);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardData = [
    {
      id: 1,
      frame: "./case-1.png",
      date: "Dec 10,2021",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    },
    {
      id: 2,
      frame: "./case-2.png",
      date: "Dec 10,2021",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    },
    {
      id: 3,
      frame: "./case-3.png",
      date: "Dec 10,2021",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
    },
  ];

  return (
    <div className="font-outfit mt-10">
      <h2 className="font-bold text-4xl text-center mb-5">Case Studies</h2>

      {isMobile || isTablet ? (
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper bg-[#4747ea]"
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2}
          style={{
            "--swiper-pagination-color": "#26b5a1",
            "--swiper-pagination-bullet-inactive-color": "#d9d9d9",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "10px",
          }}
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.id} className="pb-5 px-5 ">
              <p className="text-white text-center my-10 font-bold text-4xl">
                Our Journals
              </p>
              <div className="flex flex-col mx-auto">
                <img src={card.frame} alt={`Case study ${card.id}`} />
                <p className="text-white text-sm font-bold mt-4">{card.date}</p>
                <p className="text-white text-base font-medium mt-4">
                  {card.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex bg-[#4747ea] flex-col justify-around items-center h-[606px]">
          <p className="text-white font-bold text-4xl">Our Journals</p>
          <div className="flex justify-around items-center px-5">
            {cardData.map((card) => (
              <div className="flex flex-col mx-10" key={card.id}>
                <img src={card.frame} alt={`Case study ${card.id}`} />
                <p className="text-white text-sm font-bold mt-4">{card.date}</p>
                <p className="text-white text-base font-medium mt-4">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
