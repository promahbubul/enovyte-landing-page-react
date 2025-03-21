import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import navlinks from "../../constant/navlinks.constant";
import { Button } from "../ui";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [showMobbileMenu, setMobileMenu] = useState(true);
  return (
    <section
      id="navbar"
      className="bg-[#04135B] text-white justify-between px-5 md:px-0"
    >
      {/* Mobile navbar */}
      <nav className="flex md:hidden flex-row items-center justify-between  py-5 border-2 border-red-500">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <button
          onClick={() => setMobileMenu(true)}
          className="text-2xl p-3 rounded border"
        >
          <GiHamburgerMenu />
        </button>
        {/* NavLinks */}
        {showMobbileMenu && (
          <div className="fixed z-30 border-2  border-red-500 inset-0">
            <div className="w-10/12 bg-white h-full z-40 relative flex justify-between flex-col ">
              <div className="">
                <div className="bg-blue-900 p-5 flex ">
                  <img src={logo} className="mx-auto" />
                  <button
                    onClick={() => setMobileMenu(false)}
                    className="ml-auto text-3xl text-white"
                  >
                    <AiFillCloseSquare />
                  </button>
                </div>
                <div className={"flex flex-col text-blue-800 "}>
                  {navlinks.map(({ id, link, title }) => (
                    <a
                      className="border-b border-b-blue-800 py-3 px-4 hover:bg-blue-800 hover:text-white"
                      key={id}
                      href={link}
                      onClick={() => setMobileMenu(false)}
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="">
                <Button>See Pricing</Button>
              </div>
            </div>
            <div
              onClick={() => setMobileMenu(false)}
              className="w-full bg-blue-900/90  absolute z-30 inset-0 h-full"
            ></div>
          </div>
        )}
      </nav>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex   flex-row justify-between items-center py-4 max-w-7xl xl:px-0 lg:px-5 mx-auto">
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
        <Button>See Pricing</Button>
      </nav>
    </section>
  );
};
export default Navbar;
