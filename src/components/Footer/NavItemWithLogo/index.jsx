import footerImage from "../../../assets/images/logo.png";

const NavItemWithLogo = () => {
  return (
    <div className="w-full xl:w-4/12 ">
      <div className="">
        <img src={footerImage} alt="" className="mx-auto xl:mx-0" />
        <p className="mt mt-4 text-center xl:text-left text-white text-base font-normal font-roboto">
          We are an IT Company. We help businesses to bring ideas to life easily
          and affordably.
        </p>
      </div>
    </div>
  );
};
export default NavItemWithLogo;
