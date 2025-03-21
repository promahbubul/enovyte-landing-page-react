import { Link } from "react-router-dom";
import { FooterLinkHeading } from "../ui";
import FooterLink from "./FooterLink";
import NavItemWithLogo from "./NavItemWithLogo";
import FooterLinkOne from "./FooterLinkOne";
import FooterLinkTwo from "./FooterLinkTwo";
import FooterLinkThree from "./FooterLinkThree";
import GetInTouch from "./GetInTouch";

const Footer = () => {
  return (
    <section className=" mt-8 md:mt-24 pt-12 md:pt-28  border-t border-[#E5E7EB]/20 relative z-20   ">
      <div className="max-w-7xl px-5 xl:px-5 mx-auto flex  gap-10 md:gap-3 2xl:gap-20 flex-col xl:flex-row justify-center xl:justify-between pb-12 md:pb-20 ">
        <NavItemWithLogo />
        <div className="w-full flex flex-col gap-10  md:flex-row items-center">
          <FooterLinkOne />
          <FooterLinkTwo />
          <FooterLinkThree />
          <GetInTouch />
        </div>
      </div>
      <div className="pt-3 pb-6 border-t border-t-[#E5E7EB]/10">
        <p className="text-sm font-bold font-roboto text-center text-white">
          @2025 - ENVOBYTE, All rights are reserved.
        </p>
      </div>
    </section>
  );
};
export default Footer;
