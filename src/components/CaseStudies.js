import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const CaseStudies = () => {
  const cardData = [
    {
      id: 1,
      frame: "./client-1.png",
      avatar: "./client-1-avatar.png",
      name: "Sara Thomas",
      designation: "Co Founder urh",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ",
    },
    {
      id: 2,
      frame: "./client-1.png",
      avatar: "./client-1-avatar.png",
      name: "Sara Thomas",
      designation: "Co Founder urh",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ",
    },
    {
      id: 3,
      frame: "./client-1.png",
      avatar: "./client-1-avatar.png",
      name: "Sara Thomas",
      designation: "Co Founder urh",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ",
    },
    {
      id: 4,
      frame: "./client-1.png",
      avatar: "./client-1-avatar.png",
      name: "Sara Thomas",
      designation: "Co Founder urh",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pLorem ipsum dolor sit amet, consectetuer adipiscing elit. AenLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ",
    },
  ];
  return (
    <div className="font-outfit">
      <h2 className="font-bold text-4xl text-center mb-5">Case Studies</h2>
      {/* <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          "--swiper-pagination-color": "#26b5a1",
          "--swiper-pagination-bullet-inactive-color": "#d9d9d9",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom": "0px",
        }}
      > */}
      {cardData.map((card) => {
        return (
          // <SwiperSlide key={card.id} className=" lg:pb-10 px-5 lg:px-0 pb-5 ">
          <div className="flex flex-col bg lg:flex-row justify-around items-center  ">
            <div className="w-full  lg:w-[600px]">
              <div className="flex flex-col ">
                <img src="./quotes.png" width={45} height={45} />
                <p className="mt-4 text-base font-normal text-[#494949]">
                  {card.content}
                </p>
                <div className="flex  items-center mt-4">
                  <img src={card.avatar} />
                  <div className="flex flex-col mx-2">
                    <p className="font-semibold text-xl text-textBlack">
                      {card.name}
                    </p>
                    <p className="font-normal text-2xl text-[#494949]">
                      {card.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </SwiperSlide>
        );
      })}
      {/* </Swiper> */}
    </div>
  );
};

export default CaseStudies;
