
import navlinks from "../../../constant/navlinks.constant";
import logo from "../../../assets/images/logo.png";
import { AiFillCloseSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../../../components/ui";

const MobileNavMenu = ({ showMobbileMenu, setMobileMenu }) => {
  return (
    <nav className="flex md:hidden flex-row items-center justify-between  py-5 ">
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
        <div className="fixed z-30  inset-0">
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
            <div className="p-5">
              <Button className={"px-0 "}>See Pricing</Button>
            </div>
          </div>
          <div
            onClick={() => setMobileMenu(false)}
            className="w-full bg-blue-900/90  absolute z-30 inset-0 h-full"
          ></div>
        </div>
      )}
    </nav>
  );
};
export default MobileNavMenu;
