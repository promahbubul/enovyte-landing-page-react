import activitiesStatus from "../../constant/activitiesStatus.constant";
import { Button, OutlineButton, StatusCard } from "../ui";
import heroImage from "../../assets/images/hero.svg";
import hederBD from "../../assets/images/header-bd.png";

const Header = () => {
  return (
    <section className="bg-gradient-to-b from-[#001655] pb-28 to-[#001243] border-2 border-red-500">
      <header
        className={`text-white  text-center -white bg-no-repeat  bg-cover bg-center  `}
        style={{ backgroundImage: `url(${hederBD})` }}
      >
        <div className="bg-gradient-to-b pt-20 md:pt-28 px-5 md:px-0 from-[#04135B] to-transparent ">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-extrabold font-raleway text-6xl md:text-[75px] leading-tight">
              DIGITAL SERVICES
            </h1>
            <p className="font-extrabold font-raleway text-lg md:text-[25px] ">
              BUILDING YOUR EMPIRE DIGITALLY
            </p>
            <div className="flex flex-col md:flex-row mt-12 justify-center  items-center gap-4">
              <Button padding={"px-[69px]"} className={""}>
                See Pricing{" "}
              </Button>
              <OutlineButton>Book an appointment</OutlineButton>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap items-center justify-center mt-14">
            {activitiesStatus.map(({ description, icon, id, title, last }) => (
              <StatusCard
                image={icon}
                description={description}
                key={id}
                title={title}
                last={last}
              />
            ))}
          </div>
          <div className="mt-[78px]">
            <img src={heroImage} alt="" className="mx-auto" />
          </div>
        </div>
      </header>
    </section>
  );
};
export default Header;
