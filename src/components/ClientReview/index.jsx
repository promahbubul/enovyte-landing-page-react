import Slider from "react-slick";
import clientData from "../../constant/client.constant";
import { SectionHeading } from "../ui";
import REview from "./Review";
import { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const ClientReview = () => {
  const [activeButton, setActiveButton] = useState("next");
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
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
          rows: 1
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        },
      },
    ],
  };

  return (
    <section id="blog" className="relative mt-28 md:mt-40  ">
      <div className="max-w-6xl mx-auto text-center mt-10 md:pt-20 z-10 relative">
        <SectionHeading
          title={"CLIENT REVIEWS"}
          titleClassName={"!text-[#0C89FF]"}
          description={"Our Proud Clients"}
          descriptionClassName={"!text-[#001246]"}
        />
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {clientData.map((client) => (
              <REview {...client} key={client?.id} />
            ))}
          </Slider>
        </div>
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
    </section>
  );
};
export default ClientReview;
