import { FooterLinkHeading } from "../../ui";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import facebook from "../../../assets/icons/social/facebook.png";
import linkedin from "../../../assets/icons/social/linkedin.png";
import instagram from "../../../assets/icons/social/instagram.png";
import twitter from "../../../assets/icons/social/twitter.png";
import pinstar from "../../../assets/icons/social/pinstar.png";

const socialList = [facebook, linkedin, instagram, twitter, pinstar];

import Card from "./Card";

const GetInTouch = () => {
  return (
    <div className="w-full  text-center md:text-left">
      <FooterLinkHeading>Get in Touch</FooterLinkHeading>
      <div className="text-white mt-5 space-y-2">
        <Card title={"support@envobyte.com"} icon={MdOutlineMail} />
        <Card title={"+1 (667) 777 2477"} icon={FaWhatsapp} />
      </div>
      <div className="flex flex-row items-center justify-center md:justify-start gap-4 mt-6">
        {socialList.map((image, index) => (
          <a href="" key={index} >
            <img src={image} alt=""  />
          </a>
        ))}
      </div>
    </div>
  );
};
export default GetInTouch;
