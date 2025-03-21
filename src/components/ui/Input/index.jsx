const Input = ({ type, placeholder, label, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className="text-white font-semibold  text-sm font-inter"
        htmlFor=""
      >
        {label}
      </label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        className="mt-3 border border-[#F1F3F7]/20 outline-none text-white placeholder:text-[FFFFFF]/50  p-4 rounded-md bg-[#113393]/30"
      />
    </div>
  );
};
export default Input;
