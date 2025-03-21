import { LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const FaqCard = ({ id, question, answer, activeFaq, setActiveFaq, last }) => {
  return (
    <div>
      {/* Question */}
      <div
        className={`flex flex-row items-start p-2 border-b  cursor-pointer border-b-[#E1E4ED] ${
          last && "border-b-0"
        } justify-between`}
      >
        <div className="flex flex-col md:flex-row items-start gap-1   md:gap-3">
          <p className="text-[#0A2C8C] md:p-5  font-semibold font-inter text-2xl md:text-lg">
            {id < 10 ? "0" + id : id}
          </p>
          <div className="md:p-5">
            <h4
              onClick={() =>
                activeFaq === id ? setActiveFaq(0) : setActiveFaq(id)
              }
              className="text-[#6D758F]    font-inter font-semibold text-lg md:text-2xl"
            >
              {question}
            </h4>
            <p
              className={`mt-2 md:mt-4  text-[#6D758F] font-inter font-normal text-base md:text-2xl ${
                activeFaq === id ? "" : "hidden"
              }`}
            >
              {answer}
            </p>
          </div>
        </div>
        <div className="md:p-5">
          <button
            onClick={() =>
              activeFaq === id ? setActiveFaq(0) : setActiveFaq(id)
            }
            className="text-[#6D758F]"
          >
            {activeFaq !== id ? <LuPlus size={16} /> : <IoClose size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default FaqCard;
