import servicesData from "../../constant/services.constant";
import ServiceCard from "./ServiceCard";
import { IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

const services = [
  "Website",
  "UI/UX",
  "seo",
  "logo design",
  "banner design",
  "google ads",
];

const DigitalServices = () => {
  const [activeButton, setActiveButton] = useState("next");
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="service">
      <div className="pt-12 pb-14 bg-gradient-to-b from-[#001243] to-[#001655] border-2 border-red-500">
        {/* Section Heading */}
        <div className="max-w-7xl px-5 md:px-0 mx-auto">
          <h3 className="text-orange text-base font-semibold font-raleway">
            DIGITAL SERVICES
          </h3>
          <h2 className="font-bold text-4xl md:text-5xl font-inter mt-2 text-white border-b border-b-white/15 pb-7 mb-7 ">
            Check Our Available Services
          </h2>
          <div className="text-white flex overflow-x-auto z-20 relative flex-row items-center gap-10">
            {services.map((service) => (
              <div className=" " key={service}>
                {service}
              </div>
            ))}
          </div>
        </div>
        {/* Services */}
        <div className="relative">
          {/* Services Container */}
          <div className="bg-[#0A3CCA]/60 w-[200px] md:w-[831px] h-[250px] md:h-[590px] absolute rounded-[50%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 blur-2xl z-10 "></div>
          <div className="max-w-7xl  mx-auto mt-16 z-20 relative  slider-container ">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {servicesData.map(({ description, id, image, title }) => (
                <ServiceCard
                  key={id}
                  description={description}
                  image={image}
                  title={title}
                />
              ))}
            </Slider>
          </div>
          {/* Button */}
          <div className="mt-8 flex flex-row justify-center items-center gap-4 z-10">
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
        </div>
        <div className="flex flex-row  items-center gap-4 text-white mt-1 justify-end max-w-7xl mx-auto ">
          <p className="font-raleway text-sm">Creative Solution</p>
          <div className="w-20 h-0.5  bg-white"></div>
        </div>
      </div>
    </section>
  );
};
export default DigitalServices;
