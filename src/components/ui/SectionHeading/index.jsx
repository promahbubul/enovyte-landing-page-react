const SectionHeading = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  border
}) => {
  return (
    <>
      <h3
        className={`text-orange text-base font-semibold font-raleway ${titleClassName}`}
      >
        {title}
      </h3>
      <h2
        className={`font-bold text-4xl md:text-5xl font-inter mt-2 text-white ${
          border && "border-b"
        }  pb-7 mb-7 ${descriptionClassName}`}
      >
        {description}
      </h2>
    </>
  );
};
export default SectionHeading;
