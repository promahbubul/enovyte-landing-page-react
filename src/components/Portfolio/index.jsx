import { useRef, useState } from "react";
import {
  portfolioData,
  portfolioData1,
} from "../../constant/portfolio.constant";
import { SectionHeading } from "../ui";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  "Website",
  "UI/UX",
  "seo",
  "logo design",
  "banner design",
  "google ads",
];
const Portfolio = () => {
  const [activeButton, setActiveButton] = useState("next");
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings1 = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 2000,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="portfolio" className="z-10 relative border-2 border-red-500">
      <div className="max-w-7xl mx-auto mt-20 px-5 md:px-0">
        <SectionHeading
          title={"UI/UX PORTFOLIO"}
          titleClassName={"!text-[#0C89FF]"}
          description={"Check Our Previous Work"}
          descriptionClassName={"!text-[#001246] border-b-[#0A2C8C]/20"}
        />
        <div className="text-[#474747] flex flex-row overflow-x-auto items-center gap-10">
          {services.map((service) => (
            <button className="hover:text-[#0C89FF] w-max" key={service}>
              {service}
            </button>
          ))}
        </div>
      </div>
      {/* Projects */}
      <div className="mt-8 md:mt-16  overflow-hidden ">
        {/* Item 1 container */}
        <div className="w-full">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings1}
            >
              {portfolioData1?.map((project, index) => (
                <div key={index} className="">
                  <img className="w-full h-full" src={project} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-3 md:mt-6 slider-container ">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {portfolioData?.map((project, index) => (
                <div key={index} className="">
                  <img className="w-full h-full" src={project} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Button */}
        <div className="flex max-w-7xl  mx-auto flex-col md:flex-row  justify-between  items-center ">
          <div className="w-full hidden md:block  h-5 "></div>
          <div className="w-full mt-8 flex  flex-row justify-center items-center gap-4 z-10">
            <button
              onClick={() => {
                previous();
                setActiveButton("previous");
              }}
              className={
                activeButton === "previous"
                  ? "text-white  active:scale-95 duration-700 cursor-pointer z-20 bg-orange rounded border-[#4580FF] py-[13px] px-[14px]"
                  : `text-[#4580FF] active:scale-95 cursor-pointer z-20
                      border rounded border-[#4580FF] py-3 px-[14px]`
              }
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => {
                next();
                setActiveButton("next");
              }}
              className={
                activeButton === "next"
                  ? "text-white  active:scale-95 duration-700 rotate-180 cursor-pointer z-20 bg-orange rounded border-[#4580FF] py-[13px] px-[14px]"
                  : "text-[#4580FF] active:scale-95 cursor-pointer z-20 rotate-180  border rounded border-[#4580FF] py-3 px-[14px]"
              }
            >
              <IoIosArrowBack />
            </button>
          </div>
          <div className="w-full flex flex-row   items-center gap-4 text-white  mt-3 md:mt-1 justify-center md:justify-end max-w-7xl">
            <p className="font-raleway text-sm text-[#353535]">
              Creative Solution
            </p>
            <div className="w-20 h-0.5  bg-[#353535]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
