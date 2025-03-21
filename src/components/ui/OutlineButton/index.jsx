const OutlineButton = ({ children, paddinig, background, className }) => {
  return (
    <button
      className={`font-inter w-full md:w-auto font-semibold text-white p-5  rounded border border-white ${
        paddinig && paddinig
      } ${background && background} ${className && className} `}
    >
      {children}
    </button>
  );
};
export default OutlineButton;
