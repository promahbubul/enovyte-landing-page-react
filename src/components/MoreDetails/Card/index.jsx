const Card = ({ category, description, image, title, background }) => {
  return (
    <div
      className={`px-6 py-12  w-full h-full ${
        background ? "bg-[#0A2C8C]" : "border border-[#E8E5E5]/75 bg-white"
      }`}
    >
      <img src={image} alt="" className="mx-auto w-[200px] h-[195px]" />
      <div className="mt-8 text-left">
        <h2
          className={
            background
              ? "text-white text-3xl  font-semibold"
              : "text-[#001246] text-3xl  font-semibold"
          }
        >
          {title}
        </h2>
        <h3
          className={`mt-3  font-medium text-base font-inter ${
            background ? "text-[#65B5FF]" : "text-[#002AA3]"
          }`}
        >
          {category}
        </h3>
        <p
          className={`font-inter text-base mt-6 ${
            background ? "text-white" : "text-[#424242]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default Card;
