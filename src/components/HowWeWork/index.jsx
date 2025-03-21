import bg3 from "../../assets/images/bg-3.jpg";
import howWeWorkImage from "../../assets/images/howwework.png";
import { Button } from "../ui";

const HowWeWork = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg3})` }}
      className="relative mt-36 bg-no-repeat  bg-center md:bg-cover py-14 px-5 2xl:px-5 md:py-28"
    >
      <div className="max-w-6xl text-center text-white  mx-auto  pt-20 z-10 relative">
        <h3 className="">HOW WE WORK</h3>
        <h2 className="max-w-[716px] mt-4 font-raleway font-extrabold text-4xl md:text-[45px] text-center mx-auto">
          Our Process For Delivering Results
        </h2>
        <p className="mt-4 font-barlow text-base font-normal max-w-[701px] mx-auto text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>
        <img
          src={howWeWorkImage}
          alt=""
          className="mt-10 md:mt-20 mx-auto text-center"
        />
        <Button padding={"py-[17px] px-[74px]"} className={" mt-10 md:mt-20"}>
          Contact Now
        </Button>
      </div>
      <div
        className="bg-[#001C6C] absolute inset-y-0 inset-x-0  mix-blend-color
"
      ></div>
    </section>
  );
};
export default HowWeWork;
