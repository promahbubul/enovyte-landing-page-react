const Button = ({children, className, background, padding, color }) => {
  return (
    <button
      className={`bg-orange w-full md:w-auto py-5 px-20 rounded text-white font-inter text-base font-medium ${background && background} ${padding && padding} ${color && color} ${
        className && className
      }`}
    >
      {children}
    </button>
  );
}
export default Button