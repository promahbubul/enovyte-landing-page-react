/* eslint-disable no-unused-vars */
import { MdOutlineMail } from "react-icons/md";

const Card = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-row items-center justify-center md:justify-start gap-3 ">
      <div className="text-orange">
        <Icon size={24} />
      </div>
      <p className="text-base text-white font-roboto">{title}</p>
    </div>
  );
};
export default Card;
