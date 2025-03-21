const StatusCard = ({ title, description, image, last }) => {
  return (
    <div className="flex items-center flex-row">
      <div className=" flex flex-row  items-center gap-4 px-8 py-[14px]">
        <img src={image} alt="" className="" />
        <div className="text-start">
          <h3 className="text-2xl font-semibold font-inter">{title}</h3>
          <p className="mt-1  text-base font-semibold font-inter">
            {description}
          </p>
        </div>
      </div>
      {!last && <div className="w-0.5 h-12 bg-white/50"></div>}
    </div>
  );
};
export default StatusCard;
