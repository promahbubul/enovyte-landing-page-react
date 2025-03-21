import { useRef, useState } from "react";
import { SectionHeading } from "../ui";
import Members from "./Members";
import Slider from "react-slick";
import teamMemberData from "../../constant/teamMembers.constant";
import MemberCard from "./Members/MemberCard";
import { IoIosArrowBack } from "react-icons/io";

const Team = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    // cssEase: "linear",
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
    <section className="relative mt-24 md:mt-28 border-2 border-red-500">
      <div className="max-w-6xl px-5 md:px-0 mx-auto text-center pt-5 md:pt-20 z-10 relative">
        <SectionHeading
          title={"EXPERIENCED TEAM"}
          titleClassName={"!text-[#0C89FF]"}
          description={"Our Team Members"}
          descriptionClassName={"!text-[#001246]"}
        />
        <div className="mt-9 ">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {teamMemberData.map(({ designation, id, name, image }) => (
              <MemberCard
                designation={designation}
                id={id}
                name={name}
                image={image}
                key={id}
              />
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
      {/* Members container */}
    </section>
  );
};
export default Team;
