import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const REview = ({ name, review, image, site, siteIcon, star }) => {
  return (
    <div className=" p-[1px] mr-5 mb-5 rounded-lg  translate-x-2.5 bg-gradient-to-b from-[#0A2C8C]/20 to-[#0A2C8C]/10">
      <div className="p-6 pb-7  bg-white rounded-lg">
        <div className="text-left  slider-container flex flex-row items-center gap-1">
          {Array.from({ length: star }, (_, index) => (
            <FaStar key={index} color="#4580FF" size={24} />
          ))}
        </div>
        <p className="text-left mt-4 text-[#424242] font-normal font-inter text-sm mb-6">
          “{review}”
        </p>
        <div className="flex flex-row items-center gap-2">
          <div className="">
            <img src={image} alt="" />
          </div>
          <div className="">
            <h3 className="text-[#0A2C8C] font-medium text-lg font-inter">
              {name}
            </h3>
            <div className="flex flex-row items-center gap-1">
              <img src={siteIcon} alt="   " />
              <p className="text-[#001246]/30 text-sm font-normal">
                From {site}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default REview;
