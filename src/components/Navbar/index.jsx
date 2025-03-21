import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import navlinks from "../../constant/navlinks.constant";
import { Button } from "../ui";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [showMobbileMenu, setMobileMenu] = useState(false);
  return (
    <section
      id="navbar"
      className="bg-[#04135B] text-white justify-between px-5 2xl:px-5"
    >
      {/* Mobile navbar */}
      <MobileNavMenu
        setMobileMenu={setMobileMenu}
        showMobbileMenu={showMobbileMenu}
      />

      {/* Desktop Navbar */}
      <nav className="hidden md:flex   flex-row justify-between items-center py-4 max-w-7xl 2xl:px-5 lg:px-5 mx-auto">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>
        <div className="flex flex-row items-center gap-10  text-white">
          {navlinks.map(({ title, id, link }) => (
            <a href={link}>
              <button
                key={id}
                className="font-semibold text-base font-inter hover:text-orange"
              >
                {title}
              </button>
            </a>
          ))}
        </div>
        <Button className={"md:hidden xl:block"}>See Pricing</Button>
      </nav>
    </section>
  );
};
export default Navbar;
