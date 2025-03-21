import { HiOutlineExternalLink } from "react-icons/hi";

const Card = ({image, title, info   }) => {
  return (
    <div className="flex flex-col  md:flex-row gap-4 pb-4 border-b last:border-b-0 border-b-[#F1F3F7]/15 mb-4 ">
      <div className="">
        <img src={image} alt="" className="mx-auto" />
      </div>
      <div className="">
        <p className="font-inter text-sm text-center md:text-left font-normal">
          {title}
        </p>
        <div className="flex flex-row justify-center md:justify-start items-center gap-2 ">
          <p className="font-semibold text-center  md:text-start text-base">
            {info}
          </p>
          <a href="">
            <HiOutlineExternalLink className={"text-[#4D5AE8]"} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card