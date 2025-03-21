import Button from "../../ui/Button";
import OutlineButton from "../../ui/OutlineButton";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#3158C7]/20 ml-8 -translate-x-5 z-20 border border-white/30 rounded cursor-pointer p-11">
      <img src={image} alt="" className="mx-auto w-[185] h-[151px]" />
      <div className="text-center mt-4">
        <h3 className="text-2xl font-semibold font-inter text-white">
          {title}
        </h3>
        <p className="text-base mt-2 font-normal font-inter text-white">
          {description}
        </p>
        <div className="flex flex-row items-center justify-center gap-2 mt-6">
          <Button
            className={"text-sm font-inter rounded-full py-[14px] px-9"}
            background={"bg-[#0C89FF]"}
          >
            Portfolio
          </Button>
          <OutlineButton
            className={
              "text-sm  font-inter font-normal rounded-full !text-[#0C89FF] !border-[#0C89FF]"
            }
            paddinig={"px-6 py-3"}
            background={"bg-transparent"}
          >
            Order
          </OutlineButton>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
